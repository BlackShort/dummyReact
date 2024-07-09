import React from 'react'
import { Link } from 'react-router-dom'

export const Home = () => {
    return (
        <div>
            <h1>Home</h1>
            <Link to='/courses'>Courses</Link>
            <p>Welcome to our website</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nulla architecto natus quo illo, sequi repudiandae iste? Eligendi, saepe. Alias.</p>
        </div>
    )
}
