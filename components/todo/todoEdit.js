import React, { useEffect, useState } from 'react'

export default function TodoEdit({ text, id, handletoggleEditingUpdate }) {
  const [inputText, setInputText] = useState('')

  useEffect(() => {
    if (text) {
      setInputText(text)
    }
  }, [text])

  return (
    <>
      <span>{text}</span>

      <input
        type="text"
        value={inputText}
        onChange={(e) => {
          setInputText(e.target.value)
        }}
      />
      <button
        onClick={() => {
          handletoggleEditingUpdate(id, inputText)
        }}
      >
        儲存
      </button>
    </>
  )
}
