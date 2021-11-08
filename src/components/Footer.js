import React from 'react'
import './Footer.css'
import { FaFacebookF } from '@react-icons/all-files/fa/FaFacebookF'
import { FaInstagram } from 'react-icons/fa'
import { FaTiktok } from 'react-icons/fa'

export default () => (
  <div>
    <div className="links-footer">
      <div>
        <h2 className="footer-title"> SUMMASPORTS</h2>
      </div>

      <div>
        <p className="copie-icons">Siguenos en nuestras redes:</p>
        <div className="social-icons">
          <a href="https://www.facebook.com/summamkt">
            <FaFacebookF />
          </a>
          <a href="https://www.instagram.com/sportsmarketingsumma/?hl=es">
            <FaInstagram />
          </a>
          <a href="https://www.tiktok.com/@summasportsmarketing?">
            <FaTiktok />
          </a>
        </div>
      </div>
    </div>

    <footer className="footer">
      <div className="container taCenter">
        <span>
          © Copyright {new Date().getFullYear()} All rights reserved. Made with love by{' '}
          <a href="" style={{color: "#F2E205"}}>Flipapps</a>.
        </span>
      </div>
    </footer>
  </div>
)
