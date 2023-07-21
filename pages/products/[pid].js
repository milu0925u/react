import React, { useEffect, useLayoutEffect, useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import Img from 'next/image'

export default function ProductDetail() {
  const [pds, setPds] = useState({
    id: '',
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tags: '',
  })

  const getPds = async (pid) => {
    const res = await fetch(
      `https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/${pid}`
      // '@/data/product/product'
    )
    const data = await res.json()

    // 得到資料後，設定pd狀態
    setPds(data)
    console.log(data)
  }

  // 1. 從網址動態路由中得到pid(在router.query中的一個屬性pid)
  const router = useRouter()
  useLayoutEffect(() => {
    // 確定pid可以得到後，才向伺服器要求資料
    if (router.isReady) {
      console.log(router.query)
      const { pid } = router.query
      getPds(pid)
    }
  }, [router.isReady])
  // ^^^^^^^^^^^^^^^^ isReady代表目前水合化作用

  return (
    <>
      <div>商品詳細頁</div>
      <div>
        <img src={pds.picture} />
      </div>
      <div>商品名稱：{pds.name}</div>
      <div>商品價格：{pds.price}</div>
      <Link href="/products">回列表</Link>
    </>
  )
}
