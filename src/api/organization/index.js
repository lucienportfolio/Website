/*
 * @Author       : hwl
 * @Date         : 2022-07-11 22:12:49
 * @LastEditors  : hwl
 * @LastEditTime : 2022-07-11 23:29:06
 * @Description  :
 */
import { serveRequest } from '../axios.js'

// eslint-disable-next-line import/prefer-default-export
export const getOrganizationInfoApi = (id) =>
  serveRequest.get(`/NFT-API/getOrganizationInfoApi/${id}?lang_id=14&id=${id}`)
