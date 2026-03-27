import {
  Box, Typography, Container, Paper, Chip, Stack,
} from '@mui/material'
import WorkIcon from '@mui/icons-material/Work'
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter'

const experiences = [
  {
    company: 'Intelia',
    role: 'Desenvolvedor Full Stack',
    period: 'Mar/2024 – Mar/2026',
    location: 'Curitiba – PR',
    description: [
      'Desenvolvimento e manutenção de aplicações web utilizando PHP com Symfony, desde novas funcionalidades até evolução de sistemas em produção',
      'Manutenção e evolução de interfaces em Vue.js com foco em usabilidade e consistência visual via Design System da empresa',
      'Implementação de testes unitários e automatizados, contribuindo para estabilidade em ciclos ágeis',
      'Participação ativa em decisões de arquitetura e sugestões de melhoria de usabilidade, reconhecidas pelo time de produto',
      'Banco de dados MySQL com atenção ao desempenho de queries',
    ],
    techs: ['PHP', 'Symfony', 'Vue.js', 'MySQL', 'Testes'],
  },
  {
    company: 'CodeByte',
    role: 'Full Stack Developer',
    period: 'Jun/2022 – Fev/2024',
    location: 'Curitiba – PR',
    description: [
      'Desenvolvimento de aplicações front-end utilizando Angular e React',
      'Sustentação e evolução de APIs em C#/.NET, incluindo sistemas legados',
      'Participação na implementação de melhorias técnicas e organização do código',
      'Atuação com bancos de dados SQL Server e PostgreSQL (queries, procedures e ajustes de performance)',
      'Apoio na construção e manutenção da arquitetura dos sistemas',
    ],
    techs: ['Angular', 'React', 'C#', '.NET', 'SQL Server', 'PostgreSQL'],
  },
  {
    company: 'CEKSoftware',
    role: 'Full Stack Developer',
    period: 'Fev/2022 – Jun/2022',
    location: 'Curitiba – PR',
    description: [
      'Desenvolvimento de interfaces em Angular',
      'Manutenção de APIs REST utilizando Node.js e .NET',
      'Atuação com banco de dados PostgreSQL',
    ],
    techs: ['Angular', 'Node.js', '.NET', 'PostgreSQL'],
  },
  {
    company: 'Experiências anteriores',
    role: 'Atendimento e Suporte ao Cliente',
    period: '2017 – 2021',
    location: 'Curitiba – PR',
    description: [
      'Experiências em atendimento e suporte ao cliente, com desenvolvimento de habilidades como comunicação, resolução de problemas e relacionamento com cliente.',
    ],
    techs: [],
  },
]

export default function Experience() {
  return (
    <Box
      id="experiencia"
      sx={{
        py: { xs: 8, md: 12 },
        background: 'linear-gradient(180deg, transparent, rgba(16,46,255,0.04), transparent)',
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
          <WorkIcon sx={{ color: 'primary.main' }} />
          Experiência Profissional
        </Typography>

        <Box sx={{ position: 'relative' }}>
          <Box
            sx={{
              position: 'absolute',
              left: { xs: 20, md: 28 },
              top: 0,
              bottom: 0,
              width: '2px',
              background: 'linear-gradient(180deg, #923ea5, #102eff, rgba(146,62,165,0.05))',
            }}
          />

          <Stack spacing={4}>
            {experiences.map((exp, idx) => (
              <Box
                key={idx}
                sx={{
                  display: 'flex',
                  gap: { xs: 3, md: 4 },
                  pl: { xs: 1, md: 0 },
                }}
              >
                <Box
                  sx={{
                    flexShrink: 0,
                    width: 40,
                    height: 40,
                    borderRadius: '50%',
                    bgcolor: 'background.paper',
                    border: '2px solid rgba(146,62,165,0.4)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 1,
                    mt: 2,
                  }}
                >
                  <BusinessCenterIcon sx={{ fontSize: 18, color: 'primary.main' }} />
                </Box>

                <Paper
                  elevation={0}
                  sx={{
                    flex: 1,
                    p: 3,
                    bgcolor: 'background.paper',
                    border: '1px solid rgba(146,62,165,0.1)',
                    transition: 'border-color 0.2s',
                    '&:hover': { borderColor: 'rgba(146,62,165,0.4)' },
                  }}
                >
                  <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', gap: 1, mb: 1 }}>
                    <Box>
                      <Typography variant="h6" sx={{ fontWeight: 700 }}>
                        {exp.role}
                      </Typography>
                      <Typography variant="subtitle1" sx={{ color: 'primary.light', fontWeight: 500 }}>
                        {exp.company}
                      </Typography>
                    </Box>
                    <Box sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
                      <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                        {exp.period}
                      </Typography>
                      <Typography variant="caption" sx={{ color: 'text.secondary' }}>
                        {exp.location}
                      </Typography>
                    </Box>
                  </Box>

                  <Box component="ul" sx={{ pl: 2, mt: 1.5, mb: exp.techs.length ? 2 : 0 }}>
                    {exp.description.map((item, i) => (
                      <Box component="li" key={i} sx={{ color: 'text.secondary', mb: 0.5, lineHeight: 1.7 }}>
                        <Typography variant="body2">{item}</Typography>
                      </Box>
                    ))}
                  </Box>

                  {exp.techs.length > 0 && (
                    <Stack direction="row" flexWrap="wrap" gap={1}>
                      {exp.techs.map((tech) => (
                        <Chip
                          key={tech}
                          label={tech}
                          size="small"
                          sx={{
                            bgcolor: 'rgba(146,62,165,0.1)',
                            color: 'primary.light',
                            border: '1px solid rgba(146,62,165,0.2)',
                          }}
                        />
                      ))}
                    </Stack>
                  )}
                </Paper>
              </Box>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  )
}
