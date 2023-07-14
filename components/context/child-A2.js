import ThemeContext from '@/context/theme'
import { useContext } from 'react'

export default function ChildA2() {
  const { color, setColor } = useContext(ThemeContext)

  return (
    <>
      <h3>ChildA2</h3>
      <div style={{ color: color }}>Hello world A2</div>
      <button
        onClick={() => {
          setColor('blue')
        }}
      >
        藍色
      </button>
      <button
        onClick={() => {
          setColor('red')
        }}
      >
        紅色
      </button>
    </>
  )
}
