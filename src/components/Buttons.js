import React from 'react'
import { Button } from './style'

export default function Buttons({ buttonText, onButtonClick }) {
    return (
        <div>
            <Button onClick={onButtonClick}>{buttonText}</Button>
        </div>
    )
}
