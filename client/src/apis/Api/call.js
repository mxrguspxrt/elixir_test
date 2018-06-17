export default async function({action, params}) {
  try {
    const response = await this.link.post('api/calls', {
      action,
      params
    })
    const {result, errors} = response.data
    return {result, errors}
  } catch (errors) {
    return {errors}
  }
}
