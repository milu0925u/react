import { useState } from 'react'

export default function Counter() {
  // [獲得值的變數，設定值的方法] = useState(初始值)
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container w-25 p-2">
        <input type="text" className="form-control text-center" />
        <input
          type="hidden"
          className="form-control text-center"
          value={count}
        />

        <button
          className="btn btn-outline-primary form-control"
          onClick={() => {
            setCount(count + 1)
          }}
        >
          <i class="fa-solid fa-sort-up"></i>
        </button>

        <button
          className="btn btn-outline-primary form-control"
          onClick={() => {
            count > 0 ? setCount(count - 1) : 1
          }}
        >
          <i class="fa-solid fa-caret-down"></i>
        </button>
      </div>
      <hr />
      {/* && 前面的運算要能運算出布林值，此語法才會穩固 */}
      {!!count && <h2>訊息:目前計數為 {count}</h2>}
      {Boolean(count) && <h2>訊息:目前計數為 {count}</h2>}
      {count !== 0 && <h2>訊息:目前計數為 {count}</h2>}
      {count > 0 && <h2>訊息:目前計數為 {count}</h2>}
    </>
  )
}
