import React from 'react'
import './Footer.css'
import { FaFacebookF } from "@react-icons/all-files/fa/FaFacebookF";
import {FaInstagram} from "react-icons/fa";
import {FaTiktok} from "react-icons/fa";






export default () => (
  <div>
    <div className="links-footer">
      <div>
        <h2 className="footer-title"> Summasports</h2>

      </div>

      <div>
     
  
        <p className="copie-icons">Siguenos en nuestras redes:</p>
        <div className="social-icons"> 
        <FaFacebookF/> 
        <FaInstagram/>
        <FaTiktok/> 
        

        </div>
        
       
        


      </div>


    </div>
   
    

    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Crafted by{' '}
          <a href="https://thriveweb.com.au/">Thrive</a>.
        </span>
      </div>
    </footer>
  </div>
)
