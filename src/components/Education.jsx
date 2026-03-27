import {
  Box, Typography, Container, Grid, Paper, Chip, Stack, Divider,
} from '@mui/material'
import SchoolIcon from '@mui/icons-material/School'
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium'

const educations = [
  {
    institution: 'FIAP',
    degree: 'Pós-graduação em Arquitetura de Software',
    field: 'Engenharia de Software',
    period: 'Jun/2025 – Mai/2026',
    status: 'Em andamento',
    icon: '🏛️',
  },
  {
    institution: 'Universidade Positivo',
    degree: 'Engenharia de Computação',
    field: 'Tecnologia e Eletrônica',
    period: '2018 – 2022',
    status: 'Concluído',
    icon: '💻',
  },
  {
    institution: 'SENAI',
    degree: 'Técnico em Mecânica Industrial',
    field: '',
    period: '2014 – 2016',
    status: 'Concluído',
    icon: '⚙️',
  },
]

const certifications = [
  'JavaScript: Conhecendo o Browser e padrões de projeto',
  'jQuery: Domine a biblioteca mais popular do mercado – Parte 1',
  'jQuery: Avance na biblioteca mais popular do mercado – Parte 2',
  'HTML5 e CSS3 Parte 2: Posicionamento, listas e navegação',
  'HTML5 e CSS3 Parte 1: A primeira página da Web',
]

export default function Education() {
  return (
    <Box id="formacao" sx={{ py: { xs: 8, md: 12 } }}>
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
          <SchoolIcon sx={{ color: 'primary.main' }} />
          Formação Acadêmica
        </Typography>

        <Grid container spacing={3} sx={{ mb: 6 }}>
          {educations.map((edu, idx) => (
            <Grid item xs={12} md={4} key={idx}>
              <Paper
                elevation={0}
                sx={{
                  p: 3,
                  height: '100%',
                  bgcolor: 'background.paper',
                  border: '1px solid rgba(146,62,165,0.15)',
                  transition: 'all 0.2s',
                  '&:hover': {
                    borderColor: 'primary.main',
                    transform: 'translateY(-4px)',
                    boxShadow: '0 8px 32px rgba(146,62,165,0.15)',
                  },
                }}
              >
                <Typography variant="h2" sx={{ mb: 2, fontSize: '2.5rem' }}>
                  {edu.icon}
                </Typography>
                <Chip
                  label={edu.status}
                  size="small"
                  color={edu.status === 'Em andamento' ? 'primary' : 'default'}
                  sx={{ mb: 2, fontSize: '0.75rem' }}
                />
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 0.5 }}>
                  {edu.degree}
                </Typography>
                {edu.field && (
                  <Typography variant="body2" sx={{ color: 'text.secondary', mb: 0.5 }}>
                    {edu.field}
                  </Typography>
                )}
                <Typography variant="body1" sx={{ color: 'primary.light', fontWeight: 500, mb: 0.5 }}>
                  {edu.institution}
                </Typography>
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {edu.period}
                </Typography>
              </Paper>
            </Grid>
          ))}
        </Grid>

        {/* Certifications */}
        <Paper
          elevation={0}
          sx={{
            p: 3,
            bgcolor: 'background.paper',
            border: '1px solid rgba(146,62,165,0.15)',
          }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 2 }}>
            <WorkspacePremiumIcon sx={{ color: 'primary.main' }} />
            <Typography variant="h6" sx={{ fontWeight: 700 }}>
              Certificações
            </Typography>
          </Box>
          <Divider sx={{ borderColor: 'rgba(146,62,165,0.1)', mb: 2 }} />
          <Stack spacing={1.5}>
            {certifications.map((cert, idx) => (
              <Box key={idx} sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
                <Box
                  sx={{
                    width: 6,
                    height: 6,
                    borderRadius: '50%',
                    bgcolor: 'primary.main',
                    flexShrink: 0,
                  }}
                />
                <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                  {cert}
                </Typography>
              </Box>
            ))}
          </Stack>
        </Paper>
      </Container>
    </Box>
  )
}
