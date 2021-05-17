import React, { useContext } from 'react'
import CounterContext from '../../context/CounterContext'
import './styles.css'

export default function Navbar() {
    let { counterState } = useContext(CounterContext)
    return (
        <div className='Navbar'>
            <h1>Navbar</h1>
            <p>{counterState.counterValue}</p>
        </div>
    )
}
