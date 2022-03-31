import { createApp, VueElement } from 'vue'
import App from './App.vue'
import bootstrap from './bootstrap';
import bootstrapjs from './bootstrap';

createApp(App).mount('#app');

Vue.use(bootstrap);
Vue.use(bootstrapjs);