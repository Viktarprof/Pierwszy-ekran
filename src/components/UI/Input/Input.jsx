import React from 'react';
import s from './Input.module.css'


function Input({ styles, placeholder }) {
  return (
    <input className={`${s[styles]}`} placeholder={placeholder}/>
  )
}

export default Input