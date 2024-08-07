
import './Form.css'
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Form = () => {

const navigate = useNavigate()

const [data,setData] = useState({
    title : "",
    subTitle : "",
    description : ""
})


const createBlog = async (e)=>{
e.preventDefault()


// const formData = new FormData(e.currentTarget)
// const data = Object.fromEntries(formData)

//send the above states data to post api

const response = await axios.post("http://localhost:2000/createBlog",data)

if(response.status ==201) {
    alert(response.data.message)
   navigate("/")

}else{
    alert("Something went wrong")
}

}

const handleChange = (e)=>{
const {name,value} = e.target
    setData({
        ...data,
        [name] : value

    })
}


  return (
    <>
      <div className='form'>

<div className="form-container">
    <h1 className="form-header">Blog Submission Form</h1>
    <form onSubmit= {createBlog} >
        <div className="form-group">
            <label for="title">Title:</label>
            <input type="text" id="title" name="title" placeholder="Enter the title" required onChange={handleChange} />
        </div>
        <div className="form-group">
            <label for="subtitle">Subtitle:</label>
            <input type="text" id="subtitle" name="subTitle" placeholder="Enter the subtitle" required onChange={handleChange} />
        </div>
        <div className="form-group">
            <label for="description">Description:</label>
            <textarea id="description" name="description" rows="4" placeholder="Enter the description" required onChange={handleChange} ></textarea>
        </div>
        <button className='btn' type="submit">Submit</button>
    </form>
</div>
</div>
    </>
  )
}

export default Form