<template>
    <div class="movie-list">
      <h2>Cadastro de Filmes</h2>
  
      <div class="input-fields">
        <input v-model="novoFilme.titulo" placeholder="Título do Filme" />
        <input v-model="novoFilme.diretor" placeholder="Diretor" />
        <input v-model="novoFilme.ano" type="data" placeholder="Ano de Lançamento" />
        <button @click="addMovie">Adicionar Filme</button>
      </div>
  
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        novoFilme: {
          titulo: '',
          diretor: '',
          ano: ''
        },
        filmes: []
      };
    },
    methods: {
      addMovie() {
        if (!this.novoFilme.titulo || !this.novoFilme.diretor || !this.novoFilme.ano) {
          alert('Por favor, preencha todos os campos.');
          return;
        }
  
        this.filmes.push({ ...this.novoFilme });
        this.novoFilme.titulo = '';
        this.novoFilme.diretor = '';
        this.novoFilme.ano = '';
      },
      deleteMovie(index) {
        this.filmes.splice(index, 1);
      }
    }
  };
  </script>
  
  <style scoped>
  .movie-list {
    max-width: 400px;
    margin: auto;
    padding: 20px;
    border: 1px solid #ddd;
    border-radius: 8px;
    text-align: center;
  }
  
  .input-fields {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }
  
  input {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 4px;
  }
  
  button {
    padding: 8px;
    border: none;
    background-color: #4CAF50;
    color: white;
    cursor: pointer;
    border-radius: 4px;
    margin-top: 8px;
  }
  
  button:hover {
    background-color: #45a049;
  }
  
  ul {
    list-style: none;
    padding: 0;
  }
  
  li {
    margin: 10px 0;
    display: flex;
    justify-content: space-between;
  }
  
  p {
    color: #888;
  }
  </style>
  