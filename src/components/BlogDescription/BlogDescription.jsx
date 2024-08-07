import React from 'react'
import axios from 'axios'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './BlogDescription.css'

const BlogDescription = () => {

const navigate = useNavigate()

//update blog navigation to form

const handleUpdate = ()=>{
    navigate( `/updateBlog/${blog._id}`);
}

const {id} = useParams()
const [blog,setBlog] = useState({})

//Delete blog

const deleteBlog = async ()=>{

    
    const response = await axios.delete('http://localhost:2000/blogs/' + id)

    if(response.status == 201){
        alert("Blog deleted successfully")
        navigate('/')
    }else {
        alert("unable to delete the message")
    }

}

//update blog



//Fetch single Blog
const fetchSingleBlog = async ()=>{

    const response =  await axios.get('http://localhost:2000/blogs/' + id)

    if(response.status == 201){
        setBlog(response.data.blog)
    
    }else{
        alert("something went wrong")
    }


}

            useEffect(()=>{
            fetchSingleBlog()
            },[]) 
  return (
   <>
   
    <main>
        <div className="blog-container">
            <h1 className="blog-title">{blog.title}</h1>
            <h2 className="blog-subtitle">{blog.subTitle}</h2>
            <p className="blog-description">
                {blog.description}
            </p>
            <div className="button-container">
                 <button className="btn update-btn" onClick={handleUpdate}>Update</button>
                <button className="btn delete-btn" onClick = {deleteBlog} >Delete</button>
            </div>
        </div>
    </main>
   
   </>
  )
}

export default BlogDescription