import {
  Box, Typography, Container, Grid, Paper, Chip, Stack,
} from '@mui/material'
import CodeIcon from '@mui/icons-material/Code'

const skillGroups = [
  {
    group: 'Front-end',
    skills: ['Vue.js', 'Angular', 'React', 'JavaScript', 'TypeScript', 'HTML', 'CSS'],
  },
  {
    group: 'Back-end',
    skills: ['PHP / Symfony', 'C# / .NET', 'Node.js', 'REST APIs'],
  },
  {
    group: 'Banco de Dados',
    skills: ['MySQL', 'PostgreSQL', 'SQL Server', 'MongoDB'],
  },
  {
    group: 'Arquitetura & Práticas',
    skills: ['Arquitetura de Software', 'Domain Driven Design (DDD)', 'Microsserviços', 'Testes Unitários', 'Agile / Scrum', 'Git'],
  },
  {
    group: 'Outros',
    skills: ['Inglês Intermediário', 'Linux', 'Docker'],
  },
]

export default function Skills() {
  return (
    <Box
      id="skills"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, transparent, rgba(146,62,165,0.04), transparent)',
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant="h3"
          sx={{
            mb: 6,
            fontWeight: 700,
            display: 'flex',
            alignItems: 'center',
            gap: 2,
            '&::after': {
              content: '""',
              flex: 1,
              height: '2px',
              background: 'linear-gradient(90deg, rgba(146,62,165,0.6), transparent)',
              ml: 2,
            },
          }}
        >
          <CodeIcon sx={{ color: 'primary.main' }} />
          Competências Técnicas
        </Typography>

        <Grid container spacing={3}>
          {skillGroups.map((group) => (
            <Grid item xs={12} sm={6} md={4} key={group.group}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  bgcolor: 'background.paper',
                  border: '1px solid rgba(146,62,165,0.15)',
                }}
              >
                <Typography variant="overline" sx={{ color: 'primary.light', fontWeight: 700, letterSpacing: 1 }}>
                  {group.group}
                </Typography>
                <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mt: 1.5 }}>
                  {group.skills.map((skill) => (
                    <Chip
                      key={skill}
                      label={skill}
                      size="small"
                      sx={{
                        bgcolor: 'rgba(146,62,165,0.1)',
                        color: 'text.primary',
                        border: '1px solid rgba(146,62,165,0.2)',
                      }}
                    />
                  ))}
                </Stack>
              </Paper>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  )
}
