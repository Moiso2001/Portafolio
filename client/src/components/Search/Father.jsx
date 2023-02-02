import React from 'react';
import Child from './Child';

import styles from "./Father.module.css"

export default function Father({object}) {

  const keys = Object.keys(object)
  const values = Object.values(object)

  const result = keys.map((e,i) => {
    return [e, values[i]]
  })

  // let id = 0
  return (
    <>
      <div className={styles.divGlobal}>
        {`{`}
        {result.map((e) => <Child prop1={e[0]} prop2={e[1]}/>)}
        {`},`}
      </div>
    </>
  )
}
