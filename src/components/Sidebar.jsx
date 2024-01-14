import SocialNetworks from "./SocialNetworks"
import InfoContainer from "./InfoContainer"

import profile from "../assets/profile.jpeg"

import "../styles/components/sidebar.sass"

const Sidebar = () => {
  return (
    <aside id="sidebar">{/* tag semântica utilizada para barra de navegação laterais. */}
        <img src={profile} alt="avatar" />
        <p className='title'>Desenvolvedor</p>
        <SocialNetworks/>
        <InfoContainer/>
        <a href="" className='btn'>
            Download Currículo
        </a>
    </aside>
  )
}

export default Sidebar