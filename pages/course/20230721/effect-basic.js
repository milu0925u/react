import { useEffect, useState } from 'react'

export default function EffectBasic() {
  const [count, setCount] = useState(0)
  const [open, setOpen] = useState(false)

  const [name, setName] = useState('')

  //每次render都會執行(很少用到的樣式)
  useEffect(() => {
    console.log('每次render都會執行到這裡')
  })

  // didMount(after first render)
  // 第一次渲染"後"執行一次，之後不會再執行(常用到的樣式)
  useEffect(() => {
    console.log('第一次渲染"後"執行一次，之後不會再執行')
  }, [])
  // ^^這裡沒有加入任何相依變數，代表不與任何變數相依，即預設行為模式

  // didMount + didUpdate(after update)
  useEffect(() => {
    console.log('第一次渲染"後"執行一次 + 之後open狀態有改變"後"會執行這裡')
  }, [open])
  // ^^^^^^ 這裡加入了open狀態，相當於監聽open狀態有變化(change)時，才會執行

  //didMount + willUnmount(很少用到的樣式，只會搭配在特定情況下使用)
  useEffect(() => {
    window.addEventListener('resize', function () {
      console.log(window.innerWidth, window.innerHeight)
    })

    // 函式的回傳值會是另個函式，通常稱為cleanup(清除函式)
    return () => {
      // willUnmount
      window.removeEventListener('resize', function () {
        console.log(window.innerWidth, window.innerHeight)
      })
    }
  }, [])
  return (
    <>
      <h1>useEffect基本範例</h1>
      <h1>{count}</h1>
      <button
        onClick={() => {
          setCount(count + 1)
        }}
      >
        +1
      </button>
      <br />
      <button onClick={() => setOpen(!open)}>open</button>
    </>
  )
}
