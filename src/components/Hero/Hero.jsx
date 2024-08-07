import React from 'react'
import { Link, useNavigate } from 'react-router-dom'

const Hero = () => {

  const navigate = useNavigate()
  return (
    <>
    
    <section className="hero">
        <div className="hero-content">
            <h1>Welcome to Our Blogs</h1>
            <p>Your journey to excellence starts here.</p>
           <Link to = {'/createBlog'}><a href="#" className="cta-button">Post Your Blog</a></Link>
        </div>
    </section>
    </>
  )
}

export default Hero