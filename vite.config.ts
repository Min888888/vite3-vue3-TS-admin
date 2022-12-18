import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
//自动引入 vue\emement-plus\icons
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
//postCss
import postcssPresetEnv from 'postcss-preset-env'; 
 //打包文件视图分析
import { visualizer } from 'rollup-plugin-visualizer';
 //GZIP 压缩
import viteCompression from 'vite-plugin-compression';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    AutoImport({
      imports: ['vue'],
      resolvers: [
        ElementPlusResolver(),
        // Auto import icon components
        // 自动导入图标组件
        IconsResolver({
          prefix: 'Icon',
        })
      ],
      dts: resolve('src/types/', 'auto-imports.d.ts'),
    }),
    Components({
      resolvers: [
        ElementPlusResolver(),
        // Auto register icon components
        // 自动注册图标组件
        IconsResolver({
          enabledCollections: ['ep'],
        }),
      ],
      dts: resolve('src/types/', 'components.d.ts'),
    }),
    Icons({
      autoInstall: true,
    }),
    visualizer({
      emitFile: false,
      // file: "stats.html", //分析图生成的文件名
      open:true //如果存在本地服务端口，将在打包后自动展示
    }),
    viteCompression({
      verbose: true,
      disable: false,
      threshold: 10240,
      algorithm: 'gzip',
      ext: '.gz',
    })
  ],
  css: {
    postcss: {
      plugins: [postcssPresetEnv()]
    }
  },
  base: './',
  resolve: {
    //别名配置，引用src路径下的东西可以通过@如：import Layout from '@/layout/index.vue'
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, 'src')
      },
      {
        find: 'components',
        replacement: resolve(__dirname, 'src/components')
      },
    ]
  },
  build: {
    outDir: 'dist', //输出目录名
    minify: "terser", //压缩方式
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    // chunkSizeWarningLimit: 1500,大文件报警阈值设置,不建议使用
    rollupOptions: {
      output: { //静态资源分类打包
        chunkFileNames: 'static/js/[name]-[hash].js',
        entryFileNames: 'static/js/[name]-[hash].js',
        assetFileNames: 'static/[ext]/name-[hash].[ext]',
        manualChunks(id) { //分包策略
          if(id.includes('pnpm')){
            //进一步分解pnpm,后期cdn可避免打包其他框架
            return id.toString().split('pnpm/')[1].split('/')[0].toString();
          }
          if (id.includes('node_modules')) {
            return id.toString().split('node_modules/')[1].split('/')[0].toString();
          }
        }
      }
    }
  },
  //解决“vite use `--host` to expose”
  server: {
    hmr: true, //热更新
    host: '0.0.0.0',
    // port: 8080,      
    open: true,
    // proxy: {
    //   "/api": {
    //     target: "http://xxxxxx:8080",
    //     changeOrigin: true, // 允许跨域
    //   },
    // },
  },
})
