import { ref, computed } from 'vue'

export function useCounter(initial = 0) {
  const count = ref(initial)
  const increment = () => count.value++
  const decrement = () => count.value--

  const isEven = computed(() => count.value % 2 === 0)

  return {
    count,
    increment,
    decrement,
    isEven
  }
}
