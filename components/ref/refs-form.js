import React, { useEffect, useRef } from 'react'

export default function RefsIdForm() {
  useEffect(() => {})
  const inputRef = useRef(null)
  return (
    <>
      <h2>ID</h2>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          inputRef.current.focus()
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          inputRef.current.blur()
        }}
      >
        失焦(blur)
      </button>
      <button
        onClick={() => {
          console.log(inputRef.current.value)
        }}
      >
        獲得值
      </button>
    </>
  )
}
