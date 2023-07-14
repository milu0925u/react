import React from 'react'

export default function ChildA(props) {
  return (
    <>
      <h3>ChildA</h3>
      <p>來自Parent元件:{props.pData}</p>
      <p>來自childB元件:{props.dataFromB}</p>
    </>
  )
}
