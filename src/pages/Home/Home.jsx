// import React, { useEffect, useState } from 'react'
import './Home.css'
import Navbar from '../../components/Navbar/Navbar'
import Hero from '../../components/Hero/Hero'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
// import axios from 'axios'


const Home = () => {

  // const [blogs,setBlogs] = useState([])
  // //call Api here

  // const fetchBlogs = async()=>{
  // const response =  await axios.get('http://localhost:2000/blogs')
  //  setBlogs(response.data.data)
  
  // }

  // useEffect(()=>{
  //   fetchBlogs()
  // },[])

  // console.log(blogs, "blogs here")

  return (
    
   <>
   <Navbar />
   <Hero />
   <Card />
   <Footer />
   </>
  )
}

export default Home