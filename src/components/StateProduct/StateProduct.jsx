import React from 'react';
import s from './StateProduct.module.css';

function StateProduct({ id, text}) {
  return (
    <div className={`${s.cart} ${id === 1 ? s.active : ''}`}>
        <span className={s.line}></span>
        <p className={s.number}>{id}</p>
        <p className={s.text}>{text}</p>
    </div>
  )
}

export default StateProduct
