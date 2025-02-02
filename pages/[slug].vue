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
const slug = route.params.slug;

console.log(`[slug] value is ${slug}`)
onMounted(async () => {
    try {
        page.value = await import(`@/content/pages/${slug}.json`);
    } catch (error) {
        console.error(error);
    }
});
</script>