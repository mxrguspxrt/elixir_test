export default function(params, oldState = {}) {
  return {
    ...oldState,
    form: {
      ...oldState.form,
      ...params
    }
  }
}
