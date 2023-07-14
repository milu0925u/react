import { useState } from 'react'
import Parent from './parent-2'
import ThemeContext from '@/context/theme'

export default function Grandparent() {
  const [color, setColor] = useState('red')
  const [nColor, setnColor] = useState('red')

  return (
    <ThemeContext.Provider value={{ color, setColor, nColor, setnColor }}>
      <h1>Grandparent</h1>
      <Parent />
    </ThemeContext.Provider>
  )
}
