/*
 * @Author       : hwl
 * @Date         : 2022-05-14 18:06:33
 * @LastEditors  : hwl
 * @LastEditTime : 2022-07-24 14:12:46
 * @Description  :
 */
import $ from 'jquery'

export const isMobile = () => {
  if (
    navigator.userAgent.match(
      /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i
    )
  ) {
    return true // 手机端
  }
  return false // alert('PC端')
}

export const isPad = () => {}

export const onCheckMaterial = (pcUrl, mobUrl) => {
  const data = {
    material: { type: '', url: '', poster: '' },
    material_pc: { type: '', url: '', poster: '' },
    material_mob: { type: '', url: '', poster: '' }
  }
  data.material_pc.type = pcUrl && pcUrl.split('|')[0] ? pcUrl.split('|')[0] : ''
  data.material_pc.url = pcUrl && pcUrl.split('|')[1] ? pcUrl.split('|')[1] : pcUrl
  data.material_mob.type = mobUrl && mobUrl.split('|')[0] ? mobUrl.split('|')[0] : ''
  data.material_mob.url = mobUrl && mobUrl.split('|')[1] ? mobUrl.split('|')[1] : mobUrl
  data.material = $(window).width() <= 960 && mobUrl ? data.material_mob : data.material_pc
  return data
}
