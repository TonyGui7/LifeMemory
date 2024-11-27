import { createRouter, createWebHistory } from 'vue-router'
import Wedding from '../components/Wedding.vue';
import WeddingGallery from '../components/WeddingGallery.vue';

const routes = [
  { path: '/', component: Wedding },
  { path: '/weddingAlbum', component: WeddingGallery }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
