import { serveRequest } from '../axios.js'

// eslint-disable-next-line import/prefer-default-export
export const getBlockInfoApi = (key) =>
  serveRequest.get(`/NFT-API/getBlockInfoApi?langId=14&key=${key}`)
