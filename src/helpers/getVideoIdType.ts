const NUMBER_REGEX = /^[0-9]+$/
const URL_REGEX =
  /^(https?|ftp|ftps):\/\/(([a-zA-Z0-9][a-zA-Z0-9-]*[a-zA-Z0-9]\.)+[a-zA-Z]{2,}|((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9])\.){3}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[1-9][0-9]|[0-9]))(\/[^\s]*)?$/i

export const getVideoIdType = (videoIdentification: string) => {
  if (
    typeof videoIdentification !== 'string' &&
    typeof videoIdentification !== 'number'
  ) {
    throw new Error('Video identification must be a string or number')
  }

  if (URL_REGEX.test(videoIdentification)) {
    return 'url'
  }

  if (NUMBER_REGEX.test(videoIdentification)) {
    return 'id'
  }

  throw new Error('Video identification must be a URL or a numeric ID')
}
