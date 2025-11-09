import { createApp } from 'vue'
import { init } from '@tma.js/sdk-vue'
import App from './App.vue'

try {
  init()
  console.log('Telegram WebApp API инициализирован')
} catch (err) {
  console.warn('Приложение запущено вне Telegram. WebApp SDK недоступен.', err)
}

createApp(App).mount('#app')
