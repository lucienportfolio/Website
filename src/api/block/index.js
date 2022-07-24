import { serveRequest } from '../axios.js'

// eslint-disable-next-line import/prefer-default-export
export const getBlockInfoApi = (key, id = '') => {
  if (id === '') {
    return serveRequest.get(`/NFT-API/getBlockInfoApi?lang_id=14&key=${key}`)
  }
  return serveRequest.get(`/NFT-API/getBlockInfoApi?lang_id=14&key=${key}&game_id=${id}`)
}
