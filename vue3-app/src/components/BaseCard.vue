<template>
  <div class="card">
    <slot />
    <p>No se envió contenido</p>
  </div>
</template>

<style scoped>
.card {
  padding: 1rem;
  border: 1px solid #ddd;
  border-radius: 8px;
}
</style>
