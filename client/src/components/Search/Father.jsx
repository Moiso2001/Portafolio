import React from 'react';
import Child from './Child';


export default function Father({object}) {

  const keys = Object.keys(object)
  const values = Object.values(object)

  const result = keys.map((e,i) => {
    return [e, values[i]]
  })

  // let id = 0
  return (
    <>
      <div>
        {result.map((e) => <Child x={e[0]} y={e[1]}/>)}
      </div>
    </>
  )
}
