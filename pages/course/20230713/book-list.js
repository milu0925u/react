import { useState, useEffect } from 'react'
import Image from 'next/image'

// 範例資料
import data from '@/data/books/books.json'

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg'
import { update } from 'lodash'

export default function BookList() {
  //幫每個資料加入一個fav(收藏)的狀態
  const initState = data.map((v) => {
    return { ...v, fav: false }
  })

  //設定轉變狀態
  const [book, setBook] = useState(initState)
  const [prevBook, setPrevBook] = useState([])

  //觸發事件轉變-方法1

  //   const toggle = (isbn) => {
  //     const change = book.map((v) => {
  //       if (v.isbn === isbn) return { ...v, fav: !v.fav }
  //       else return { ...v }
  //     })
  //     setBook(change)
  //   }

  const toggle = (isbn) => {
    const update = book.map((v) => {
      if (v.isbn === isbn) {
        return { ...v, fav: !v.fav }
      } else {
        return v
      }
    })
    setBook(update)
  }

  useEffect(() => {
    setPrevBook(book)
  }, [book])

  //觸發事件轉變-方法2 (還不能用)
  //   const toggle = (state, isbn) => {
  //     return state.map((v) => {
  //       if (v.isbn === isbn) return { ...v, fav: !v.fav }
  //       else return { ...v }
  //     })
  //   }

  return (
    <>
      <h1>書籍清單</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>title</th>
            <th>author</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          {prevBook.map((v) => {
            return (
              <tr key={v.isbn}>
                <td>{v.isbn}</td>
                <td>{v.title}</td>
                <td>{v.author}</td>
                <td>
                  <Image
                    alt={v.isbn}
                    src={v.fav ? bookmarkIconFill : bookmarkIcon}
                    onClick={() => {
                      toggle(v.isbn)
                    }}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </>
  )
}
