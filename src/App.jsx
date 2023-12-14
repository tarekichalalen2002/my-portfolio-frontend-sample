import { useState } from 'react'
import { Navbar,Menu,Hero,ProjectsSlide,ContactForm,About,Skills } from './components'
import state from './state'
import { useSnapshot } from 'valtio'

function App() {
  const snap = useSnapshot(state)

  return (
    <main>
      <Navbar />
      {
        snap.isMenuVisible && <Menu />
      }
      {
        snap.currentPage === 1 && <Hero />
      }
      {
        snap.currentPage === 2 && <About />
      }
      {
        snap.currentPage === 3 && <ProjectsSlide />
      }
      {
        snap.currentPage === 4 && <ContactForm />
      }
      {
        snap.currentPage === 5 && <Skills />
      }
    </main>
  )
}

export default App
