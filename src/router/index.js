import Vue from 'vue';
import Router from 'vue-router';
import Wedding from '../components/Wedding';
import WeddingGallery from '../components/WeddingGallery';

Vue.use(Router);

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Wedding
        },
        {
            path: '/weddingGallery',
            name: 'gallery',
            component: WeddingGallery
        }
    ]
});
