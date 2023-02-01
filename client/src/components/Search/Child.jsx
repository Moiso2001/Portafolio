import React from 'react'

import styles from "./Child.module.css";

export default function Child({prop1,prop2}) {
  return (
    <div className={styles.divGlobal}>
        <span className={styles.span1}>"{prop1}":</span>
        <span className={styles.span2}> "{prop2}",</span>
    </div>
  )
}
