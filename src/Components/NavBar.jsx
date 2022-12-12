import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import "../Styles/aboutMe.css";

const NavBar = () => {
    const [ visible, setIsVisible ] = useState(false);
    const hMenu = () => {
        setIsVisible(false);
        const bar = document.getElementById("bar");
        bar.classList.toggle('active');
    };
    return (
        <div className="navbar">
            <i className={visible ? "toggle nav-icon-color fa-solid fa-x" : "toggle nav-icon-color fa-solid fa-bars"} onClick={hMenu}></i>
            <ul className="bar active" id="bar">
                <NavLink to="/home" className={({ isActive }) => isActive ? "link-active" : "link"} onClick={hMenu}>Home</NavLink>
                <NavLink to="/about" className={({ isActive }) => isActive ? "link-active" : "link"} onClick={hMenu}>Sobre mi</NavLink>
                <NavLink to="/skills" className={({ isActive }) => isActive ? "link-active" : "link"} onClick={hMenu}>Habilidades</NavLink>
                <NavLink to="/projects" className={({ isActive }) => isActive ? "link-active" : "link"} onClick={hMenu}>Proyectos</NavLink>
            </ul>
        </div>
    );
};

export default NavBar;