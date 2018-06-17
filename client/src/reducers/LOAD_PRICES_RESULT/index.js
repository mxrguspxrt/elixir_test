export default function({result, errors}, oldState = {}) {
  return {
    ...oldState,
    prices: {
      result,
      errors
    }
  }
}
