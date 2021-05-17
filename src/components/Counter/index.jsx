import { useContext } from "react"
import CounterContext from "../../context/CounterContext"
import './styles.css'

export default function Counter() {
    let { counterState, dispatch } = useContext(CounterContext)
    return (
        <>
            <div className="Counter">
                <button className="primary" onClick={() => dispatch('decrement')}>-</button>
                {counterState.counterValue}
                <button className="primary" onClick={() => dispatch('increment')}>+</button>
            </div>
            <button className='reset' onClick={() => dispatch('reset')}>reset</button>
        </>
    )
}