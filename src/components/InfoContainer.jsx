import {AiFillPhone, AiOutlineMail, AiFillEnvironment} from "react-icons/ai"

import "../styles/components/infoContainer.sass"

const iconsInfo = [
    {name: "Telefone", info: "4002-8922" ,  icon: <AiFillPhone/>},
    {name: "E-mail", info: "biruleibe@gmail.com" , icon: <AiOutlineMail/>},
    {name: "Localização", info: "No carro do leite - PB" , icon: <AiFillEnvironment/>}
]

const InfoContainer = () => {
  return (
    <section id="information">
        {iconsInfo.map((i) => (
            <div className="info-card" key={i.name}>
                <span id='icon'>{i.icon}</span>
                <div>
                    <h3>{i.name}</h3>
                    <p>{i.info}</p>
                </div>
            </div>
        ))}
    </section>
  )
}

export default InfoContainer