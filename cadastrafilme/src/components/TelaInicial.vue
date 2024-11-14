<template>
    <div class="menu-container flex h-screen">
      <Sidebar />
      <div class="content flex flex-col w-full">
        <Navbar />
        <div class="main-content flex-1 p-4 bg-gray-100">
          <!-- Conteúdo principal do menu aqui -->
          <h2>Bem-vindo ao Menu</h2>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import Navbar from "@/components/common/Navbar.vue";
  import Sidebar from "@/components/common/Sidebar.vue";
  
  export default {
    name: "Menu",
    components: {
      Navbar,
      Sidebar,
    },
  };
  </script>
  
  <style scoped>
  .menu-container {
    display: flex;
  }
  .content {
    flex: 1;
    display: flex;
    flex-direction: column;
  }
  .main-content {
    background-color: #f7f7f7;
    padding: 16px;
  }
  </style>
  