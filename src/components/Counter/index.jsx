import React, { useState } from 'react'
import PropTypes from 'prop-types'

Counter.propTypes = {}

function Counter(props) {
  const [count, setCount] = useState(0)
  return (
    <div>
      {count}

      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}

export default Counter
