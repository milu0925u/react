import React, { useState } from 'react'

export default function RegisterForm() {
  const [user, setUser] = useState({
    fullname: '',
    email: '',
    password: '',
    password2: '',
  })

  const originError = {
    fullname: '',
    email: '',
    password: '',
    password2: '',
  }
  const [error, setError] = useState(originError)

  let hasError = false
  const newError = { ...originError }

  // 密碼呈現用
  const [show, setShow] = useState(false)
  const [show2, setShow2] = useState(false)

  //所有表單欄位共用的事件處理函式
  const handFieldChange = (e) => {
    const newUser = { ...user, [e.target.name]: e.target.value }
    setUser(newUser)
  }

  const handleSubmit = (e) => {
    //阻擋預設行為
    e.preventDefault()

    // FormData範例
    // 再送出資料時做檢查
    // const forData = new FormData(e.target)
    // if (!forData.get('fullname')) {
    //   alert('你沒填寫姓名')
    // }

    // 對欄位做檢查
    if (!user.fullname) {
      newError.fullname = '請填寫姓名'
      hasError = true
    }
    if (!user.email) {
      newError.email = '請填寫Email'
      hasError = true
    }
    if (hasError) {
      setError(newError)
      return
    }
  }

  return (
    <>
      <style jsx>
        {`
          .error {
            color: red;
            font-size: 10px;
          }
        `}
      </style>

      <form onSubmit={handleSubmit}>
        <h1>註冊表單輸入與驗證</h1>
        <div>
          <label>
            姓名:{' '}
            <input
              type="text"
              name="fullname"
              value={user.fullname}
              onChange={handFieldChange}
            />
          </label>
          <span className="error">{error.fullname}</span>
        </div>

        <div>
          <label>
            Email:{' '}
            <input
              type="text"
              name="email"
              value={user.email}
              onChange={handFieldChange}
            />
          </label>
          <span className="error">{error.email}</span>
        </div>

        <div>
          <label>
            密碼
            <input
              type={show ? 'text' : 'password'}
              name="password"
              value={user.password}
              onChange={handFieldChange}
            />
          </label>
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
        </div>

        <div>
          <label>
            密碼確認
            <input
              type={show2 ? 'text' : 'password'}
              name="password2"
              value={user.password2}
              onChange={handFieldChange}
            />
          </label>
          <label>
            <input
              type="checkbox"
              checked={show2}
              onChange={(e) => {
                setShow2(e.target.checked)
              }}
            />
            顯示密碼
          </label>
        </div>
        <div>
          <button>提交</button>
        </div>
      </form>
    </>
  )
}
