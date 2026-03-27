import { useState } from 'react'
import {
  Card, CardContent, CardActions, Typography, Chip, Stack,
  IconButton, Collapse, Box, Tooltip, Divider,
} from '@mui/material'
import StarIcon from '@mui/icons-material/Star'
import ForkRightIcon from '@mui/icons-material/ForkRight'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const LANG_COLORS = {
  JavaScript: '#f1e05a',
  TypeScript: '#3178c6',
  Python: '#3572a5',
  'C#': '#178600',
  PHP: '#4f5d95',
  Vue: '#41b883',
  HTML: '#e34c26',
  CSS: '#563d7c',
  Java: '#b07219',
  Go: '#00ADD8',
  Rust: '#dea584',
  Shell: '#89e051',
}

export default function RepoCard({ repo }) {
  const [expanded, setExpanded] = useState(false)

  const langColor = LANG_COLORS[repo.language] || '#923ea5'

  return (
    <Card
      elevation={0}
      sx={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        bgcolor: 'background.paper',
        border: '1px solid rgba(146,62,165,0.15)',
        transition: 'all 0.2s',
        '&:hover': {
          borderColor: 'rgba(146,62,165,0.4)',
          boxShadow: '0 4px 24px rgba(146,62,165,0.1)',
        },
      }}
    >
      <CardContent sx={{ flex: 1, pb: 1 }}>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', mb: 1 }}>
          <Typography
            variant="h6"
            sx={{
              fontWeight: 700,
              fontSize: '1rem',
              wordBreak: 'break-word',
              color: 'primary.light',
            }}
          >
            {repo.name}
          </Typography>
          <Tooltip title="Abrir no GitHub">
            <IconButton
              size="small"
              href={repo.html_url}
              target="_blank"
              rel="noopener noreferrer"
              sx={{ color: 'text.secondary', ml: 1, flexShrink: 0 }}
            >
              <OpenInNewIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        <Typography
          variant="body2"
          sx={{ color: 'text.secondary', mb: 2, minHeight: 40, lineHeight: 1.6 }}
        >
          {repo.description || 'Sem descrição'}
        </Typography>

        <Stack direction="row" spacing={2} alignItems="center">
          {repo.language && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Box
                sx={{
                  width: 10,
                  height: 10,
                  borderRadius: '50%',
                  bgcolor: langColor,
                }}
              />
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {repo.language}
              </Typography>
            </Box>
          )}
          {repo.stargazers_count > 0 && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.3 }}>
              <StarIcon sx={{ fontSize: 14, color: '#f1c40f' }} />
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {repo.stargazers_count}
              </Typography>
            </Box>
          )}
          {repo.forks_count > 0 && (
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.3 }}>
              <ForkRightIcon sx={{ fontSize: 14, color: 'text.secondary' }} />
              <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                {repo.forks_count}
              </Typography>
            </Box>
          )}
        </Stack>
      </CardContent>

      {repo.readme && (
        <>
          <Divider sx={{ borderColor: 'rgba(146,62,165,0.1)' }} />
          <CardActions sx={{ px: 2, py: 1 }}>
            <Box
              onClick={() => setExpanded(!expanded)}
              sx={{
                display: 'flex',
                alignItems: 'center',
                gap: 0.5,
                cursor: 'pointer',
                color: 'text.secondary',
                fontSize: '0.8rem',
                '&:hover': { color: 'primary.light' },
              }}
            >
              <ExpandMoreIcon
                sx={{
                  fontSize: 18,
                  transform: expanded ? 'rotate(180deg)' : 'none',
                  transition: 'transform 0.2s',
                }}
              />
              {expanded ? 'Ocultar README' : 'Ver README'}
            </Box>
          </CardActions>
          <Collapse in={expanded} timeout="auto" unmountOnExit>
            <Divider sx={{ borderColor: 'rgba(146,62,165,0.1)' }} />
            <Box
              sx={{
                p: 2,
                maxHeight: 400,
                overflow: 'auto',
                fontSize: '0.85rem',
                color: 'text.secondary',
                '& h1, & h2, & h3': { color: 'text.primary', mt: 2, mb: 1 },
                '& code': {
                  bgcolor: 'rgba(255,255,255,0.06)',
                  px: 0.5,
                  borderRadius: 1,
                  fontFamily: 'monospace',
                  fontSize: '0.8rem',
                },
                '& pre': {
                  bgcolor: 'rgba(255,255,255,0.04)',
                  p: 2,
                  borderRadius: 1,
                  overflow: 'auto',
                  '& code': { bgcolor: 'transparent', p: 0 },
                },
                '& a': { color: 'primary.light' },
                '& img': { maxWidth: '100%' },
                '& table': { borderCollapse: 'collapse', width: '100%' },
                '& td, & th': { border: '1px solid rgba(255,255,255,0.1)', p: 1 },
              }}
            >
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {repo.readme}
              </ReactMarkdown>
            </Box>
          </Collapse>
        </>
      )}
    </Card>
  )
}
