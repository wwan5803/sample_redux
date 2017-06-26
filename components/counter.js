
import React, { Component } from 'react'

class Counter extends Component {
  render() {
    const { value, increase, decrease } = this.props
    return (
      <div>

        <button onClick={decrease}>--</button>
          <span>{value.count}</span>
        <button onClick={increase}>++</button>
        {console.log(value.counter)}
        {
          value.flag &&
          <div>
            yes
          </div>
        }
        {
          !value.flag &&
          <div>
            no
          </div>
        }



      </div>
    )
  }
}

export default Counter
