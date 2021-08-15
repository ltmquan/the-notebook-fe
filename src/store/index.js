import { createStore } from "vuex";
import { auth } from "./auth.module";
import { modal } from "./modal.module";
import { spinner } from "./spinner.module";
import { notification } from "./notification.module";
import { note } from "./note.module";
import { notebook } from "./notebook.module";

const store = createStore({
  modules: {
    auth,
    modal,
    spinner,
    notification,
    note, 
    notebook
  },
});

export default store;