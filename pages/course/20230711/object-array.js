import { filter, slice } from 'lodash'
import { useState } from 'react'

const objArray = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
]

export default function ObjectArray() {
  // 與呈現有關必需先成為state
  const [data, setData] = useState(objArray)

  return (
    <>
      <div className="row">
        <div className="col-6">
          <h1>物件陣列的各種操作</h1>
          <hr />
          <h2>資料表格</h2>
          <table border="1">
            <thead>
              <tr>
                <th>ID</th>
                <th>Text</th>
              </tr>
            </thead>
            <tbody>
              {data.map((v, i) => {
                return (
                  <tr key={v.id}>
                    <td>{v.id}</td>
                    <td>{v.text}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
          <hr />
          <h2>操作</h2>
          <p>
            <strong>
              注意: 請在任一操作前先重新整理網頁
              ，或是對重覆id值進行加入時的限制。
            </strong>
            有些操作是key值會對應id的關係，會產生key值重覆問題，造成不預期的結果。實務上務必要考慮key不可以重覆問題。
          </p>
        </div>
        <div className="col-6">
          <button
            onClick={() => {
              // 先寫出要新增的物件值
              const newObj = { id: 99, text: 'xxx' }

              // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
              // 2. 在新的變數值(陣列/物件)上作處理
              // 3. 設定回原本的狀態中

              //1 //2
              const newData = [newObj, ...data]

              //3
              setData(newData)
            }}
          >
            列表最前面，新增一個物件值id為99與文字為xxx的物件
          </button>
          <br />
          <button
            onClick={() => {
              const newObj = { id: 88, text: 'yyy' }

              //1 //2
              const newData = [...data, newObj]

              //3
              setData(newData)
            }}
          >
            列表最後面，新增一個物件值id為88與文字為yyy的物件
          </button>
          <br />

          <button
            onClick={() => {
              const newObj = { id: data.length + 1, text: 'yyy' }
              setData([...data, newObj])
            }}
          >
            列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
          </button>

          <br />

          <button
            onClick={() => {
              const newObj = { id: data.length + 1, text: 'yyy' }
              setData([newObj, ...data])
            }}
          >
            列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
          </button>

          <br />

          <button
            onClick={() => {
              const ids = data.map((v) => v.id)
              const idss = Math.max(...ids) + 1
              const newObj = { id: idss, text: 'yyy' }
              setData([newObj, ...data])
            }}
          >
            老師的增加寫法
          </button>

          <br />

          <button
            onClick={() => {
              const filterData = data.filter((v) => {
                return v.text.includes('a')
              })
              setData(filterData)
            }}
          >
            尋找(過濾)只呈現所有文字中有包含a英文字母的資料
          </button>
          <br />
          <button
            onClick={() => {
              const deleteb = data.filter((v) => {
                return v.text !== 'b'
              })
              setData(deleteb)
            }}
          >
            刪除文字為b的物件資料
          </button>
          <br />
          <button
            onClick={() => {
              const delete4 = data.filter((v) => {
                return v.id !== 4
              })
              setData(delete4)
            }}
          >
            刪除id為4的物件資料
          </button>
          <br />
          <button
            onClick={() => {
              const ids = data.findIndex((v) => v.id === 2)
              if (ids > -1) {
                const insertid = { id: 5, text: 'bbb' }
                const startid = data.slice(0, ids + 1)
                const endid = data.slice(ids + 1)
                setData([...startid, insertid, ...endid])
              }
            }}
          >
            在id為2後面插入id為5與文字為bbb的物件
          </button>
          <br />

          <button
            onClick={() => {
              const deepCloneData = JSON.parse(JSON.stringify(data))
              const foundIndex = deepCloneData.findIndex((v) => v.id === 5)

              if (foundIndex !== -1) {
                deepCloneData[foundIndex].text = 'cccc'
                setData(deepCloneData)
              }
            }}
          >
            取代id為5的文字為cccc
          </button>

          <br />

          <button
            onClick={() => {
              const updatetext = data.map((v) => {
                if (v.id == 5) {
                  return { ...v, text: 'cccc' }
                }
                return v
              })

              setData(updatetext)
            }}
          >
            取代id為5的文字為cccc
          </button>
        </div>
      </div>
    </>
  )
}
