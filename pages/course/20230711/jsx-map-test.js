import React from 'react'

// const data = [
//   { id: 107001, name: '張佳蓉', age: 21 },
//   { id: 107002, name: '楊智云', age: 20 },
//   { id: 107003, name: '陳語合', age: 19 },
//   { id: 107004, name: '林世名', age: 22 },
//   { id: 107005, name: '張建彰', age: 21 },
//   { id: 107006, name: '黃國瑄', age: 20 },
//   { id: 107007, name: '徐昶意', age: 18 },
//   { id: 107008, name: '賴靖瑞', age: 19 },
//   { id: 107009, name: '宋紀仲', age: 22 },
// ]

import data from '@/data/students/students.json'

export default function JsxMapTest() {
  return (
    <>
      <h1>Map練習-學生資料</h1>
      <ul>
        {data.map((v, i) => {
          return (
            <li key={v.id}>
              {i + 1} / {v.id} / {v.name} / {v.age}
            </li>
          )
        })}
      </ul>
    </>
  )
}
