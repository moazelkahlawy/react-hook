import React, {useState, useEffect} from 'react'

function HookMouse() {
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    const logMousePosition = e => {
        console.log(`mouse event`);
        setX(e.ClientX)
        setY(e.ClientY)
    }

    useEffect(() => {
        console.log(`useEffect called`);
        window.addEventListener('mousemove', logMousePosition)

        return () => {
            console.log(`components unmounting code`);
            window.removeEventListener('mousemove', logMousePosition)
        }
    }, [])
    return (
        <div>
            Hooks X - {x}  Y - {y}
        </div>
    )
}

export default HookMouse
