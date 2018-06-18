export default function({result, errors}, oldState = {}) {
  return {
    ...oldState,
    prices: {
      ...oldState.prices,
      items: result || [],
      errors,
      isLoading: false
    }
  }
}
