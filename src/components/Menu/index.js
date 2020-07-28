import React from 'react';
import Logo from '../../assets/images/logo.png';
import './Menu.css'
import ButtonLink from '../ButtonLink';

export default (props) => (
    <nav className='Menu'>
        <a href='/'>
            <img src={Logo} alt='BispoFlix logo' className='Logo' />
        </a>
        <ButtonLink label='Novo vídeo' href='/' />
    </nav>
)