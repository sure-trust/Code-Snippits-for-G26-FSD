import React, { useState } from 'react'

const TestForm = () => {
    const [name, setName] = useState('')
    return (
        <div>
            <input value={name} onChange={(events) => {
                console.log(events.target.value)
                setName(events.target.value)
            }} />
        </div>
    )
}

export default TestForm
