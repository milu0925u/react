import React, { useEffect } from 'react'

export default function Child(props) {
  useEffect(() => {
    console.log('看屁')
  }, [props])
  return (
    <>
      <br />
      <h1>你好我叫{props.name.myname}</h1>
    </>
  )
}
