import ThemeContext from '@/context/theme'
import { useContext } from 'react'

export default function ChildB2() {
  const { nColor, setnColor } = useContext(ThemeContext)
  return (
    <>
      <h3>ChildB2</h3>
      <div style={{ color: nColor }}>Hello world B2</div>
      <button
        onClick={() => {
          setnColor('green')
        }}
      >
        綠色
      </button>
      <button
        onClick={() => {
          setnColor('yellow')
        }}
      >
        黃色
      </button>
    </>
  )
}
