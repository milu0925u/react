import React from 'react'
import PropTypes from 'prop-types'

export default function Child({ name = 'milu', price = 0, text = '' }) {
  return (
    <>
      <h1>------------</h1>
      <p>姓名：{name}</p>
      <p>價格：{price}</p>
      <p>訊息：{text}</p>
    </>
  )
}

// 設定限制的類型
Child.propTypes = {
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
}

Child.defaultProps = {
  text: '好的漂奏~',
  name: 'aaaaaa',
  price: 10,
}
