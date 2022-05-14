/*
 * @Author       : hwl
 * @Date         : 2022-05-14 18:06:33
 * @LastEditors  : hwl
 * @LastEditTime : 2022-05-14 18:13:34
 * @Description  :
 */
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
