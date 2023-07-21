import React, { useEffect, useState } from 'react'
import Link from 'next/link'

export default function ProductIndex() {
  const [pds, setPds] = useState([])

  const getPds = async () => {
    const res = await fetch(
      'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'
      // '@/data/product/product'
    )
    const data = await res.json()
    setPds(data)
    console.log(data)
  }

  useEffect(() => {
    getPds()
  }, [])

  return (
    <>
      <div>商品列表頁</div>
      <ul>
        {pds.map((v) => {
          return (
            <li key={v.id} className="border border-5">
              <Link href={`/products/${v.id}`}>
                {v.name} / {v.price}
              </Link>
            </li>
          )
        })}
      </ul>
    </>
  )
}
