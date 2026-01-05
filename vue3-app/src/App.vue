<script setup lang="ts">
// Importa el componente HelloWorld para usarlo en el template
import HelloWorld from './components/HelloWorld.vue';
import BaseCard from './components/BaseCard.vue';
</script>

<template>
  <!-- Contenedor principal de la app -->
  <div>
    <!-- Enlace y logo de Vite -->
    <a href="https://vite.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <!-- Enlace y logo de Vue -->
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <!-- Uso del componente HelloWorld y paso de props -->
  <HelloWorld msg="Vite + Vue" />
  <BaseCard>
</BaseCard>

</template>

<style scoped>
/* Estilos para los logos de Vite y Vue */
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
