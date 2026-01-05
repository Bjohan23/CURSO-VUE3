<script setup lang="ts">

defineProps<{
  count: number
}>()

const emit = defineEmits<{
  (e: 'increment'): void
  (e: 'decrement'): void
}>()
</script>

<template>
  <div>
    <button @click="emit('increment')">+</button>
    <span>Cuenta: {{ count }}</span>
    <button @click="emit('decrement')">-</button>
  </div>
</template>
