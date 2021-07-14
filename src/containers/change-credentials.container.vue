<template>
  <div class="component-box change-password">
    <ChangeCredentialsForm @change-credentials="changeCredentials" />
  </div>
</template>

<script>
import userService from '../services/user.service';
import ChangeCredentialsForm from '../components/change-credentials-form.component.vue';
import responseHandler from '../utils/response.handler';

const ChangeCredentials = {
  components: {
    ChangeCredentialsForm
  },
  methods: {
    changeCredentials(request) {
      this.$store.dispatch('spinner/show');
      userService.changeCredentials(request).then(
        response => {
          this.$store.dispatch('spinner/hide');
          this.$store.dispatch('auth/updateState');
          this.$store.dispatch('modal/close');
          responseHandler.handlePutResponse(this.$store, response);
        }
      )
    }
  }
}

export default ChangeCredentials
</script>
