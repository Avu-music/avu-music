import './styles/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import App from './App.vue'
import Home from './pages/Home.vue'

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),

  routes: [
    {
      path: '',
      component: Home
    },
    {
      path: '/imprint',
      name: 'imprint',
      component: () => import('./pages/Imprint.vue')
    }
  ]
})

app.use(router)
app.mount('#app')
