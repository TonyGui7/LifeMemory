import { createApp } from 'vue'
import App from './App.vue'
import './assets/styles/global.css'
import router from './router' // 引入路由配置
import store from './store'

const app = createApp(App)

app.use(router) // 使用路由
app.use(store)

app.mount('#app')

//async function download_zip(url: string, timeout = 2000): Promise<any> {
//        return new Promise((resolve, reject) => {
//            const xhr = new XMLHttpRequest();
//            xhr.open('GET', url, true);
//            xhr.responseType = 'arraybuffer';
//
//            xhr.onload = () => {
//                if (xhr.status >= 200 && xhr.status < 300) {
//                    resolve(xhr.response);
//                } else {
//                    resolve(null);
//                }
//            };
//
//            xhr.onerror = () => {
//                resolve(null);
//            };
//
//            xhr.onabort = () => {
//
//                resolve(null);
//            };
//
//            xhr.send();
//        });
//    }
