import { createApp } from 'vue';
import { createRouter, createWebHashHistory } from 'vue-router';
import App from './App.vue';

import Vaccine from './pages/Vaccine.vue';

const app = createApp(App);

const routes = [
  {
    path: '',
    redirect: '/vaccine'
  },
  {
    path: '/vaccine',
    component: Vaccine
  }
];

const router = createRouter({
  history: createWebHashHistory(),
  routes
});

app.use(router);

app.mount('#app');
