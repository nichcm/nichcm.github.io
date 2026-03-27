import { ThemeProvider, CssBaseline, Box } from '@mui/material'
import theme from './theme'
import Header from './components/Header'
import Hero from './components/Hero'
import Education from './components/Education'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Box sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
        <Header />
        <Box component="main">
          <Hero />
          <Education />
          <Experience />
          <Skills />
          <Projects />
          <Contact />
        </Box>
        <Box
          component="footer"
          sx={{
            textAlign: 'center',
            py: 3,
            color: 'text.secondary',
            fontSize: '0.85rem',
            borderTop: '1px solid rgba(146, 62, 165, 0.2)',
          }}
        >
          © {new Date().getFullYear()} Nicolas Henrique Corrêa Martins
        </Box>
      </Box>
    </ThemeProvider>
  )
}
