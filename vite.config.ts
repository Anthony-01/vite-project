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


// 加载 stylus 文件，可以是多个
// 引入 stylus
// chainWebpack(config)
// const types = ['vue-modules', 'vue', 'normal-modules', 'normal']
// types.forEach(type => importStylus(config.module.rule('stylus').oneOf(type)));
// function importStylus (rule) {
//   rule.use('style-resource')
//       .loader('style-resources-loader')
//       .options({
//         patterns: [
//           path.resolve(__dirname, 'src/assets/stylus/global.styl')
//         ]
//       })
// }


