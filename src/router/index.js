import { createRouter, createWebHistory } from 'vue-router'
import Wedding from '../components/Wedding.vue';
import WeddingGallery from '../components/WeddingGallery.vue';
import WeddingImgDetail from '../components/WeddingImgDetail.vue'

const routes = [
  { path: '/', component: Wedding },
  { path: '/weddingAlbum', component: WeddingGallery },
  { path: '/image/:id', name: 'ImageDetail', component: WeddingImgDetail },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
