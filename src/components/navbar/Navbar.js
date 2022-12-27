import { BiSearch } from 'react-icons/bi'
import { BsPerson } from 'react-icons/bs'
import { HiOutlineMenuAlt4 } from 'react-icons/hi'
import {
    FaFacebook, FaInstagram, FaTwitter, FaPinterest, FaYoutube
} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai'
import { Link } from 'react-scroll';
import { useState } from 'react';
import './Navbar.css'


const Navbar = () => {
    const[nav, setNav] = useState(false);

    const handleNav = () => {
        setNav(!nav)
    } 

  return (
    <div className={nav? 'navbar navbar-bg': 'navbar'} >
        <div className="logo">
            <h2>BEACHES.</h2>
        </div>
        <ul className="nav-menu">
           <li><Link to='home' smooth={true} duration={500}>Home</Link></li> 
            <li><Link to='destination' smooth={true} duration={500}>Destination</Link></li>
            <li><Link to='search' smooth={true} duration={500}>Travel</Link></li>
            <li><Link to='select' smooth={true} duration={500}>Book</Link></li>
            <li><Link to='carousel' smooth={true} duration={500}>Views</Link></li>
        </ul>
        <div className="nav-icons">
            <BiSearch className='icon' style={{marginRight: '1rem'}} />
            <BsPerson className ='icon' />
        </div>
        <div className= 'hamburger' onClick={handleNav}>
            {!nav?(<HiOutlineMenuAlt4 className='icon' />): (<AiOutlineClose className='icon'/>)}
        </div>
        <div className={nav? 'mobile-menu active': 'mobile-menu'}>
            
            <ul className='mobile-nav'>
                <li>Home</li>
                <li>Destination</li>
                <li>Travel</li>
                <li>Book</li>
                <li>Views</li>
            </ul>
            <div className='mobile-menu-bottom'>
                <div className='menu-icons'>
                    <button>Search</button>
                    <button>Account</button>
                </div>
                <div className='social-icons'>
                    <FaFacebook className='icon' />
                    <FaInstagram className='icon' />
                    <FaTwitter className='icon' />
                    <FaPinterest className='icon' />
                    <FaYoutube className='icon' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Navbar
