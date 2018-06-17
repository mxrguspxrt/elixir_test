import {START_WATCHING_CURRENCY_RESPONSE} from '../../constants'

export default async function({app, action, params}) {
  const {api} = app
  const {result, errors} = await api.call({action, params})
  app.dispatch(START_WATCHING_CURRENCY_RESPONSE, {result, errors})
}
