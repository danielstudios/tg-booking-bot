import { createApp } from 'vue'
import { init } from './init'
import App from './App.vue'

import './assets/styles/global.css'

try {
  init()
  console.log('Telegram WebApp API инициализирован')
} catch (err) {
  console.warn('Приложение запущено вне Telegram. WebApp SDK недоступен.', err)
}

createApp(App).mount('#app')
