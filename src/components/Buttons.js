import React from 'react'

export default function Buttons({ buttonText,onButtonClick }) {
    return (
        <div>
            <button onClick={onButtonClick}>{buttonText}</button>
        </div>
    )
}
