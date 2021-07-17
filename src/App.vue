<template>
  <div class="container-box">
    <div class="row navbar-area m-0">
      <div class="col-12 p-0">
        <Navbar />
      </div>
    </div>
    <div class="row justify-content-center content-area m-0">
      <div class="col-9 my-3 p-0">
        <router-view></router-view>
      </div>
    </div>
  </div>
  <Modal />
  <Spinner />
  <Notification />
</template>

<script>
import Navbar from "./components/navbar/navbar.component.vue";
import Modal from "./containers/modal/modal.container.vue";
import Spinner from './components/spinner/spinner.component.vue';
import Notification from './components/notification/notification.component.vue';

const App = {
  components: {
    Navbar,
    Modal,
    Spinner,
    Notification
  },
};

export default App;
</script>

<style>
:root {
  --bs-primary-color: #80ea6e;
  --bs-primary-font-color: #808080;
  --bs-highlight-font-color: #6db33f;
}

html,
body {
  width: 100%;
  height: 100%;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--bs-primary-font-color);
  width: 100%;
  height: 100%;
}

.ck {
  border: none !important;
}

.ck-focused {
  border: none !important;
  box-shadow: none !important;
  border: none !important;
}

.container-box {
  width: 100%;
  height: 100%;
}

.bg-color-primary {
  background-color: var(--bs-primary-color);
}

.btn-outline-primary-color {
  color: var(--bs-highlight-font-color) !important;
  border-color: var(--bs-primary-color) !important;
}

.btn-outline-primary-color:hover {
  color: #fff !important;
  background-color: var(--bs-primary-color);
}

.highlight {
  color: var(--bs-highlight-font-color) !important;
}

.break-word {
  word-wrap: break-word;
}
</style>

<style scoped>
.navbar-area {
  height: 10%;
}

.content-area {
  height: 90%;
}
</style>
