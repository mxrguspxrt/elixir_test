import {UNSUBSCRIBE_FROM_PRICES_REQUEST} from '../../constants'

export default function() {
  const {app} = this.props
  app.dispatch(UNSUBSCRIBE_FROM_PRICES_REQUEST)
}
