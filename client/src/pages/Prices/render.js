import React from 'react'
import {
  SET_FORM_VALUE,
  STOP_WATCHING_CURRENCY_REQUEST,
  START_WATCHING_CURRENCY_REQUEST
} from '../../constants'

export default function() {
  const {app} = this.props
  const {state} = app
  const {startWatchingCurrency} = state.form || {}
  const {isLoading, errors, items} = state.prices || {}
  const currencies = ['BTC', 'ETH', 'XRP', 'LTC']

  if (isLoading) {
    return <b>Loading</b>
  }

  const watchedCurrencies = items.map(price => price.currency)
  const notWatchedCurrencies = currencies.filter(
    currency => !watchedCurrencies.includes(currency)
  )

  return (
    <div className="prices-page">
      <h1>Crypto prices watchlist</h1>
      <div className="price-list">
        <h2>Prices currently are</h2>
        {items &&
          items.map(({price, currency}) => (
            <div className="price-list-item" key={currency}>
              <div className="currency">{currency}</div>
              <div className="price">{price}</div>
              <div className="stop-watching">
                <button
                  className="remove"
                  onClick={() =>
                    app.dispatch(STOP_WATCHING_CURRENCY_REQUEST, {currency})
                  }
                >
                  Stop watching
                </button>
              </div>
            </div>
          ))}
      </div>
      <div className="add-price">
        <h2>Add a new currency to watchlist</h2>
        <select
          value={startWatchingCurrency}
          onChange={event =>
            app.dispatch(SET_FORM_VALUE, {
              startWatchingCurrency: event.target.value
            })
          }
        >
          <option value="">Select a currency to watch</option>
          {notWatchedCurrencies.map(currency => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
        {startWatchingCurrency && (
          <button
            onClick={() =>
              app.dispatch(START_WATCHING_CURRENCY_REQUEST, {
                currency: startWatchingCurrency
              })
            }
          >
            Watch currency
          </button>
        )}
      </div>
    </div>
  )
}
