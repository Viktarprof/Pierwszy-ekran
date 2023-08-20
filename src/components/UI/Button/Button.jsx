import React from 'react';
import s from './Button.module.css'

function Button({ styles, text }) {
  return (
    <button className={`${s[styles]}`}>{text}</button>
  )
}

export default Button