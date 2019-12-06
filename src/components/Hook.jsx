import React, { useState, useEffect } from 'react'

export default props => {
  const [count, setCount] = useState(100)
  const [status, setPairOnInpart] = useState('Pair')

  useEffect(() => {
    count % 2 === 0 ? setPairOnInpart('Pair') : setPairOnInpart('Inpart')
  })
  return (
    <div>
      <h1>{count}</h1>
      <h1>{status}</h1>
      <button onClick={() => setCount(count - 1)}>Dec</button>
      <button onClick={() => setCount(count + 1)}>Inc</button>
    </div>
  )

}
