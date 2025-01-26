import './App.css'
import { theme } from "./styles/theme"
import { ThemeProvider } from 'styled-components'
import { Navbar } from './components/Navbar'
import { TextImageGrid } from './components/TextImageGrid'
import { Testimonials } from './components/Testimonials'
import { Footer } from './components/Footer'

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Navbar />
        <TextImageGrid />
        <Testimonials />
        <Footer />
      </ThemeProvider>
    </>
  )
}

export default App
