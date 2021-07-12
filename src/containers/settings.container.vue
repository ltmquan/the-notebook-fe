<template>
  <div class="component-box settings shadow-sm">
    <Breadcrumb :path="[]" current="Settings" />
    <TitleText title="Settings" />

    <router-link to="/settings/profile">
      <div class="mb-3 fw-bold underline-text">View Profile</div>
    </router-link>

    <div class="mb-3 fw-bold text-danger underline-text">Delete account</div>
  </div>
</template>

<script>
import Breadcrumb from '../components/breadcrumb.component.vue';
import TitleText from "../components/title-text.component.vue";

const Settings = {
  components: {
    Breadcrumb,
    TitleText,
  },
};

export default Settings;
</script>

<style scoped>
.settings {
  width: 45%;
  padding: 5%;
  margin: 2% auto;
  border-radius: 10px;
}

.underline-text {
  color: var(--bs-highlight-font-color);
  text-decoration: underline;
}

.underline-text:hover {
  cursor: pointer;
  opacity: 0.7;
}
</style>
