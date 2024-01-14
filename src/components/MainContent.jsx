import About from "./About"
import Projects from "./Projects"

import "../styles/components/mainContent.sass"

const MainContent = () => {
  return (
    <main id="main-content">
      <About/>
      <Projects/>
    </main>
  )
}

export default MainContent