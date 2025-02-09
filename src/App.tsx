
import ScollToHero from "./components/ScrollToHero/ScrollToHero"
import Home from "./pages/Home/Home"
import About from "./pages/Home/sections/About/About"
import Contato from "./pages/Home/sections/Contato/Contato"
import Footer from "./pages/Home/sections/Footer/Footer"
import Projetos from "./pages/Home/sections/Projetos/Projetos"
import Skills from "./pages/Home/sections/Skills/Skills"


const App = () => {


  return (
    <>
      <Home />
      <About />
      <Skills />
      <Projetos />
      <Contato />
      <Footer />
      <ScollToHero />
    </>
  )
}

export default App
