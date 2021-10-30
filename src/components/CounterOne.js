import React, {useReducer} from 'react'


const initialState = 0
const reducer = (state, action) => {
    switch (action) {
        case 'inc':
            return state + 1
    
        case 'dec':
            return state - 1
    
        case 'reset':
            return initialState
    
        default:
            return state
    }
}
function CounterOne() {
    const [count, dispatch] = useReducer(reducer, initialState)
    return (
        <div>
            <div>Count - {count}</div>
            <button onClick={() => dispatch('inc')}>Inc</button>
            <button onClick={() => dispatch('dec')}>Dec</button>
            <button onClick={() => dispatch('reset')}>Reset</button>
        </div>
    )
}

export default CounterOne
