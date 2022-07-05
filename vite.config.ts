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
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:
            '@import "./src/style/colors.sass";'
      }
    }
  },
  base: './', // 设置打包路径
  server: {
    port: 4000, // 设置服务启动端口号
    open: true, // 设置服务启动时是否自动打开浏览器
    cors: true // 允许跨域

    // 设置代理，根据我们项目实际情况配置
    // proxy: {
    //   '/api': {
    //     target: 'http://xxx.xxx.xxx.xxx:8000',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api/', '/')
    //   }
    // }
  }
})

// rules: [
//   {
//     test: /\.vue$/,
//     loader: 'vue-loader',
//     options: {
//       loaders: {
//         scss: ['style-loader', 'css-loader', 'postcss-loader', 'sass-loader', {
//           loader: 'sass-resources-loader',
//           options: {resources: path.resolve(__dirname, '../static/src/style/common.scss')}
//         }]
//       }
//     }
//   }
// ]
// 公共样式文件 那两个都加进去
// css: {
//   preprocessorOptions: {
//     scss: {
//       additionalData:
//           '@import "./src/assets/scss/globalVariable.scss";@import "./src/assets/scss/common.scss";'
//     }
//   }
// }
