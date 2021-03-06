import React, {useState} from 'react';
import { Link } from 'react-router-dom'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';

const Navbar = () => {
    const [currPage, setCurrPage] = useState(window.location.pathname);

    return (
        <div id='navbar'>
            <div onClick={() => setCurrPage(window.location.pathname)} className={(currPage === '/') ? 'primary' : '' }><h1><Link to='/'>Home</Link></h1></div>
            <div onClick={() => setCurrPage(window.location.pathname)} className={(currPage === '/projects') ? 'primary' : '' }><h1><Link to='/projects'>Projects</Link></h1></div>
            <div onClick={() => setCurrPage(window.location.pathname)} className={(currPage === '/resume') ? 'primary' : '' }><h1><Link to='/resume'>Resume</Link></h1></div>
            <div onClick={() => setCurrPage(window.location.pathname)} className={(currPage === '/contact') ? 'primary' : '' }><h1><Link to='/contact'>Contact</Link></h1></div>

            <section id='mediaLinks'>
                <a href='https://github.com/TheCapn-MEC' target='_blank' rel='noreferrer'><AiFillGithub /></a>
                <a href='https://www.linkedin.com/in/ethan-roldan-29a9b420a/' target='_blank' rel='noreferrer'><AiFillLinkedin /></a>
            </section>
        </div>
    )
}

export default Navbar
