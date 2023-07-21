import React, { useState } from 'react'
import Child from '@/components/effect/child'

export default function EffectBasic2() {
  const [name, setName] = useState({ myname: 'Ray' })
  return (
    <>
      <button
        onClick={() => {
          setName({ myname: 'NICK' })
        }}
      >
        改名A
      </button>
      <button
        onClick={() => {
          setName({ myname: 'Ray' })
        }}
      >
        改名B
      </button>
      <Child name={name} />
    </>
  )
}
