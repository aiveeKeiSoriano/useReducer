import { createContext, useReducer } from "react";


let CounterContext = createContext()

export default CounterContext

export function CounterContextProvider(props) {
    
    let initialState = { counterValue: 0 }
    let reducer = (state, action) => {
        switch (action) {
            case 'increment':
                return ({ counterValue: state.counterValue + 1 })
            case 'decrement':
                return ({ counterValue: Math.max(0, state.counterValue - 1) })
            case 'reset':
                return initialState;
        }
    }
    let [counterState, dispatch] = useReducer(reducer, initialState)

    return (
        <CounterContext.Provider value={{ counterState, dispatch }}>
            {props.children}
        </CounterContext.Provider>
    )
}