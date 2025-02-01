<template>
    <div>
      <h1>{{ page.title }}</h1>
      <p>{{ page.content }}</p>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted } from 'vue';
  const page = ref({ title: '', content: '' });
  
  const route = useRoute();
  const slug = route.params.slug; // Obtenha o slug da URL
  
  // Carregar o conteúdo com base no slug
  onMounted(async () => {
    try {
      const response = await fetch(`/content/pages/${slug}.json`);
      if (response.ok) {
        page.value = await response.json();
      } else {
        throw new Error('Página não encontrada');
      }
    } catch (error) {
      console.error(error);
    }
  });
  </script>