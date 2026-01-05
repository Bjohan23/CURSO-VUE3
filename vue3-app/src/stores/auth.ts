// src/stores/auth.ts
import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useAuthStore = defineStore('auth', () => {
  const user = ref(null)
  const token = ref<string | null>(null)

  // Computed property para verificar si el usuario está autenticado 
  const isAuthenticated = computed(() => !!token.value)

  function login(userData: any, authToken: string) {
    user.value = userData
    token.value = authToken
  }

  function logout() {
    user.value = null
    token.value = null
  }

  return {
    user,
    token,
    isAuthenticated,
    login,
    logout
  }
})
