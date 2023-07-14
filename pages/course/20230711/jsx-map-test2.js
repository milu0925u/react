import React from 'react'

import data from '@/data/product/product.json'

export default function JsxMapTest() {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>圖片</th>
            <th>名稱</th>
            <th>價格</th>
          </tr>
        </thead>
        <tbody>
          {data.products.map((v) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>
                  <img src={v.picture} />
                </td>
                <td>{v.name}</td>
                <td>{v.price}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
