<template>
  <div class="form-container">
    <form @submit.prevent="submitForm">
      <h2>Cadastro de Filme</h2>

      <label for="nome">Nome do Filme:</label>
      <input type="text" v-model="filme.nome" id="nome" required />

      <label for="classificacao">Classificação:</label>
      <select v-model="filme.classificacao" id="classificacao" required>
        <option value="" disabled>Selecione a classificação</option>
        <option value="L">Livre</option>
        <option value="10">10 anos</option>
        <option value="12">12 anos</option>
        <option value="14">14 anos</option>
        <option value="16">16 anos</option>
        <option value="18">18 anos</option>
      </select>

      <label for="diretor">Diretor:</label>
      <input type="text" v-model="filme.diretor" id="diretor" required />

      <label for="duracao">Tempo de Duração (min):</label>
      <input type="number" v-model="filme.duracao" id="duracao" min="1" required />

      <button type="submit">Cadastrar Filme</button>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      filme: {
        nome: '',
        classificacao: '',
        diretor: '',
        duracao: null
      }
    };
  },
  methods: {
    submitForm() {
      // Processamento dos dados ou envio para um servidor
      console.log("Filme cadastrado:", this.filme);

      // Limpa o formulário após o envio
      this.filme = {
        nome: '',
        classificacao: '',
        diretor: '',
        duracao: null
      };
    }
  }
};
</script>

<style scoped>
.form-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f2f2f2;
}

form {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  max-width: 400px;
  width: 100%;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input,
select {
  width: 100%;
  padding: 8px;
  margin-bottom: 15px;
  border: 1px solid #ccc;
  border-radius: 4px;
}

button {
  width: 100%;
  padding: 10px;
  background-color: #4CAF50;
  color: #fff;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  cursor: pointer;
}

button:hover {
  background-color: #45a049;
}
</style>
