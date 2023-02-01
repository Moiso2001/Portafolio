import React from 'react'
import { useDispatch } from 'react-redux';

import styles from "./Navbar.module.css";

import {BsFillHeartFill} from "react-icons/bs";
import { setResponse } from '../../redux/actions';

export default function Navbar({handle}) {

  const dispatch = useDispatch();

  const handleOnClick = (input) => {
    dispatch(setResponse(input))
  };

  return (
    <div className={styles.divGlobal}>
      <div className={styles.divLogo}> {/* Logo */}
        <BsFillHeartFill className={styles.logo}/>
        <span className={styles.byme}>by moises plata</span>
      </div>
      <div className={styles.divButtons}> {/* Botones */}
        <span onClick={() => {handleOnClick('about/me'); handle()}} className={styles.span}>about</span>
        <span onClick={() => {handleOnClick('experience'); handle()}} className={styles.span}>experience</span>
        <span onClick={() => {handleOnClick('work'); handle()}} className={styles.span}>work</span>
        <span onClick={() => {handleOnClick('links'); handle()}} className={styles.span}>links</span>
        <span onClick={() => {}} className={styles.contact}>contact</span>
      </div>
    </div>
  )
}
