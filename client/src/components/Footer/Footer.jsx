import React from 'react'

import styles from "./Footer.module.css";

import {BsFillHeartFill, BsWhatsapp, BsTelegram} from "react-icons/bs";
import {AiFillLinkedin, AiFillGithub} from "react-icons/ai"

export default function Footer() {
  return (
    <div className={styles.divGlobal}>
      <div className={styles.divLogo}> {/* Logo */}
        <BsFillHeartFill className={styles.logo}/>
        <span className={styles.byme}>by moises plata</span>
      </div>
      <div className={styles.divIcons}>
        <a style={{color: '#e892e9'}} href='https://www.linkedin.com/in/moises-platadev/' target='_blank' rel="noreferrer">
          <AiFillLinkedin/>
        </a>
        <a style={{color: '#e892e9'}} href='https://github.com/Moiso2001' target='_blank' rel="noreferrer">
          <AiFillGithub/>
        </a>
        <a style={{color: '#e892e9'}} href='https://wa.me/573209260621' target='_blank' rel="noreferrer">
          <BsWhatsapp/>
        </a>
        <a style={{color: '#e892e9'}} href='https://t.me/Moiso2001' target='_blank' rel="noreferrer">
          <BsTelegram/>
        </a>
      </div>
      <div className={styles.divLegal}>
        <span>All rights reserved ©</span>
      </div>
    </div>
  )
}
