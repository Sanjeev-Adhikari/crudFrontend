import React, { useEffect, useState } from 'react'

import './Card.css'
import axios from 'axios'
import { Link } from 'react-router-dom'

const Card = () => {

    const [blogs,setBlogs] = useState([])
  //call Api here

  const fetchBlogs = async()=>{
  
    try {
        const response =  await axios.get('http://localhost:2000/blogs')
        setBlogs(response.data.blogs)
    } catch (error) {
        alert("something went wrong")
    }
  
  }

  useEffect(()=>{
    fetchBlogs()
  },[])


  return (
    <>
     <section className="cards-section">
        {blogs.map((blog)=>{

return (

    <>
<div key ={blog._id} className="card">
            <h2> {blog.title} </h2>
            <h3>{blog.subTitle} </h3>
            <p>{blog.description}</p>
            <br />
            <Link to={`/singleBlog/${blog._id}`}><button className='btn'>Read Blog</button></Link>
        </div>
</>


)
    }
    
        )}
    </section>
    
    </>
  )
}

export default Card