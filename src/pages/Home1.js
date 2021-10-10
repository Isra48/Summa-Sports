import React from 'react'
import './Home1.css'
import Image from '../img/section2.jpg'
import Bg from '../img/Bg.jpg'




export default function Home1() {
    return (
        <div className="home">


            <div className="hero"> 
                <div className="header-content">
                    <div className="copies">
                    <h1 className="title">DEPORTISTAS HACIENDO <span>MARKETING PARA DEPORTISTAS </span></h1>
                        
                    </div>

                    <a className="btn"> hola putos </a>
                </div> 
             </div>



             <div className="section2"> 
                <div className="father-box">
                    <div className="item1">
                        
                        <img src={Image}/>

                      </div>

                      <div className="item2">
                          <h2 className="titlei2">"Pensamos por ti"</h2>
                          
                        <p>En SUMMA  hablamos el mismo idioma que tú. Somos un equipo conformado por deportistas de alto rendimiento y profesionistas de marketing con gran experiencia en medios deportivos, entendemos cómo funcionan los deportes y lo digital en esta era. 
                        </p>

                    </div>

                </div> 
            </div>


            <div className="section3"> 
              
                   
            </div>




        </div>

        


        
        

        


        
    )
}
