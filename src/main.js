// src/main.js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // เพิ่ม Router

import "./assets/style.css"; // สามารถเพิ่ม CSS styles ที่ต้องการ

const app = createApp(App);
app.use(router); // ใช้งาน Router
app.mount("#app");
