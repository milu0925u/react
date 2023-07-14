import React, { useState } from 'react'

export default function TodoIndex() {
  //定義文字輸入用的狀態
  const [inputText, setInputText] = useState('')

  //   修正輸入法
  const [isCompositing, setIsCompositing] = useState(false)

  //每個成員 todo ={ id , text}
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: '買飯',
    },
    {
      id: 2,
      text: '讀書',
    },
    {
      id: 3,
      text: '休息',
    },
  ])

  //   刪除按鈕
  const sub = (sub) => {
    const deletee = todo.filter((v) => {
      if (v.id !== sub) {
        return { ...v }
      }
    })
    setTodo(deletee)
  }

  return (
    <>
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
            const newTodo = {
              id: Number(new Date()),
              text: inputText,
            }
            setTodo([...todo, newTodo])
            setInputText('')
          }
        }}
      />
      <ul>
        {todo.map((v, i) => {
          return (
            <li key={v.id}>
              {i + 1}.{v.text}
              <button
                onClick={() => {
                  sub(v.id)
                }}
              >
                刪除
              </button>
            </li>
          )
        })}
      </ul>
    </>
  )
}
