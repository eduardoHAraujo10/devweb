import { createRouter, createWebHistory } from 'vue-router';
import TelaInicial from '@/components/TelaInicial.vue';
import ListaMovie from '@/components/ListaMovie.vue';
import CadastroMovie from '@/components/CadastroMovie.vue';

const routes = [
  {
    path: '/',
    name: 'Principal',
    component: TelaInicial
  },
  {
    path: '/lista',
    name: 'lista',
    component: ListaMovie
  },
  {
    path: '/cadastro',
    name: 'cadastro',
    component: CadastroMovie
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
});

export default router;
