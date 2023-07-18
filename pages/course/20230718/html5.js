import React, { useState } from 'react'
export default function Html5() {
  const [inputText, setInputText] = useState('')
  const [textarea, setTextarea] = useState('')
  const [password, setPassword] = useState('')

  //呈現密碼 true=顯示 false=***
  const [show, setShow] = useState(false)

  return (
    <>
      <h1>可控表單元件</h1>

      <section id="inputText" className="p-2">
        <h3> Text 的 Input </h3>
        <input
          type="text"
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
      </section>

      <section id="textarea" className="p-2">
        <h3> textarea 的 Input </h3>
        <textarea
          value={textarea}
          onChange={(e) => {
            setTextarea(e.target.value)
          }}
        />
      </section>

      <section id="inputTextPassword" className="p-2">
        <h3> Text 的 Input 文字與密碼輸入框切換 </h3>
        <input
          type={show ? 'text' : 'password'}
          value={password}
          onChange={(e) => {
            setPassword(e.target.value)
          }}
        />
        <br />
        <label>
          <input
            type="checkbox"
            checked={show}
            onChange={(e) => {
              setShow(e.target.checked)
            }}
          />
          顯示密碼
        </label>
      </section>
    </>
  )
}
