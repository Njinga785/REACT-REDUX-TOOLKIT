import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment, incrementByAmount } from './redux/counter'

export function App() {
  const { count } = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  return (
    
      <div className='App'>
      <h1>The count is {count}</h1>
        <button
          aria-label="Increment value"
          onClick={() => dispatch(increment())}
        >
          Increment
        </button>
        {/* <span>{count}</span> */}
        <button
          aria-label="Decrement value"
          onClick={() => dispatch(decrement())}
        >
          Decrement
        </button>
        <button
          aria-label="IncrementByValue value"
          onClick={() => dispatch(incrementByAmount(30))}
        >
          Increment By 30
        </button>
      </div>
    
  )
}
export default App