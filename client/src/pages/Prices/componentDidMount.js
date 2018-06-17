import {LOAD_PRICES_REQUEST} from '../../constants'

export default function() {
  const {app} = this.props
  app.dispatch(LOAD_PRICES_REQUEST)
}
