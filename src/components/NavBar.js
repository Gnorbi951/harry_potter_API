import React from 'react';
import  styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavBarHeader=styled.header`
    padding: 1rem;
`

const MyLink=styled(Link )`
    padding: 2rem;
    
`

const NavBar = () => {
    return (
        <NavBarHeader className='navbar' >  
            <MyLink className='menuElement'>About</MyLink>
            <MyLink className='menuElement'>Houses</MyLink>
            <MyLink className='menuElement' to={'/professors'}>Professors</MyLink>
            <MyLink className='menuElement'>Famous Students</MyLink>
            <MyLink className='menuElement'>Courses</MyLink>
        </NavBarHeader>
    )
}

export default NavBar;
