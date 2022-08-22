import React from 'react'
import style from "./RadioButton.module.scss"

export default function RadioButton({ ...props }) {
  return (
    <input
      className={style.radio}
      type="radio"
      {...props}
    />
  )
}
