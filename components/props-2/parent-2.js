import { useState } from 'react'
import ChildA from './child-A'
import ChildB from './child-B'

export default function Parent2() {
  //1. Parent傳遞給child的狀態
  const [pData, setPData] = useState('初始值狀態')
  //2. 讓childB設定資料傳遞給Parent
  const [dataFromB, setDataFromB] = useState('')

  return (
    <>
      <h1>Parent的文字</h1>
      <ChildA pData={pData} dataFromB={dataFromB} />

      {/* 這是一個函式傳遞 */}
      <ChildB setDataFromB={setDataFromB} />
      <p>來自ChildB的資料：{dataFromB}</p>
    </>
  )
}
