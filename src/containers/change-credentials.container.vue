<template>
  <div class="component-box change-password">
    <ChangeCredentialsForm @change-credentials="changeCredentials" />
  </div>
</template>

<script>
import userService from '../services/user.service';
import ChangeCredentialsForm from '../components/change-credentials-form.component.vue';

const ChangeCredentials = {
  components: {
    ChangeCredentialsForm
  },
  methods: {
    changeCredentials(request) {
      this.$store.dispatch('spinner/show');
      userService.changeCredentials(request).then(
        () => {
          this.$store.dispatch('spinner/hide');
          this.$store.dispatch('auth/updateState');
          console.log('change success');
          this.$store.dispatch('modal/close');
        }
      )
    }
  }
}

export default ChangeCredentials
</script>
