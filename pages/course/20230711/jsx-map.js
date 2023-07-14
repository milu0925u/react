// 寫法一
// import React from 'react'

// export default function JsxMap() {
//   const users = ['J', 'K', 'Q', 'GG', '87']
//   const displayUsers = users.map((v, i) => {
//     return <li key={i}>{v}</li>
//   })

//   return (
//     <>
//       <h1>MAP範例</h1>
//       <ul>{displayUsers}</ul>
//     </>
//   )
// }

// ------------------------------
// 寫法二
import React from 'react'

export default function JsxMap() {
  const users = ['J', 'K', 'Q']

  return (
    <>
      <h1>MAP範例</h1>
      <ul>
        {users.map((v, i) => {
          return <li key={i}>{v}</li>
        })}
      </ul>
    </>
  )
}
