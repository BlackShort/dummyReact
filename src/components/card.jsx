import React from 'react'
import { Link } from 'react-router-dom'

export const Card = ({}) => {
    return (
        <div className='card'>
            <h1>Card</h1>
            <p>Welcome to our card page</p>
            <Link to={'/'}>Go Somewhere</Link>
        </div>
    )
}
