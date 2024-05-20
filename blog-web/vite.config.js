import { defineConfig, loadEnv } from "vite";
import compression from 'vite-plugin-compression';
import vue from "@vitejs/plugin-vue";
import { svgBuilder } from "./src/plugins/svgBuilder";
import { resolve } from "path";
import Components from "unplugin-vue-components/vite"; // 按需加载自定义组件
import { ElementPlusResolver } from "unplugin-vue-components/resolvers";
import AutoImport from "unplugin-auto-import/vite";

export default defineConfig(({ command, mode }) => {
  //检查process.cwd()路径下.env.development.local、.env.development、.env.local、.env这四个环境文件
  const env = loadEnv(mode, process.cwd());
  //返回vite配置
  return {
    publicPath: "/",

    server: {
      // 允许IP访问
      host: "0.0.0.0",
      // 应用端口 (默认:3000)
      port: Number(env.VITE_APP_PORT),
      // 运行是否自动打开浏览器
      open: false,
      proxy: {
        /** 代理前缀为 /dev-api 的请求  */
        [env.VITE_APP_BASE_API]: {
          changeOrigin: true,
          // 接口地址
          target: env.VITE_APP_API_URL,
          rewrite: (path) =>
            path.replace(new RegExp("^" + env.VITE_APP_BASE_API), ""),
        },
      },
    },
    plugins: [
      vue(),
      svgBuilder("./src/icons/svg/"),
      // 按需引入
      Components({
        deep: true, // 搜索子目录
        dirs: ["src/components"], // 按需加载的文件夹
        resolvers: [ElementPlusResolver()], // ElementPlus按需加载
      }),
      AutoImport({
        imports: ["vue", "vue-router", "pinia"], //自动引入vue的ref、toRefs、onmounted等，无需在页面中再次引入
        resolvers: [ElementPlusResolver()],
      }),
      compression({
        verbose: true, // 是否在控制台输出压缩结果
        disable: false, // 是否禁用 gzip 压缩
        threshold: 10240, // 压缩文件的大小阈值（以字节为单位）
        algorithm: 'gzip', // 压缩算法
        ext: '.gz', // 压缩文件的后缀名
        deleteOriginFile: false, // 是否删除原文件
        // 需要压缩的文件类型
        filter: (filename) => {
          return /(\.js$|\.css$|\.html$|\.json$)/.test(filename);
        },
      }),
    ],
    resolve: {
      //路径别名
      alias: {
        "@": resolve(__dirname, "./src"),
      },
    },
  };
});
