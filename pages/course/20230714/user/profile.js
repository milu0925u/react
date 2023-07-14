import React from 'react'
import Link from 'next/link'
import { useAuth } from '@/hooks/use-auth'

export default function Profile() {
  const { auth, setAuth } = useAuth()
  return (
    <>
      <h1>會員資料</h1>
      <p>ID:{auth.id}</p>
      <p>姓名:{auth.name}</p>
      <p>Token:{auth.token}</p>
      <Link href="/course/20230714/user/login">登入</Link>
    </>
  )
}
