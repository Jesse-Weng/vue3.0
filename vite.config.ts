
import type { UserConfig } from 'vite';

const viteConfig: UserConfig = {
    /* 端口号 */
    port: 3555,

    /* hostname */
    hostname: 'localhost',

    /* 运行自动打开浏览器 */
    open: false,

    /* proxy */
    proxy: {
        '/api': {
            target: 'https://uni937d4b0-6cc760.service.tcloudbase.com',
            changeOrigin: true,
            rewrite: path => path.replace(/^\/api/, '')
        }
    }

};

export default viteConfig;