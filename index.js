import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOM from 'react-dom'
import { createStore, bindActionCreators } from 'redux'
import { Provider, connect } from 'react-redux'
import App from './container/home'
// import * as mainActions from './Actions/mainAction'
import mainReduce from './Reducers/mainReduce'

// React component
// class Counter extends Component {
//   render() {
//     const { value, mainActions } = this.props
//     return (
//       <div>
//         {
//           value.flag &&
//           <button onClick={mainActions.decrease}>--</button>
//         }
//
//         <span>{value.count}</span>
//
//         {
//           !value.flag &&
//           <button onClick={mainActions.increase}>++</button>
//         }
//
//       </div>
//     )
//   }
// }

// Reducer
// function counter(state = { count: 0, flag: true }, action) {
//   var {count, flag} = state
//   switch (action.type) {
//     case 'increase':
//       return { count: count + 1, flag: true }
//     case 'decrease':
//       return { count: count - 1, flag: false }
//     default:
//       return state
//   }
// }

// Store
const store = createStore(mainReduce)

// Map Redux state to component props
// function mapStateToProps(state) {
//   return {
//     value: state
//   }
// }
//
// // Map Redux actions to component props
// function mapDispatchToProps(dispatch) {
//   return {
//     mainActions: bindActionCreators(mainActions, dispatch),
//     // onIncreaseClick: () => dispatch(increaseAction),
//     // onDecreaseClick: () => dispatch(decreaseClick)
//   }
// }

// Connected Component
// const App = connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Counter)

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
