import React from 'react'
import Item from './item'
import TodoEdit from '../todoEdit'

export default function TodoList({
  todo,
  handleSub,
  handletoggleCompleted,
  handletoggleEditing,
  handletoggleEditingUpdate,
}) {
  return (
    <>
      <ul className="p-2">
        {todo.map((v) => {
          const { id, completed, text, editing } = v
          return editing ? (
            <TodoEdit
              key={id}
              id={id}
              text={text}
              handletoggleEditingUpdate={handletoggleEditingUpdate}
            />
          ) : (
            <Item
              key={id}
              id={id}
              completed={completed}
              text={text}
              handleSub={handleSub}
              handletoggleCompleted={handletoggleCompleted}
              handletoggleEditing={handletoggleEditing}
            />
          )
        })}
      </ul>
    </>
  )
}
