import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search_icon from '../../assets/search_icon.svg'
import bell_icon from '../../assets/bell_icon.svg'
import profile_img from '../../assets/profile_img.png'
import caret_icon from '../../assets/caret_icon.svg'
import { Link } from 'react-router-dom'
import { logout } from '../../firebase'


const Navbar = () => {
  const navRef = useRef()

  useEffect(()=>{
    window.addEventListener('scroll',()=>{
      if(window.scrollY >= 100){
        navRef.current.classList.add('nav-dark')
      } else {
        navRef.current.classList.remove('nav-dark')
      }
    })
  },[])
  return (
    <div className='navbar nav-dark' ref={navRef}>
      <div className="navbar-left">
         <Link to='/'><img src={logo} alt=""  /></Link>
         
         <ul>
            <li>Home</li>
            <li>TV Shows</li>
            <li>Movies</li>
            <li>New & Popular</li>
            <li>My List</li>
            <li>Browse by Languages</li>
            <li></li>
         </ul>
      </div>
      <div className="navbar-right">
      <img src={search_icon} alt="" className='icons' />
      <p>Children</p>
      <img src={bell_icon} alt="" className='icons' />
      <div className="navbar-profile">
        <img src={profile_img} alt="" className='profile'/>
        <img src={caret_icon} alt="" />
        <div className="dropdown">
            <p onClick={()=>{logout()}}>Sign Out of Netflix</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Navbar
