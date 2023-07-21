import React from 'react'

export default function RefsIdForm() {
  return (
    <>
      <h2>ID</h2>
      <input type="text" id="my-input" />
      <button
        onClick={() => {
          document.getElementById('my-input').focus()
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          document.getElementById('my-input').blur()
        }}
      >
        失焦(blur)
      </button>
      <button
        onClick={() => {
          document.getElementById('my-input').value
        }}
      >
        獲得值
      </button>
    </>
  )
}
