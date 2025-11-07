import './App.css'
import { Banner } from './components/Banner/Banner'
import { Footer } from './components/Footer/Footer'
import { Header } from './components/Header/Header'
import { MovieSection } from './components/MovieSection/MovieSection'
import { Newsletter } from './components/Newsletter/Newsletter'

function App() {

  return (
    <>
      <Header />
      <Banner src='./assets/imagens/banner-desktop.png' alt='Banner'/>
      <MovieSection />
      <Banner src='./assets/imagens/banner-combo-desktop.png' alt='Banner' />
      <Newsletter />
      <Footer />
    </>
  )
}

export default App
