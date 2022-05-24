import './navbar.css';
import { RiMenu3Line, RicloseLin} from  'react-icons/ri';
import logo from '../../assets/logo.svg'
import React from 'react';


//BEM -> Block Element Modifier
const Navbar = () => {
  return (
    <div className='gpt3__navbar'>
      <div className="gpt3__navbar-links">
        <div className="gpt3__navbar-links_logo">
          <img src={logo} alt="logo" />
        </div>
        <div className="gpt3__navbar-links_container"></div>
      </div>
    </div>
  )
}

export default Navbar