<template>
  <div class="film-container">
    <h1>Filmes Cadastrados</h1>
    <div v-if="filmes.length">
      <ul>
        <li v-for="(filme, index) in filmes" :key="index" class="film-item">
          <span>
            <strong>{{ filme.nome }}</strong> - {{ filme.classificacao }} - {{ filme.diretor }} - {{ filme.duracao }} min
          </span>
          <div class="actions">
            <button @click="editarFilme(index)">Editar</button>
            <button @click="excluirFilme(index)">Excluir</button>
          </div>
        </li>
      </ul>
    </div>
    <p v-else>Nenhum filme cadastrado.</p>

    <!-- Formulário para Edição -->
    <div v-if="editando">
      <h2>Editar Filme</h2>
      <form @submit.prevent="salvarEdicao">
        <label>Nome do Filme:</label>
        <input type="text" v-model="filmeEditado.nome" required />

        <label>Classificação:</label>
        <select v-model="filmeEditado.classificacao" required>
          <option value="" disabled>Selecione</option>
          <option value="Livre">Livre</option>
          <option value="10">10 anos</option>
          <option value="12">12 anos</option>
          <option value="14">14 anos</option>
          <option value="16">16 anos</option>
          <option value="18">18 anos</option>
        </select>

        <label>Diretor:</label>
        <input type="text" v-model="filmeEditado.diretor" required />

        <label>Duração (min):</label>
        <input type="number" v-model="filmeEditado.duracao" required />

        <button type="submit">Salvar</button>
        <button type="button" @click="cancelarEdicao">Cancelar</button>
      </form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filmes: [],
      editando: false,
      filmeEditado: {
        nome: "",
        classificacao: "",
        diretor: "",
        duracao: null,
      },
      indiceEdicao: null,
    };
  },
  created() {
    this.filmes = JSON.parse(localStorage.getItem("filmes")) || [];
  },
  methods: {
    excluirFilme(index) {
      if (confirm("Tem certeza que deseja excluir este filme?")) {
        this.filmes.splice(index, 1);
        localStorage.setItem("filmes", JSON.stringify(this.filmes));
      }
    },
    editarFilme(index) {
      this.editando = true;
      this.indiceEdicao = index;
      this.filmeEditado = { ...this.filmes[index] }; // Copiar os dados do filme para edição
    },
    salvarEdicao() {
      this.$set(this.filmes, this.indiceEdicao, { ...this.filmeEditado });
      localStorage.setItem("filmes", JSON.stringify(this.filmes));
      this.cancelarEdicao();
    },
    cancelarEdicao() {
      this.editando = false;
      this.indiceEdicao = null;
      this.filmeEditado = {
        nome: "",
        classificacao: "",
        diretor: "",
        duracao: null,
      };
    },
  },
};
</script>

<style scoped>
.film-container {
  max-width: 600px;
  margin: 0 auto;
  padding: 20px;
  font-family: Arial, sans-serif;
}

.film-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  border-bottom: 1px solid #ddd;
}

.actions button {
  margin-left: 5px;
  padding: 5px 10px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 0.9rem;
}

.actions button:hover {
  background-color: #0056b3;
}

form {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}

form label {
  margin-top: 10px;
  font-weight: bold;
}

form input,
form select {
  margin-top: 5px;
  padding: 8px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

form button {
  margin-top: 10px;
  padding: 10px;
  background-color: #28a745;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

form button[type="button"] {
  background-color: #dc3545;
}

form button:hover {
  opacity: 0.9;
}
</style>
