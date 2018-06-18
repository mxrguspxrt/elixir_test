export default function({currency}, oldState = {}) {
  return {
    ...oldState,
    prices: {
      ...oldState.prices,
      items: oldState.prices.items.filter(item => item.currency != currency)
    }
  }
}
