# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

Learn more about the recommended Project Setup and IDE Support in the [Vue Docs TypeScript Guide](https://vuejs.org/guide/typescript/overview.html#project-setup).

# Cierre del módulo Vue 3 (nivel avanzado)

Ing Johan, con lo que ya dominaste:

✔ Composition API
✔ Props / Emits
✔ Slots
✔ Composables
✔ Pinia

## Resumen de conceptos clave

### Composition API

- Permite organizar y reutilizar lógica reactiva usando funciones (`setup`, `ref`, `reactive`, `computed`, etc).
- Facilita la composición de funcionalidades y la legibilidad del código.

```vue
<script setup>
import { ref, computed } from 'vue';
const count = ref(0);
const double = computed(() => count.value * 2);
</script>
<template>
  <button @click="count++">{{ double }}</button>
</template>
```

### Props / Emits

- `props`: Permiten pasar datos de un componente padre a un hijo.
- `emits`: Permiten que un componente hijo envíe eventos personalizados al padre.

```vue
<!-- Componente Hijo -->
<script setup>
defineProps<{ msg: string }>()
const emit = defineEmits(['saludar'])
</script>
<template>
  <button @click="emit('saludar')">{{ msg }}</button>
</template>

<!-- Componente Padre -->
<Child msg="Hola" @saludar="alert('¡Hola!')" />
```

### Slots

- Permiten inyectar contenido personalizado en componentes hijos desde el padre.
- Útiles para crear componentes reutilizables y flexibles.

```vue
<!-- Componente BaseButton.vue -->
<template>
  <button><slot /></button>
</template>

<!-- Uso -->
<BaseButton>
	Guardar Cambios
</BaseButton>
```

### Composables

- Funciones reutilizables que encapsulan lógica reactiva y pueden ser usadas en varios componentes.
- Ejemplo: useCounter, useAuth, etc.

```ts
// useCounter.ts
import { ref } from 'vue';
export function useCounter() {
  const count = ref(0);
  const increment = () => count.value++;
  return { count, increment };
}
```

```vue
<script setup>
import { useCounter } from './composables/useCounter';
const { count, increment } = useCounter();
</script>
<template>
  <button @click="increment">{{ count }}</button>
</template>
```

### Pinia

- Librería oficial de gestión de estado para Vue 3.
- Permite crear stores reactivas, compartir estado y lógica entre componentes.

```ts
// stores/counter.ts
import { defineStore } from 'pinia';
export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  actions: {
    increment() {
      this.count++;
    },
  },
});
```

```vue
<script setup>
import { useCounterStore } from '../stores/counter';
const counter = useCounterStore();
</script>
<template>
  <button @click="counter.increment">{{ counter.count }}</button>
</template>
```

---

Guía rápida para repaso futuro. ¡Sigue practicando y experimentando!
