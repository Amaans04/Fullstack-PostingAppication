import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Feed = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        const backendUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:5174';
        axios.get(`${backendUrl}posts` || 'http://localhost:5174/posts')
            .then((res) => {
                // console.log(res.data)
                setPosts(res.data.posts)
            })
            .catch((err) => {
                console.error(err)
            })
    }, [])

    return (
        <section className='feed-section'>
            {
                posts.length > 0 ? (
                    posts.map((post, index) => (
                        <div key={index} className='post'>
                            <img src={post.image} alt={`post-${index}`} />
                            <p>{post.caption}</p>
                        </div>
                    ))
                ) : (
                    <h1>No posts to show</h1>
                )
            }
        </section>
    )
}

export default Feed