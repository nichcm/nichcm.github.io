import {
  Box, Typography, Container, Grid, CircularProgress, Alert, Button,
} from '@mui/material'
import FolderIcon from '@mui/icons-material/Folder'
import GitHubIcon from '@mui/icons-material/GitHub'
import { useGitHubRepos } from '../hooks/useGitHubRepos'
import RepoCard from './RepoCard'

export default function Projects() {
  const { repos, loading, error } = useGitHubRepos()

  return (
    <Box
      id="projetos"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, transparent, rgba(16,46,255,0.04), transparent)',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', mb: 6, flexWrap: 'wrap', gap: 2 }}>
          <Typography
            variant="h3"
            sx={{
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              gap: 2,
            }}
          >
            <FolderIcon sx={{ color: 'primary.main' }} />
            Projetos
          </Typography>
          <Button
            variant="outlined"
            startIcon={<GitHubIcon />}
            href="https://github.com/nichcm"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ borderColor: 'primary.main', color: 'primary.light' }}
          >
            Ver todos no GitHub
          </Button>
        </Box>

        {loading && (
          <Box sx={{ display: 'flex', justifyContent: 'center', py: 8 }}>
            <CircularProgress color="primary" />
          </Box>
        )}

        {error && (
          <Alert
            severity="warning"
            sx={{ mb: 3, bgcolor: 'rgba(146,62,165,0.1)', color: 'text.primary' }}
          >
            Não foi possível carregar os repositórios: {error}
          </Alert>
        )}

        {!loading && repos.length === 0 && !error && (
          <Typography variant="body1" sx={{ color: 'text.secondary', textAlign: 'center', py: 8 }}>
            Nenhum repositório público encontrado.
          </Typography>
        )}

        <Grid container spacing={3}>
          {repos.map((repo) => (
            <Grid item xs={12} sm={6} lg={4} key={repo.id}>
              <RepoCard repo={repo} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
