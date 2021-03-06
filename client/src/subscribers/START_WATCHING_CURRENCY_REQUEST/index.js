import {
  START_WATCHING_CURRENCY_RESPONSE,
  LOAD_PRICES_REQUEST
} from '../../constants'

export default async function({app, action, params}) {
  const {api} = app
  const {result, errors} = await api.call({action, params})
  app.dispatch(START_WATCHING_CURRENCY_RESPONSE, {result, errors})
  app.dispatch(LOAD_PRICES_REQUEST)
}
