<script setup lang="ts">
// Importa la función ref y computed para reactividad
import { computed, ref } from 'vue';
// Importa el componente Counter
import Counter from './Counter.vue';

// Define las props que recibe el componente (en este caso, un string llamado msg)
defineProps<{ msg: string }>();

// Variable reactiva para el contador
const count = ref(1);
// Computed property para determinar si el contador es par o impar
const isEven = computed(() => count.value % 2 === 0);

// Métodos para incrementar y decrementar el contador
const increment = () => count.value++
const decrement = () => count.value--

</script>
<template>
  <!-- Muestra el mensaje recibido por props -->
  <h1>{{ msg }}</h1>
  <div class="card">
    <!-- Uso del componente Counter, pasándole el valor y escuchando los eventos -->
    <Counter :count="count" @increment="increment" @decrement="decrement" />
    <!-- mostramos si es par o impar  -->
    <p v-if="isEven">La cuenta es par</p>
    <p v-else>La cuenta es impar</p>
  </div>
</template>
<style scoped>
/* Estilo para el texto informativo */
.read-the-docs {
  color: #888;
}
</style>
