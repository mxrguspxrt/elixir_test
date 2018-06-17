import reducers from '../../reducers'
import subscribers from '../../subscribers'

export default function(action, params) {
  console.log('App#dispatch', {action, params})

  const oldState = this.state
  const reducer = reducers[action]
  const newState = reducer ? reducer(params, oldState) : oldState

  const subscriber = subscribers[action]
  subscriber && subscriber({app: this, action, params})

  return newState
}
