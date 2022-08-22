import React from 'react'
import preloader from "../../../assets/Preloader.svg"
import style from "./Preloader.module.scss"

export default function Preloader() {
  return (
    <img
      className={style.preloader}
      src={preloader}
      alt="Preloader"
    />
  )
}
