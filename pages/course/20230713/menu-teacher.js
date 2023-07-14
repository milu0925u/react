import React, { useState } from 'react'

export default function Menu() {
  const [text, setText] = useState('')
  const arr = ['首頁', '關於我們', '產品']

  return (
    <>
      <ul>
        {arr.map((v, i) => {
          return (
            <li key={i} className={text === v ? 'active' : ''}>
              <a href="#" onClick={() => setText(v)}>
                {v}
              </a>
            </li>
          )
        })}
      </ul>
    </>
  )
}
