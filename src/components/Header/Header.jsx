import React from 'react';
import s from './Header.module.css';
import Nav from '../Nav/Nav';
import logoGimeMe from './media/logoGimeMe.svg'


function Header() {
  return (
    <div className={s.header_container}>
        <Nav/>
        <img src={logoGimeMe} alt='logoGimeMe'/>
        <p>
        <span>Generate your ART</span><br/> by typing in field below any words that comes to your mind!
        </p>
    </div>
  )
}

export default Header