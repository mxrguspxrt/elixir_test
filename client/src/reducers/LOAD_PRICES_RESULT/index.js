export default function({result, errors}, oldState = {}) {
  console.log({result, errors})
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
