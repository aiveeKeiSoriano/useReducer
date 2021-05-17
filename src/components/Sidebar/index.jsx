import React from 'react'
import './styles.css'

export default function Sidebar(props) {
    console.log(props.children)
    return (
        <div className='Sidebar'>
            <h1>Sidebar</h1>
            {props.children}
        </div>
    )
}
