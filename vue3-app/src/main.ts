// Importa la función para crear la app de Vue
import { createApp } from 'vue';
import { createPinia } from 'pinia'

// Importa los estilos globales de la aplicación
import './style.css';

// Importa el componente raíz de la aplicación
import App from './App.vue';

// Crea la instancia de la aplicación Vue y la monta en el elemento con id="app" en index.html
createApp(App)
  .use(createPinia())
  .mount('#app')
