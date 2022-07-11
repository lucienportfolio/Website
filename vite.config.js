/*
 * @Author       : hwl
 * @Date         : 2022-05-11 16:36:23
 * @LastEditors  : hwl
 * @LastEditTime : 2022-07-11 20:46:10
 * @Description  :
 */
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import { resolve } from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': resolve(__dirname, 'src') // 设置 `@` 指向 `src` 目录
    }
  },
  base: './', // 设置打包路径
  server: {
    host: '0.0.0.0',
    port: 82,
    open: true, // 设置服务启动时是否自动打开浏览器
    https: false,
    cors: true, // 允许跨域
    // 设置代理，根据项目实际情况配置
    proxy: {
      '/NFT-API/': {
        target: 'http://api.ambrus.studio/api/v1/',
        // target: 'http://api.nft.com/api/v1/',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/NFT-API/, '')
      }
    }
  },
  productionSourceMap: false
})
