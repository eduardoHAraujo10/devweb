<template>
    <div class="movie-list">
      <h2>Cadastro de Filmes</h2>
  
      <!-- Inputs para adicionar um filme -->
      <div class="input-fields">
        <input v-model="newMovie.title" placeholder="Título do Filme" />
        <input v-model="newMovie.director" placeholder="Diretor" />
        <input v-model="newMovie.year" type="number" placeholder="Ano de Lançamento" />
        <button @click="addMovie">Adicionar Filme</button>
      </div>
  
      <!-- Mensagem caso a lista esteja vazia -->
      <p v-if="movies.length === 0">Nenhum filme cadastrado.</p>
  
      <!-- Exibição da lista de filmes com botões de deleção -->
      <ul v-else>
        <li v-for="(movie, index) in movies" :key="index">
          <span><strong>{{ movie.title }}</strong> - {{ movie.director }} ({{ movie.year }})</span>
          <button @click="deleteMovie(index)">Remover</button>
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        newMovie: {
          title: '',
          director: '',
          year: ''
        },
        movies: []
      };
    },
    methods: {
      addMovie() {
        // Validação dos campos
        if (!this.newMovie.title || !this.newMovie.director || !this.newMovie.year) {
          alert('Por favor, preencha todos os campos.');
          return;
        }
  
        // Adiciona o filme à lista e limpa os campos
        this.movies.push({ ...this.newMovie });
        this.newMovie.title = '';
        this.newMovie.director = '';
        this.newMovie.year = '';
      },
      deleteMovie(index) {
        // Remove o filme da lista com base no índice
        this.movies.splice(index, 1);
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
  