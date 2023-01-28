import React from 'react'

import styles from "./Navbar.module.css";

import {BsFillHeartFill} from "react-icons/bs";

export default function Navbar() {
  return (
    <div className={styles.divGlobal}>
      <div className={styles.divLogo}> {/* Logo */}
        <BsFillHeartFill className={styles.logo}/>
        <span className={styles.byme}>by moises plata</span>
      </div>
      <div className={styles.divButtons}> {/* Botones */}
        <span className={styles.span}>about</span>
        <span className={styles.span}>experience</span>
        <span className={styles.span}>work</span>
        <span className={styles.span}>links</span>
        <span className={styles.contact}>contact</span>
      </div>
    </div>
  )
}
