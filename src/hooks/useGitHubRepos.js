import { useState, useEffect } from 'react'

const CACHE_KEY = 'github_repos_cache'
const CACHE_TTL = 60 * 60 * 1000 // 1 hour

function getCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY)
    if (!raw) return null
    const { data, timestamp } = JSON.parse(raw)
    if (Date.now() - timestamp > CACHE_TTL) return null
    return data
  } catch {
    return null
  }
}

function setCache(data) {
  try {
    localStorage.setItem(CACHE_KEY, JSON.stringify({ data, timestamp: Date.now() }))
  } catch {
    // ignore storage errors
  }
}

async function fetchReadme(repoName) {
  const res = await fetch(`https://api.github.com/repos/nichcm/${repoName}/readme`, {
    headers: { Accept: 'application/vnd.github.v3+json' },
  })
  if (!res.ok) return null
  const json = await res.json()
  return atob(json.content.replace(/\n/g, ''))
}

export function useGitHubRepos() {
  const [repos, setRepos] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function load() {
      const cached = getCache()
      if (cached) {
        setRepos(cached)
        setLoading(false)
        return
      }

      try {
        const res = await fetch(
          'https://api.github.com/users/nichcm/repos?sort=updated&per_page=30&type=public',
          { headers: { Accept: 'application/vnd.github.v3+json' } }
        )
        if (!res.ok) throw new Error(`GitHub API error: ${res.status}`)
        const repoList = await res.json()

        // filter out forked repos and the portfolio itself
        const filtered = repoList.filter((r) => !r.fork && r.name !== 'nichcm.github.io')

        // fetch readmes in parallel (best effort)
        const withReadmes = await Promise.allSettled(
          filtered.map(async (repo) => {
            const readme = await fetchReadme(repo.name)
            return { ...repo, readme }
          })
        )

        const result = withReadmes
          .filter((r) => r.status === 'fulfilled')
          .map((r) => r.value)

        setCache(result)
        setRepos(result)
      } catch (err) {
        setError(err.message)
      } finally {
        setLoading(false)
      }
    }

    load()
  }, [])

  return { repos, loading, error }
}
