import React from 'react'
import styles from '@/styles/todo.module.css'

export default function TodoRead({
  id,
  completed,
  text,
  handleSub,
  handletoggleCompleted,
  handletoggleEditing,
}) {
  return (
    <>
      <li key={id} className="d-flex justify-content-between">
        <div>
          <input
            type="checkbox"
            checked={completed}
            onChange={() => {
              handletoggleCompleted(id)
            }}
          />
          <span className={completed ? styles.completed : styles.active}>
            {text}
          </span>
        </div>

        <button
          className="btn btn-outline-primary"
          onClick={() => {
            handleSub(id)
          }}
        >
          刪除
        </button>

        <button
          className="btn btn-outline-primary"
          onClick={() => {
            handletoggleEditing(id)
          }}
        >
          編輯
        </button>
      </li>
    </>
  )
}
