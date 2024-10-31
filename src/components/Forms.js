import React, { useState } from 'react'

export default function Forms() {
    // const [name, setName] = useState('')
    const [formData, setFormData] = useState({})
    const onchange = (event) => {
        setFormData(
            {
                ...formData,
                [event.target.name]: event.target.value
            }
        )
    }
    return (
        <div>
            <input type="text" name='name' placeholder='Name' value={formData?.name} onChange={onchange} />
            <input type="text" name='fName' placeholder='Father Name' value={formData?.fName} onChange={onchange} />
            <p>Your name : {formData.name}</p>
            <p>Your Father name : {formData.fName}</p>
        </div>
    )
}
