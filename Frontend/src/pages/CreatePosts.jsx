import React from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreatePosts = () => {
    const navigate = useNavigate()
    const handle = async(e) =>{
        e.preventDefault()
        const formData = new FormData(e.target)
        const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5174';
        // console.log('hi')
        try {
            const res = await axios.post(`${backendUrl}create-post`, formData)
            // console.log(res.data)
            navigate('/feed')
        } catch (err) {
            console.error(err)
        }
    }

  return (
    <section className='create-post-section'>
        <h1> Create Posts</h1>
        <form onSubmit={handle}>
            <input type="file" name='image' accept='image/*'/>
            <input type="text" name="caption" placeholder='Enter Caption' required />
            <button type="submit">Submit</button>
        </form>
    </section>
  )
}

export default CreatePosts
