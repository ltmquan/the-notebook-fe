<template>
  <div v-if="active" class="fullscreen-spinner">
    <div class="spinner spinner-border" role="status"></div>
  </div>
</template>

<script>
const Spinner = {
  computed: {
    active() {
      return this.$store.getters['spinner/active'];
    }
  }
}

export default Spinner;
</script>

<style scoped>
.fullscreen-spinner {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  z-index: 100000;
  background: rgba(250, 250, 250, 0.8);
  display: flex;
  justify-content: center;
  align-items: center;
}

.spinner {
  width: 100px;
  height: 100px;
  border-width: 0.5rem;
}
</style>
