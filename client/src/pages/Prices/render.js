import React from 'react'
import {
  SET_START_WATCHING_CURRENCY,
  STOP_WATCHING_CURRENCY_REQUEST
} from '../../constants'

export default function() {
  const {app, startWatchingCurrency} = this.props
  const currencies = ['BTC', 'XPR', 'LTC']
  const prices = [
    {currency: 'BTC', price: 5612.12},
    {currency: 'XPR', price: 0.35}
  ]
  const watchedCurrencies = prices.map(price => price.currency)
  const notWatchedCurrencies = currencies.filter(
    currency => !watchedCurrencies.includes(currency)
  )

  return (
    <div className="prices-page">
      <h1>Crypto prices watchlist</h1>
      <div className="price-list">
        <h2>Prices currently are</h2>
        {prices.map(({price, currency}) => (
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
            app.dispatch(SET_START_WATCHING_CURRENCY, {
              startWatchingCurrency: event.target.value
            })
          }
        >
          <option value={null}>Select a currency to watch</option>
          {notWatchedCurrencies.map(currency => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
        {startWatchingCurrency && <button>Watch currency</button>}
      </div>
    </div>
  )
}
