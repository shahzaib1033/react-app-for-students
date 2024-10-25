import React, { useState } from 'react'

export default function Counter() {
    const [count, setCount] = useState(0);
 
    return (
        <div style={{ background: "green" }}  >
            This is the counter
            <button onClick={() => setCount(count + 1)}>
                Count: {count}
            </button>
        </div>

    )
}
