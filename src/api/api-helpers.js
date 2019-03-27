/* Dev */
// eslint-disable-next-line
import { pink } from '../logger'

const rejectErrors = (res) => {
  const { status } = res
  if (status >= 200 && status < 300) {
    return res
  }
  return Promise.reject({
    statusText: res.statusText,
    status: res.status,
    error: res.json()
  })
}

export const fetchJson = (url, options = {}) => {
  pink('(3) api-helpers.fetchJson()')
  let headers = {
    ...options.headers,
    'Accept': 'application/json',
    'Content-Type': 'application/json',
  }
  return (
    fetch(url, {
      ...options,
      headers,
    }).then(res => {
      const { status } = res
      if (status >= 200 && status < 300) {
        return res.json()
      } else {
        pink('(4) api-helpers.fetchJson: bad response', res)
        return res
      }
    }).catch(error => {
      pink('(4) api-helpers.fetchJson: catch', error)
    })

  )
}


export default { fetchJson }

/*
.then((res) => {
        const oJson = res.json()
        console.log('oJson', oJson)
        return oJson
      })

      */