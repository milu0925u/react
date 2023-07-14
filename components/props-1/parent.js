import React from 'react'
import Child from './child'

export default function Parent() {
  const oa = {
    text: '今天開始',
    name: 'eddy',
    price: 100,
  }

  const abc = 'abc'
  const total = 100

  const params = {
    text: '????????',
    name: 'dudu',
    price: 500,
  }

  return (
    <>
      {/* 會依照預設值顯示； */}
      <Child />
      {/* 同意義 */}
      {/* 多個物件用這個方法 */}
      <Child text="今天會下雨" name="may" price={500} />
      <Child {...oa} />
      {/* 同意義 */}
      <Child abc total />
      <Child abc={true} total={true} />
      {/* 若想要顯現上面的值 */}
      {/* 單個東西用這個方法 */}
      <Child abc={abc} total={total} />
      {/* 不好ㄉ作法：因為他傳遞物件值 */}
      <Child params={params} />
    </>
  )
}
