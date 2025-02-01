<template>
    <div>
      <header>
        <h1>Meu App Nuxt 3</h1>
        <nav>
          <ul>
            <li><NuxtLink to="/">Home</NuxtLink></li>  <!-- Link para a página inicial -->
            <li><NuxtLink to="/sobre">Sobre</NuxtLink></li> <!-- Link para outra página -->
          </ul>
        </nav>
      </header>
      <main>
        <NuxtPage />
      </main>
    </div>
  </template>
  
  <script setup>
  </script>
  
  <style scoped>
  header {
    background-color: #333;
    color: white;
    padding: 1rem;
  }
  
  nav ul {
    list-style-type: none;
  }
  
  nav li {
    display: inline;
    margin-right: 10px;
  }
  </style>