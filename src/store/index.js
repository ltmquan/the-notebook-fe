import { createStore } from "vuex";
import { auth } from "./auth.module";
import { modal } from "./modal.module";
import { spinner } from "./spinner.module";
import { notification } from "./notification.module";

const store = createStore({
  modules: {
    auth,
    modal,
    spinner,
    notification
  },
});

export default store;