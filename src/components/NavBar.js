import React from 'react'
import { Link } from 'react-router-dom'

const NavBar = () => {
    return (
        <header>
            <Link>About</Link>
            <Link>Houses</Link>
            <Link>Professors</Link>
            <Link>Famous Students</Link>
            <Link>Courses</Link>
        </header>
    )
}

export default NavBar;
