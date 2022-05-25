import React from 'react'
import { IText } from '../../types'
import './paragraph.css'

function Paragraph({ text }: IText) {
    return <p>{text}</p>;
}

export default Paragraph;