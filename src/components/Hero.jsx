import {
  Box, Typography, Avatar, Button, Stack, Chip, Container,
} from '@mui/material'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import DownloadIcon from '@mui/icons-material/Download'
import LocationOnIcon from '@mui/icons-material/LocationOn'

export default function Hero() {
  return (
    <Box
      id="sobre"
      sx={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        background: 'linear-gradient(135deg, rgba(16,46,255,0.08) 0%, rgba(146,62,165,0.12) 50%, rgba(210,55,155,0.08) 100%)',
        position: 'relative',
        overflow: 'hidden',
        '&::before': {
          content: '""',
          position: 'absolute',
          top: '-50%',
          right: '-20%',
          width: '600px',
          height: '600px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(146,62,165,0.12) 0%, transparent 70%)',
          pointerEvents: 'none',
        },
      }}
    >
      <Container maxWidth="lg">
        <Box
          sx={{
            display: 'flex',
            flexDirection: { xs: 'column', md: 'row' },
            alignItems: 'center',
            gap: { xs: 4, md: 8 },
          }}
        >
          <Box sx={{ flexShrink: 0 }}>
            <Avatar
              src="/eu2.jpeg"
              alt="Nicolas Henrique Corrêa Martins"
              sx={{
                width: { xs: 180, md: 240 },
                height: { xs: 180, md: 240 },
                border: '4px solid',
                borderColor: 'primary.main',
                boxShadow: '0 0 40px rgba(146, 62, 165, 0.4)',
              }}
            />
          </Box>

          <Box>
            <Typography
              variant="h2"
              sx={{
                fontSize: { xs: '2rem', md: '3rem' },
                fontWeight: 700,
                mb: 1,
                background: 'linear-gradient(90deg, #f0f0f0, #923ea5)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
              }}
            >
              Nicolas Henrique Corrêa Martins
            </Typography>

            <Typography
              variant="h5"
              sx={{ color: 'primary.light', fontWeight: 500, mb: 2 }}
            >
              Full Stack Developer
            </Typography>

            <Stack direction="row" alignItems="center" spacing={0.5} sx={{ mb: 2, color: 'text.secondary' }}>
              <LocationOnIcon fontSize="small" />
              <Typography variant="body2">Curitiba – PR, Brasil</Typography>
            </Stack>

            <Stack direction="row" flexWrap="wrap" gap={1} sx={{ mb: 3 }}>
              {['Vue.js', 'Angular', 'React', '.NET / C#', 'Node.js', 'PHP', 'TypeScript'].map((tech) => (
                <Chip
                  key={tech}
                  label={tech}
                  size="small"
                  variant="outlined"
                  sx={{ borderColor: 'primary.dark', color: 'primary.light' }}
                />
              ))}
            </Stack>

            <Typography
              variant="body1"
              sx={{ color: 'text.secondary', mb: 4, maxWidth: 600, lineHeight: 1.8 }}
            >
              Desenvolvedor Full Stack com experiência em construção e manutenção de aplicações web,
              atuando tanto no front-end quanto no back-end. Experiência com Vue, Angular, React, .NET,
              Node.js e bancos relacionais como SQL Server, PostgreSQL e MySQL. Perfil colaborativo,
              com vivência em ambientes ágeis e foco em aprendizado contínuo.
            </Typography>

            <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2}>
              <Button
                variant="contained"
                startIcon={<LinkedInIcon />}
                href="https://www.linkedin.com/in/nicolas-henrique/"
                target="_blank"
                rel="noopener noreferrer"
                sx={{
                  background: 'linear-gradient(135deg, #923ea5, #102eff)',
                  '&:hover': { background: 'linear-gradient(135deg, #b86ec4, #5a6fff)' },
                }}
              >
                LinkedIn
              </Button>
              <Button
                variant="outlined"
                startIcon={<GitHubIcon />}
                href="https://github.com/nichcm"
                target="_blank"
                rel="noopener noreferrer"
                sx={{ borderColor: 'primary.main', color: 'primary.light' }}
              >
                GitHub
              </Button>
              <Button
                variant="outlined"
                startIcon={<DownloadIcon />}
                href="/docs/Curriculo Nicolas Henrique Corrêa Martins.pdf"
                download
                sx={{ borderColor: 'text.secondary', color: 'text.secondary' }}
              >
                Currículo
              </Button>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  )
}
