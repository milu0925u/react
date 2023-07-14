import React, { useState } from 'react'

export default function Menu() {
  const [activeIndex, setActiveIndex] = useState(0)

  const arr = ['首頁', '關於我們', '產品']
  const handleItemClick = (index) => {
    setActiveIndex(index)
  }

  return (
    <>
      <ul>
        {arr.map((item, index) => (
          <li key={index} className={activeIndex === index ? 'active' : 1}>
            <a href="#" onClick={() => handleItemClick(index)}>
              {item}
            </a>
          </li>
        ))}
      </ul>
    </>
  )
}
