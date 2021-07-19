<template>
  <div v-if="showing" class="notification shadow-sm">
    <div
      :class="'toast showing align-items-center ' + type.toLowerCase()"
      role="alert"
    >
      <div class="d-flex">
        <div class="toast-body">
          <font-awesome-icon v-if="isDanger" icon="times-circle" />
          <font-awesome-icon v-else-if="isSuccess" icon="check-circle" />
          <font-awesome-icon v-else-if="isInfo" icon="exclamation-circle" />
          <font-awesome-icon v-else-if="isWarning" icon="exclamation-triangle" />
          {{ text }}
        </div>
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
import { type } from '../../constants/notification.constant';

const Notification = {
  computed: {
    showing() {
      if (this.$store.getters['notification/showing']) {
        setTimeout(() => {
          this.hide();
        }, 3000);
      }
      return this.$store.getters['notification/showing'];
    },
    text() {
      return this.$store.getters['notification/text'];
    },
    type() {
      return this.$store.getters['notification/type'];
    },
    isDanger() {
      return this.type === type.ERROR; 
    },
    isSuccess() {
      return this.type === type.SUCCESS; 
    },
    isInfo() {
      return this.type === type.INFO; 
    },
    isWarning() {
      return this.type === type.WARNING; 
    }
  },
  methods: {
    hide() {
      this.$store.dispatch('notification/hide');
    }
  },
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
  color: #fff;
}

.error {
  background-color: var(--bs-danger-color);
  color: #721c24;
}

.success {
  background-color: var(--bs-success-color);
  color: #155724;
}

.info {
  background-color: var(--bs-info-color);
  color: #383d41;
}

.warning {
  background-color: var(--bs-warning-color);
  color: #856404;
}
</style>