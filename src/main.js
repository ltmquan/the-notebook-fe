import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import store from "./store";
import CKEditor from "@ckeditor/ckeditor5-vue";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from './plugins/font-awesome'

createApp(App)
  .use(router)
  .use(store)
  .use(CKEditor)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount('#app');
