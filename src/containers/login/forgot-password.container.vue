<template>
  <div class="component-box forgot-password shadow-sm">
    <Breadcrumb :current="title" />
    <TitleText :title="title" />

    <h3>Under Construction!</h3>
  </div>
</template>

<script>
import TitleText from '../../components/text/title-text.component.vue';
import Breadcrumb from '../../components/breadcrumb/breadcrumb.component.vue';
import { title } from '../../constants/page.constant';

const ForgotPassword = {
  components: {
    TitleText,
    Breadcrumb
  },
  computed: {
    title() {
      return title.FORGOT_PASSWORD;
    }
  }
}

export default ForgotPassword;
</script>

<style scoped>
.forgot-password {
  width: 45%;
  padding: 5%;
  margin: 2% auto;
  border-radius: 10px;
}
</style>