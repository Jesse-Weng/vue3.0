

import type { UserConfig } from 'vite';
const path = require('path')

const viteConfig: UserConfig = {
    /* 端口号 */
    port: 7100,

    /* hostname */
    hostname: 'localhost',

    /* 允许跨域访问 */
    cors: true,

    /* 运行自动打开浏览器 */
    open: false,

    /* 配置别名 */
    alias: {
        '/@/': path.resolve(__dirname, './src'),
        '/@views/': path.resolve(__dirname, './src/views'),
        '/@components/': path.resolve(__dirname, './src/components'),
        '/@utils/': path.resolve(__dirname, './src/utils'),
    },

    /* proxy */
    proxy: {
        '/api': {
            target: 'https://uni937d4b0-6cc760.service.tcloudbase.com',
            changeOrigin: true,
            ws: true,
            rewrite: path => path.replace(/^\/api/, '')
        }
    }
};

export default viteConfig;