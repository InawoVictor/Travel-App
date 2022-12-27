import React from 'react'
import './Footer.css'
import {
    FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube
} from 'react-icons/fa';


const Footer = () => {
  return (
    <div className='footer'>
      <div className='container'>
          <div className='top'>
            <h3>BEACHES</h3>
            <div className='social'>
                <FaFacebook className='icon' />
                <FaInstagram className='icon' />
                <FaTwitter className='icon' />
                <FaPinterest className='icon' />
                <FaYoutube className='icon' />
            </div>
          </div>
          <div className='bottom'>
            <div className='left'>
                <ul>
                    <li>About</li>
                    <li>Partnerships</li>
                    <li>Newsroom</li>
                    <li>Career</li>
                    <li>Advertising</li>
                </ul>
            </div>
            <div className='right'>
                <ul>
                    <li>Contact</li>
                    <li>Terms & Conditions</li>
                    <li>Policy</li>
                    <li>Privacy</li>
                    <li>Pricing</li>
                </ul>
                <p>Project By InawoVictor &copy; WebDev</p>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer;
