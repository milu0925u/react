import React from 'react'
import TodoIndex from '@/components/todo'

export default function Todo() {
  return (
    <>
      <div className="row">
        <div className="col-3 border border-5">
          <h1>待辦事項</h1>
          <TodoIndex />
        </div>
      </div>
    </>
  )
}
