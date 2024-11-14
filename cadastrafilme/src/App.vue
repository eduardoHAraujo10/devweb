<template>
  <div id="app">
    <CadastroMovie />
    <ListaMovie />
    <TelaInicial />
  </div>
</template>

<script>
import CadastroMovie from './components/CadastroMovie.vue';
import ListaMovie from './components/ListaMovie.vue';
import TelaInicial from './components/TelaInicial.vue';

export default {
  name: 'App',
  components: {
    CadastroMovie,
    ListaMovie,
    TelaInicial
  }
};
</script>
