import { createApp } from 'vue';
import App from './App.vue';
import { createPinia } from 'pinia';
import { createVuetify } from 'vuetify';
import 'vuetify/styles';
import router from './router/index'; // تأكد من استيراد الراوتر

const app = createApp(App);

app.use(createPinia());
app.use(router); // استخدم Vue Router
app.use(createVuetify());

app.mount('#app');

