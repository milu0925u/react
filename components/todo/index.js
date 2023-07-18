import React, { useState } from 'react'
import TodoAdd from './todoAdd'
import List from './list'
import FilterButton from './list/filterButton'

export default function TodoIndex() {
  //每個成員 todo ={ id , text}
  const [todo, setTodo] = useState([
    {
      id: 1,
      text: '買飯',
      completed: false,
      editing: false,
    },
    {
      id: 2,
      text: '讀書',
      completed: false,
      editing: false,
    },
    {
      id: 3,
      text: '休息',
      completed: false,
      editing: false,
    },
  ])

  // filterButton所用
  const [type, setType] = useState('所有')
  const filterByType = (todo, type) => {
    if (type === '已完成') {
      return todo.filter((v) => v.completed)
    } else if (type === '進行中') {
      return todo.filter((v) => !v.completed)
    } else {
      return todo
    }
  }

  // 進入編輯狀態
  const toggleEditing = (todo, id) => {
    return todo.map((v) => {
      if (v.id === id) return { ...v, editing: true }
      else return { ...v, editing: false }
    })
  }
  const handletoggleEditing = (id) => {
    setTodo(toggleEditing(todo, id))
  }

  // 進入編輯狀態後更新
  const toggleEditingUpdate = (todo, id, newText) => {
    return todo.map((v) => {
      if (v.id === id) return { ...v, text: newText, editing: false }
      else return { ...v }
    })
  }
  const handletoggleEditingUpdate = (id, text) => {
    setTodo(toggleEditingUpdate(todo, id, text))
  }

  // 比對v.id和id 作為切換布林值動作
  const toggleCompleted = (todo, id) => {
    return todo.map((v) => {
      if (v.id === id) return { ...v, completed: !v.completed }
      else return { ...v }
    })
  }
  // 專門設計給拆分出TodotoggleCompleted子元件用的處理函式
  const handletoggleCompleted = (id) => {
    setTodo(toggleCompleted(todo, id))
  }

  // 新增INPUT (Pure Function)
  const add = (todo, newtext) => {
    const ids = todo.map((v) => v.id) //列出所有id陣列
    const newId = ids.length > 0 ? Math.max(...ids) + 1 : 1
    const newTodo = {
      id: newId,
      text: newtext,
      completed: false,
      editing: false,
    }
    return [newTodo, ...todo]
  }
  // 專門設計給拆分出TodoAdd子元件用的處理函式
  const handleAdd = (inputText) => {
    setTodo(add(todo, inputText))
  }

  // 刪除按鈕
  const sub = (todo, sub) => {
    return todo.filter((v) => {
      if (v.id !== sub) {
        return { ...v }
      }
    })
  }
  // 專門設計給拆分出TodoSub子元件用的處理函式
  const handleSub = (id) => {
    setTodo(sub(todo, id))
  }

  // 全選
  const all = (todo, checked) => {
    return todo.map((v) => {
      return { ...v, completed: checked ? true : false }
    })
  }
  // 專門設計給拆分出TodoAdd子元件用的處理函式
  const handleAll = (e) => {
    setTodo(all(todo, e))
  }

  return (
    <>
      <TodoAdd handleAdd={handleAdd} handleAll={handleAll} todo={todo} />
      <List
        todo={filterByType(todo, type)}
        handleSub={handleSub}
        handletoggleCompleted={handletoggleCompleted}
        handletoggleEditing={handletoggleEditing}
        handletoggleEditingUpdate={handletoggleEditingUpdate}
      />
      <FilterButton type={type} setType={setType} />
    </>
  )
}
