import { useState } from 'react'

export default function AddForm({ handleAdd, handleAll, todo }) {
  // 定義文字輸入用的狀態
  const [inputText, setInputText] = useState('')
  // 為了要修正中文輸入法的用Enter組字用的信號狀態
  const [isCompositing, setIsCompositing] = useState(false)

  return (
    <>
      <div className="d-flex justify-content-center">
        <input
          className="m-2"
          type="checkbox"
          onClick={(e) => {
            handleAll(e.target.checked)
          }}
        />
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
          onCompositionStart={() => setIsCompositing(true)}
          onCompositionEnd={() => setIsCompositing(false)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !isCompositing && inputText) {
              handleAdd(inputText)
              setInputText('')
            }
          }}
        />
      </div>
    </>
  )
}
