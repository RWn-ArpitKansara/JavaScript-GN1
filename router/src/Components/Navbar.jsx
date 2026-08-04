import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (

    // <ul style={{display:'flex', justifyContent:'space-between', listStyle:'none'}}>
    //     <li><a href="/">Home</a></li>
    //     <li><a href="/about">About</a></li>
    //     <li><a href="/blog">Blog</a></li>
    //     <li><a href="/contact">Contact</a></li>
    // </ul>

    <ul style={{display:'flex', justifyContent:'space-between', listStyle:'none'}}>
        <li><Link to={"/"}>Home</Link></li>
        <li><Link to={"/about"}>About</Link></li>
        <li><Link to={"/blog"}>Blog</Link></li>
        <li><Link to={"/contact"}>contact</Link></li>
    </ul>



  )
}

export default Navbar