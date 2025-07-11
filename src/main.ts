import './assets/main.scss';

import { createApp } from 'vue';
import App from './App.vue';
import { Icon } from '@iconify/vue';

const app = createApp(App);
app.component('IconifyIcon', Icon);
app.mount('#app');
