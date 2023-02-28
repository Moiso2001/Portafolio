import { getAll } from '../../redux/actions';
import { useDispatch } from 'react-redux';
import React, { useEffect } from 'react'

import styles from "./Body.module.css";

export default function Body({handle}) {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAll())
  })

  return (
    <div className={styles.divGlobal}>
      <div className={styles.divFirst}>
        <span className={styles.first}>Hi, my name is</span>
      </div>
      <div className={styles.divSecond}>
        <h1 className={styles.second}>Moises Plata</h1>
      </div>
      <div className={styles.divThird}>
        <h2 className={styles.third}>Specialized in creating solutions</h2>
      </div>
      <div className={styles.divFourth}>
        <span className={styles.fourth}>I'm a Full Stack developer with experience on backend and frontend, working with different frameworks and new technologies. Currently I'm focused on building innovation and accessible technologies for everyone</span> 
      </div>
      <div onClick={() => handle()} className={styles.divFifth}>
        <span className={styles.fifth}>portafolio API</span>
      </div>
    </div>
  )
}
