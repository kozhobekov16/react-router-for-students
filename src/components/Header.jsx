import React from 'react'
import s from './Hedaer.module.css'
import {NavLink} from 'react-router-dom'
const Header = () => {
    return (
        <div>
            <ul className={s.menu}> 
                <li>
                    <NavLink to="/" activeClassName="active">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/about" activeClassName="active">About</NavLink>
                </li>
                <li>
                    <NavLink to="/contacts" activeClassName={s.active}>Contacts</NavLink>
                </li>
            </ul>
        </div>
    )
}

export default Header