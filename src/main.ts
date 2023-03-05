import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { NhostClient } from '@nhost/vue'

const nhost = new NhostClient({
  subdomain: import.meta.env.VITE_NHOST_SUBDOMAIN,
  region: import.meta.env.VITE_NHOST_REGION,
})

createApp(App).use(nhost).mount('#app')
