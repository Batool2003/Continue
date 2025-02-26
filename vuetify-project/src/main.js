import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import vuetify from './plugins/vuetify';  

// إنشاء التطبيق
const app = createApp(App);

// إنشاء وإضافة Pinia
const pinia = createPinia();
app.use(pinia);

// إضافة Vue Router و Vuetify
app.use(router);
app.use(vuetify);

// تثبيت التطبيق
app.mount('#app');
