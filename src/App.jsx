// Dependencies
import { React } from 'react'
import ParticlesAnimation from './Components/ParticlesAnimation'
import Theme from './Styles/theme'
// Pages
import Home from './Pages/Home'

function App() {
  return (
    <>
      <Theme>
        <Home />
        <ParticlesAnimation />
      </Theme>
    </>
  )
}

export default App
