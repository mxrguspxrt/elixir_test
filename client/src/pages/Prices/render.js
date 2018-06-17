import React from 'react'

export default function() {
  const currencies = ['BTC', 'XPR', 'LTC']
  const prices = [
    {currency: 'BTC', price: 5612.12},
    {currency: 'XPR', price: 0.35}
  ]

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
              <button className="remove">Stop watching</button>
            </div>
          </div>
        ))}
      </div>
      <div className="add-price">
        <h2>Add a new currency to watchlist</h2>
        <select>
          <option>Select a currency to add</option>
          {currencies.map(currency => (
            <option value={currency} key={currency}>
              {currency}
            </option>
          ))}
        </select>
        <button>Add currency</button>
      </div>
    </div>
  )
}
