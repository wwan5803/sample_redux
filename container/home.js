
import React, { Component } from 'react'
import { createStore, bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
import * as mainActions from '../Actions/mainAction'
import Counter from '../components/counter'

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {}
  }

  render() {
    const { value, mainActions } = this.props
    return (
      <div>
        <Counter value={value} increase={mainActions.increase} decrease={mainActions.decrease}/>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    value: state
  }
}

// Map Redux actions to component props
function mapDispatchToProps(dispatch) {
  return {
    mainActions: bindActionCreators(mainActions, dispatch),
    // onIncreaseClick: () => dispatch(increaseAction),
    // onDecreaseClick: () => dispatch(decreaseClick)
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home)
