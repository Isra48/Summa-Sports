import React from 'react'
import './Home1.css'
import Image from '../img/section2.jpg'
import Patern from '../img/Patern.jpg'
import { Link } from 'gatsby'
import Box from '../img/icons2/Box.svg'
import Landscape from '../img/icons2/Landscape.svg'
import Reel from '../img/icons2/Reel.svg'
import Target from '../img/icons2/Target.svg'

export default function Home1() {
  return (
    <div className="home">
      <div className="hero">
        <div className="header-content">
          <div className="copies">
            <h1 className="title">
              DEPORTISTAS HACIENDO <span>MARKETING PARA DEPORTISTAS </span>
            </h1>
          </div>
          <Link className="btn" to="/contact/">
            Contacto
          </Link>
        </div>
      </div>

      <div className="section2">
        <div className="father-box">
          <div className="item1">
            <img src={Image} />
          </div>

          <div className="item2">
            <h2 className="titlei2">"Pensamos por ti"</h2>

            <p>
              En SUMMA hablamos el mismo idioma que tú. Somos un equipo
              conformado por deportistas de alto rendimiento y profesionistas de
              marketing con gran experiencia en medios deportivos, entendemos
              cómo funcionan los deportes y lo digital en esta era.
            </p>
          </div>
        </div>
      </div>

      <div className="section3">
        <h1 className="titles3">SERVICIOS</h1>
        <div className="services__wrapper">
          <div className="services__card">
            <h2>Social Media</h2>
            <p>
              La interacción que tienes en tus redes es proporcional a la
              cantidad de posibilidad de nuevos clientes.
            </p>
            <div className="services__btn">
              <Link to="/servicios/">
                <button>Empezar</button>
              </Link>
            </div>
          </div>

          <div className="services__card">
            <h2>Web Development</h2>
            <p>Tu carta de presentación en esta era digital.</p>
            <div className="services__btn">
              <Link to="/servicios/">
                <button>Empezar</button>
              </Link>
            </div>
          </div>

          <div className="services__card">
            <h2>E-commerce</h2>
            <p>La cercania con tus clientes 24/7</p>
            <div className="services__btn">
              <Link to="/servicios/">
                <button>Empezar</button>
              </Link>
            </div>
          </div>
          <div className="services__card">
            <h2>Events planning</h2>
            <p>
              ¿Quieres marcar tendencia en el mundo de los eventos? Estás con el
              equipo correcto.
            </p>
            <div className="services__btn">
              <Link to="/servicios/">
                <button>Empezar</button>
              </Link>
            </div>
          </div>
        </div>

        <div className="section2">
          <div className="father-box">
            <div className="item1-1">
              <img src={Patern} className="patern" />
            </div>

            <div className="item2">
              <h2 className="title4">Nosotros</h2>

              <p>
                Es hora de llevar tu negocio a otro nivel posicionándolo
                digitalmente. Posicionar tu marca ya no es más un trabajo para
                novatos, es un trabajo que requiere de profesionales. Deja tu
                negocio en manos de nuestros expertos y permítenos sumar valor a
                tu negocio a un precio ¡irresistible!
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section4">
        <h3 className="h3s4">Más que solo servicios</h3>
        <div className="items4">
          <div className="itemsiconss4">
            <img src={Target} className="icons4" />
            <h4> Strategy</h4>
            <p className="ps4">
              Estrategia <br /> empresarial/ conceptual
            </p>
          </div>

          <div className="itemsiconss4">
            <img src={Landscape} className="icons4" />
            <h4> Concept</h4>
            <p className="ps4">
              Materializamos <br /> tu idea{' '}
            </p>
          </div>

          <div className="itemsiconss4">
            <img src={Box} className="icons4" />
            <h4> Campaign</h4>
            <p className="ps4">
              Campañas de alto <br /> impacto social
            </p>
          </div>

          <div className="itemsiconss4">
            <img src={Reel} className="icons4" />
            <h4> Production</h4>
            <p className="ps4">
              Creadores de <br /> contenido multimedia
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
