import {LOAD_PRICES_RESULT} from '../../constants'

export default async function({app, action, params}) {
  const {api} = app
  const {result, errors} = await api.call({action, params})
  console.log({result, errors})
  app.dispatch(LOAD_PRICES_RESULT, {result, errors})
}
