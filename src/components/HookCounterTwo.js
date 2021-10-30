import React, {useState} from 'react'

function HookCounterTwo() {
    const initialState = 0
    const [count, setCount] = useState(initialState)
    const incrementFiv = () => {
        for (let i = 0; i < 5; i++) {
            setCount(prvCount => prvCount + 1)
        }
    }
    
    return (
        <div>
            Count: {count}
            <button onClick={() => setCount(initialState)}>Rest</button>
            <button onClick={() => setCount(count + 1)}>Inc</button>
            <button onClick={() => setCount(count - 1)}>Dec</button>
            <button onClick={incrementFiv}>Inc5</button>
        </div>
    )
}

export default HookCounterTwo
