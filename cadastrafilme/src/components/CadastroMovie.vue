<template>
  <div class="form-container">
    <h1>Cadastro de Filme</h1>
    <form @submit.prevent="cadastrarFilme">
      <label for="nome">Nome do Filme:</label>
      <input type="text" id="nome" v-model="filme.nome" required />

      <label for="classificacao">Classificação:</label>
      <select id="classificacao" v-model="filme.classificacao" required>
        <option value="" disabled>Selecione</option>
        <option value="Livre">Livre</option>
        <option value="10">10 anos</option>
        <option value="12">12 anos</option>
        <option value="14">14 anos</option>
        <option value="16">16 anos</option>
        <option value="18">18 anos</option>
      </select>

      <label for="genero">Gênero do Filme:</label>
      <input type="text" id="genero" v-model="filme.genero" required />

      <label for="produtora">Produtora:</label>
      <input type="text" id="produtora" v-model="filme.produtora" required />

      <label for="duracao">Duração (min):</label>
      <input type="number" id="duracao" v-model="filme.duracao" required />

      <button type="submit">Cadastrar</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filme: {
        nome: "",
        classificacao: "",
        genero: "",
        produtora: "",
        duracao: null,
      },
    };
  },
  methods: {
    cadastrarFilme() {
      const filmes = JSON.parse(localStorage.getItem("filmes")) || [];
      filmes.push(this.filme);
      localStorage.setItem("filmes", JSON.stringify(filmes));
      alert("Filme cadastrado com sucesso!");
      this.filme = {
        nome: "",
        classificacao: "",
        genero: "",
        produtora: "",
        duracao: null,
      };
    },
  },
};
</script>

<style scoped>
.form-container {
  max-width: 500px;
  margin: 0 auto;
  padding: 20px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  font-family: Arial, sans-serif;
}

h1 {
  text-align: center;
  color: #333;
  margin-bottom: 20px;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-bottom: 8px;
  font-weight: bold;
  color: #555;
}

input,
select {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  font-size: 1rem;
  width: 100%;
}

input:focus,
select:focus {
  border-color: #007bff;
  outline: none;
  box-shadow: 0 0 5px rgba(0, 123, 255, 0.5);
}

button {
  background: #007bff;
  color: #fff;
  padding: 10px;
  border: none;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: background 0.3s ease;
}

button:hover {
  background: #0056b3;
}
</style>
