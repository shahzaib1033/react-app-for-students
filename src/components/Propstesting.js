import React, { useEffect, useState } from 'react'
import Buttons from './Buttons'

export function Propstesting({ name, stdclass }) {
    const [data, setData] = useState({})

    useEffect(() => {
        setData({
            name: name,
            stdclass: stdclass
        })
    }, [])

    const clearProps = async () => {
        if (!data.name && !data.stdclass) {
            setData({
                name: name,
                stdclass: stdclass
            })  
            return;
        }
        setData({
            name: "",
            stdclass: ""
        })
        console.log("name: ", data.name);
        console.log("stdclass: ", data.stdclass);
    }
    return (

        <div style={{ background: "red" }}>Tesing the Props
            <Buttons buttonText={"Clear Props"} onButtonClick={clearProps}></Buttons>
            <h1>The props are {data.name}</h1>
            <h1>{data.stdclass}</h1>

        </div>

    )
}
