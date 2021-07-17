<template>
  <router-link to="/settings/profile">
    <div class="mb-3 fw-bold underline-text">View Profile</div>
  </router-link>

  <div class="mb-3 fw-bold text-danger underline-text" @click="deleteAccount()">Delete account</div>
</template>

<script>
import DeleteAccount from '../../containers/modal/delete-account.container.vue';

const SettingsOptions = {
  methods: {
    deleteAccount() {
      this.$store.dispatch("modal/open", {
        component: DeleteAccount,
        title: "Confirm delete account",
        props: {},
        callback: () => {},
      });
    }
  }
}

export default SettingsOptions;
</script>

<style scoped>
.underline-text {
  color: var(--bs-highlight-font-color);
  text-decoration: underline;
}

.underline-text:hover {
  cursor: pointer;
  opacity: 0.7;
}
</style>