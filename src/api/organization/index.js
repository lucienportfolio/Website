/*
 * @Author       : hwl
 * @Date         : 2022-07-11 22:12:49
 * @LastEditors  : hwl
 * @LastEditTime : 2022-07-13 20:30:31
 * @Description  :
 */
import { serveRequest } from '../axios.js'

// eslint-disable-next-line import/prefer-default-export
export const getOrganizationInfoApi = (id) =>
  serveRequest.get(`/NFT-API/getOrganizationInfoApi?lang_id=14&id=${id}`)
