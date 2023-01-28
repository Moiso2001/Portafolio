import React from 'react'

import styles from "./Search.module.css";

export default function Search() {
  return (
    <div className={styles.divGlobal}>
      <div className={styles.divFullWindow}>
        <div className={styles.divInput}>
          <div className={styles.divDomain}>
            <span className={styles.domain}>localhost:3001</span>
          </div>
          <div className={styles.divRoutes}>
            <input className={styles.routes} name='route' placeholder='/home'/>
          </div>
        </div>
        <div className={styles.divOutput}>
          <span className={styles.output}></span>
        </div>
      </div>
    </div>
  )
}
