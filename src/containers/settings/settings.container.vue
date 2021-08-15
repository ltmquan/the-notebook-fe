<template>
  <div class="component-box settings shadow-sm">
    <Breadcrumb />
    <TitleText />

    <SettingsOptions />
  </div>
</template>

<script>
import { title } from '../../constants/page.constant';
import Breadcrumb from '../../components/breadcrumb/breadcrumb.component.vue';
import TitleText from "../../components/text/title-text.component.vue";
import SettingsOptions from '../../components/settings/settings-options.component.vue';

const Settings = {
  components: {
    Breadcrumb,
    TitleText,
    SettingsOptions
  }
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
</style>
