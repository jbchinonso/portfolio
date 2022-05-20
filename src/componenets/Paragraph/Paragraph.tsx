import React from 'react'
import { IText } from '../../types'


function Paragraph({ text }: IText) {
    return <p>{text}</p>;
}

export default Paragraph;