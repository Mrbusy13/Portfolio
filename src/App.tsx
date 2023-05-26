import About from './components/About'
import Contact from './components/Contact'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Sidenav from './components/Sidenav'
import Techstack from './components/Techstack'

function App() {
 
  return (
    <div className='snap-y snap-mandatory overflow-auto h-screen w-screen'>
      <Sidenav/>
      <div className='snap-start'>
      <Hero />
      </div>
      <div className='snap-start'>
      <About/>
      </div>
      <div className='snap-start'>
      <Techstack/>
      </div>
      <div className='snap-start'>
      <Projects/>
      </div>
      <div className='snap-start'>
      <Contact/>
      </div>
     </div>
  )
}

export default App
