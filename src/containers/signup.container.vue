<template>
  <div class="component-box signup shadow-sm">
    <SignupForm @signup="signup" />
  </div>
</template>

<script>
import authService from '../services/auth.service';
import SignupForm from '../components/signup-form.component.vue';
import responseHandler from '../utils/response.handler';

const Signup = {
  components: {
    SignupForm
  },
  methods: {
    signup(user) {
      this.$store.dispatch('spinner/show');
      authService.register(user)
        .then(
          response => {
            this.$store.dispatch('spinner/hide');
            this.$router.push('/');
            responseHandler.handlePostResponse(this.$store, response);
          }
        )
    }
  }
}

export default Signup;
</script>

<style scoped>
.signup {
  width: 45%;
  padding: 5%;
  margin: 2% auto;
  border-radius: 10px;
}
</style>
