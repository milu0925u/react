import { useState } from 'react'
import styles from '@/styles/counter.module.css'

export default function Counter() {
  // [獲得值的變數，設定值的方法] = useState(初始值)
  const [count, setCount] = useState(0)
  const divStyle = {
    MaxWidth: '200px',
  }

  return (
    <>
      <div className={`card ${styles['cardstyle']}`}>
        <div style={divStyle}>
          <img src="/getImage.webp" className="card-img" />
        </div>
        <div className="card-body">
          <h5 className="card-title">原子習慣</h5>
          <p className="card-text">
            ‧建立一套每天進步1%的系統
            ‧戒除壞習慣，保持好習慣避免多數人在改變習慣時常犯的錯‧克服「缺乏動機和意志力」的問題
            ‧建立更強大的身分認同與信心‧騰出時間建立新習慣（即使你忙瘋了）設計讓你更容易成功的環境‧做出可以造就巨大成果的微小改變在養成好習慣的路上走偏時回到正軌‧將本書中提到的概念運用在實際生活中
          </p>

          <div class="d-flex">
            <input type="text" value={count} name={count} />
            <button
              class="btn btn-outline-primary"
              onClick={() => {
                setCount(count + 1)
              }}
            >
              <i class="fa-solid fa-sort-up"></i>
            </button>
            <button
              class="btn btn-outline-primary"
              onClick={() => {
                count > 0 ? setCount(count - 1) : 1
              }}
            >
              <i class="fa-solid fa-caret-down"></i>
            </button>
          </div>
        </div>
        <a href="#" class="btn btn-primary">
          購買
        </a>
      </div>
    </>
  )
}
