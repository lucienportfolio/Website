/*
 * @Author       : hwl
 * @Date         : 2022-07-11 22:12:50
 * @LastEditors  : hwl
 * @LastEditTime : 2022-07-13 20:30:47
 * @Description  :
 */
import { serveRequest } from '../axios.js'

// eslint-disable-next-line import/prefer-default-export
export const getRangerInfoApi = (id) =>
  serveRequest.get(`/NFT-API/getRangerInfoApi?lang_id=14&id=${id}`)
