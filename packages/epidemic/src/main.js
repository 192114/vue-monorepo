import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

import Vaccine from './pages/Vaccine.vue';
import Domestic from './pages/Domestic.vue';
import World from './pages/World.vue';
import Yuge from './pages/Yuge.vue';

import './assets/css/global.css';
import './assets/css/common.css';

const app = createApp(App);

const routes = [
  {
    path: '',
    redirect: '/vaccine'
  },
  {
    path: '/vaccine',
    component: Vaccine
  },
  {
    path: '/domestic',
    component: Domestic
  },
  {
    path: '/world',
    component: World
  },
  {
    path: '/yuge',
    component: Yuge
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

app.use(router);

app.mount('#app');
