import { useState } from 'react'

export default function Counter() {
  // [獲得值的變數，設定值的方法] = useState(初始值)
  const [count, setCount] = useState({ total: 0 })

  return (
    <>
      <div className="container w-25 p-2">
        <input
          type="text"
          className="form-control text-center"
          value={count.total}
        />

        <button
          className="btn btn-outline-primary form-control"
          onClick={() => {
            setCount({ total: count.total + 1 })
          }}
        >
          <i class="fa-solid fa-sort-up"></i>
        </button>

        <button
          className="btn btn-outline-primary form-control"
          onClick={() => {
            count.total > 0
              ? setCount({ total: count.total - 1 })
              : { total: 1 }
          }}
        >
          <i class="fa-solid fa-caret-down"></i>
        </button>
      </div>
    </>
  )
}
