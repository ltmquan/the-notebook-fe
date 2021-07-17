<template>
  <div v-if="showing" class="notification shadow-sm">
    <div
      class="toast showing align-items-center"
      role="alert"
    >
      <div class="d-flex">
        <div class="toast-body">{{ text }}</div>
        <button
          type="button"
          class="btn-close me-2 m-auto"
          @click="hide"
        ></button>
      </div>
    </div>
  </div>
</template>

<script>
const Notification = {
  computed: {
    showing() {
      return this.$store.getters['notification/showing'];
    },
    text() {
      return this.$store.getters['notification/text'];
    }
  },
  methods: {
    hide() {
      this.$store.dispatch('notification/hide');
    }
  }
};

export default Notification;
</script>

<style scoped>
.notification {
  position: fixed;
  top: 5%;
  left: 75%;
  width: 20%;
  z-index: 1000;
}

.toast {
  font-size: 1rem !important;
}
</style>