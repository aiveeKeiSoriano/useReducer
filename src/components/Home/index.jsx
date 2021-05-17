import React from 'react'
import Navbar from '../Navbar'
import Sidebar from '../Sidebar'
import Content from '../Content'
import './styles.css'
import { CounterContextProvider } from '../../context/CounterContext'

export default function Home() {
    return (
        <CounterContextProvider>
        <div className='Home'>
            <Navbar />
            <div className="bottom">
                <Sidebar>
                    <button>Child 1</button>
                    <button>Child 2</button>
                </Sidebar>
                <Content />
            </div>
            </div>
            </CounterContextProvider>
    )
}
