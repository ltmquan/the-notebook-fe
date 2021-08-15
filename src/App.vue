<template>
  <LayoutContainer />
</template>

<script>
import LayoutContainer from "./containers/layout/layout.container.vue";

const App = {
  components: {
    LayoutContainer
  }
};

export default App;
</script>

<style>
:root {
  --bs-primary-color: #80ea6e;
  --bs-primary-font-color: #808080;
  --bs-highlight-font-color: #6db33f;
  --bs-danger-color: #f8d7da;
  --bs-success-color: #d4edda;
  --bs-info-color: #e2e3e5;
  --bs-warning-color: #fff3cd;
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
