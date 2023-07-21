import React from 'react'
import { useRouter } from 'next/router'

export default function UserName() {
  const router = useRouter()
  //他自己本身的
  const { isReady, query } = router
  //   const { name } = router.query
  //   return <>name={name}</>
  // 根據檔案名稱[uid].js去抓的
  return <>UID={router.query.uid}</>
}
