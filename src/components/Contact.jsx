import {
  Box, Typography, Container, Stack, IconButton, Tooltip, Paper,
} from '@mui/material'
import PhoneIcon from '@mui/icons-material/Phone'
import EmailIcon from '@mui/icons-material/Email'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import GitHubIcon from '@mui/icons-material/GitHub'
import WhatsAppIcon from '@mui/icons-material/WhatsApp'

const contacts = [
  {
    label: 'WhatsApp',
    icon: <WhatsAppIcon fontSize="large" />,
    href: 'https://api.whatsapp.com/send?phone=5541997185757',
    color: '#25D366',
    text: '+55 (41) 99718-5757',
  },
  {
    label: 'Telefone',
    icon: <PhoneIcon fontSize="large" />,
    href: 'tel:+5541997185757',
    color: '#923ea5',
    text: '+55 (41) 99718-5757',
  },
  {
    label: 'E-mail',
    icon: <EmailIcon fontSize="large" />,
    href: 'mailto:nicolas.azul.job@gmail.com',
    color: '#EA4335',
    text: 'nicolas.azul.job@gmail.com',
  },
  {
    label: 'LinkedIn',
    icon: <LinkedInIcon fontSize="large" />,
    href: 'https://www.linkedin.com/in/nicolas-henrique/',
    color: '#0A66C2',
    text: 'linkedin.com/in/nicolas-henrique',
  },
  {
    label: 'GitHub',
    icon: <GitHubIcon fontSize="large" />,
    href: 'https://github.com/nichcm',
    color: '#f0f0f0',
    text: 'github.com/nichcm',
  },
]

export default function Contact() {
  return (
    <Box id="contato" sx={{ py: { xs: 8, md: 12 } }}>
      <Container maxWidth="md">
        <Typography
          variant="h3"
          sx={{
            mb: 2,
            fontWeight: 700,
            textAlign: 'center',
          }}
        >
          Vamos conversar?
        </Typography>
        <Typography
          variant="body1"
          sx={{ color: 'text.secondary', textAlign: 'center', mb: 6, maxWidth: 500, mx: 'auto' }}
        >
          Estou aberto a novas oportunidades e colaborações. Entre em contato por qualquer um dos canais abaixo.
        </Typography>

        <Stack
          direction="row"
          flexWrap="wrap"
          justifyContent="center"
          gap={3}
        >
          {contacts.map((c) => (
            <Tooltip key={c.label} title={c.text} placement="top">
              <Paper
                component="a"
                href={c.href}
                target={c.href.startsWith('http') ? '_blank' : undefined}
                rel={c.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                elevation={0}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: 1,
                  p: 3,
                  width: 120,
                  textDecoration: 'none',
                  bgcolor: 'background.paper',
                  border: '1px solid rgba(146,62,165,0.15)',
                  borderRadius: 3,
                  transition: 'all 0.2s',
                  cursor: 'pointer',
                  '&:hover': {
                    borderColor: c.color,
                    transform: 'translateY(-4px)',
                    boxShadow: `0 8px 24px ${c.color}30`,
                  },
                }}
              >
                <Box sx={{ color: c.color }}>{c.icon}</Box>
                <Typography variant="caption" sx={{ color: 'text.secondary', textAlign: 'center' }}>
                  {c.label}
                </Typography>
              </Paper>
            </Tooltip>
          ))}
        </Stack>
      </Container>
    </Box>
  )
}
