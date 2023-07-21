import handler from '@/pages/api/hello'
import React, { useState } from 'react'
export default function Html52() {
  // radio-group
  const foodOptions = ['牛肉麵', '三明治', '牛奶']
  const [food, setfood] = useState('')

  // select
  const cityOptions = ['台北市', '台中市', '台南市', '高雄市', '屏東市']
  const [city, setCity] = useState('')

  //checkbox group
  const fruitOption = ['西瓜', '芒果', '蘋果', '香蕉', '柚子', '橘子']
  const [fruits, setFruits] = useState([])

  // 把input onChange的事件拉出來使用
  const handleFruits = (e) => {
    // 判斷是否在 state陣列中
    // 有 --->移出陣列
    // 沒有 --->加入state陣列
    const targetValue = e.target.value
    if (fruits.includes(targetValue)) {
      const newFruits = fruits.filter((v2) => v2 != targetValue)
      setFruits(newFruits)
    } else {
      setFruits([...fruits, targetValue])
    }
  }

  return (
    <>
      <section id="radio-group" className="p-2">
        <h3>radio group </h3>
        {foodOptions.map((v, i) => {
          return (
            <label key={i}>
              <input
                type="radio"
                value={v}
                checked={v === food}
                onChange={(e) => {
                  setfood(e.target.value)
                }}
              />
              {v}
            </label>
          )
        })}
      </section>

      <section id="select">
        <h2>select 下拉選單</h2>
        <select
          onChange={(e) => {
            setCity(e.target.value)
          }}
        >
          {/* <option hidden> */}
          <option selected disabled>
            --- 請選擇城市 ---
          </option>
          {cityOptions.map((v, i) => {
            return (
              <option key={i} value={i}>
                {v}
              </option>
            )
          })}
        </select>
      </section>

      <section id="checkbox-group">
        <h2>checkbox group</h2>
        {fruitOption.map((v, i) => {
          return (
            <label key={i}>
              <input
                value={v}
                checked={fruits.includes(v)}
                onChange={(e) => {
                  handleFruits(e)
                }}
                type="checkbox"
              />
              {v}
            </label>
          )
        })}
      </section>
    </>
  )
}
