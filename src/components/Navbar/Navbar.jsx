import React from 'react'
import { useNavigate } from 'react-router-dom'


const Navbar = () => {
  const navigate = useNavigate()
  return (
    <>
      <nav className="navbar">
        <div className="navbar-logo">
            <a href="#">Blog Crud</a>
        </div>
        <ul className="navbar-menu">
            <li><a onClick={()=>navigate("/")}>Home</a></li>
            <li><a onClick={()=>navigate("/createBlog")} >CreateBlog</a></li>
            {/* <li><a href="#">Services</a></li>
            <li><a href="#">Contact</a></li> */}
            {/* <li className="login"><a href="#">Login</a></li> */}
        </ul>
    </nav>
    </>
  )
}

export default Navbar