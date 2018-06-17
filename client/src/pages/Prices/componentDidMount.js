import {SUBSCRIBE_TO_PRICES_REQUEST} from '../../constants'

export default function() {
  const {app} = this.props
  app.dispatch(SUBSCRIBE_TO_PRICES_REQUEST)
}
