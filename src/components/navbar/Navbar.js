import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import links from './links.json'





const Navbar = () => {
   
    const [navbarlinks, setNavbarlinks] = useState(links)

  return (
         <div className='main-navbar'>
        
        
        {navbarlinks.map(index => (
               <li key={index.id}><Link to={index.href}>{index.name}</Link></li> 
        ))}
        
        </div>
        
  )
}

export default Navbar
