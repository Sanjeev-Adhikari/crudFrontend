import axios from 'axios'
import React, { useEffect, useState } from 'react'
import {  useNavigate, useParams } from 'react-router-dom'

const UpdateForm = () => {
    
const {id} = useParams()
const [blog,setBlog] = useState({})

const navigate = useNavigate()

//update the blog
const updateBlog = async (e)=>{
    e.preventDefault()

    const response = await axios.patch('http://localhost:2000/Blogs/' + id,blog)

    if(response.status ==201){
        alert(response.data.message)
        navigate('/singleBlog/' + id)
    }else {
        alert('something went wrong')
    }
}

//keys to exclude while updating the blog

const keyToExclude = ['updatedAt', 'createdAt'] 
keyToExclude.forEach((key)=>{
    delete blog[key]
})

// const handleChange = ((e)=>{
//     const {name,value} = e.target

//     setBlog({
//         ...data,
//         [name] : value
//     })
// })

const handleChange = (e)=>{
const {name,value} = e.target
    setBlog({
        ...blog,
        [name] : value

    })
}


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
    <div className='form'>

<div className="form-container">
  <h1 className="form-header">Update Your Blog</h1>
  <form onSubmit={updateBlog} >
      <div className="form-group">
          <label for="title">Title:</label>
          <input  value = {blog.title} onChange={handleChange} type="text" id="title" name="title" placeholder="Enter the title" required  />
      </div>
      <div className="form-group">
          <label for="subtitle">Subtitle:</label>
          <input value = {blog.subTitle} onChange={handleChange} type="text" id="subtitle" name="subTitle" placeholder="Enter the subtitle"  />
      </div>
      <div className="form-group">
          <label for="description">Description:</label>
          <textarea value={blog.description} onChange={handleChange} id="description" name="description" rows="4" placeholder="Enter the description" required ></textarea>
      </div>
      <button className='btn' type="submit">Submit</button>
  </form>
</div>
</div>
  </>
  )
}

export default UpdateForm