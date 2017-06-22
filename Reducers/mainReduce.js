

export default function counter(state = { count: 0, flag: true }, action) {
  var {count, flag} = state
  switch (action.type) {
    case 'increase':
      return { count: count + 1, flag: true }
    case 'decrease':
      return { count: count - 1, flag: false }
    default:
      return state
  }
}
