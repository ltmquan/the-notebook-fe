<template>
  <div class="component-box signup shadow-sm">
    <Breadcrumb />
    <TitleText />

    <SignupForm @signup="signup" />
  </div>
</template>

<script>
import authService from '../../services/auth.service';
import { title } from '../../constants/page.constant';
import Breadcrumb from '../../components/breadcrumb/breadcrumb.component.vue';
import TitleText from '../../components/text/title-text.component.vue';
import SignupForm from '../../components/signup/signup-form.component.vue';
import responseHandler from '../../utils/response.handler';

const Signup = {
  components: {
    Breadcrumb,
    TitleText,
    SignupForm
  },
  methods: {
    signup(user) {
      this.$store.dispatch('spinner/show');
      authService.register(user)
        .then(
          response => {
            this.$store.dispatch('spinner/hide');
            responseHandler.handlePostResponse(this.$store, response, (param) => {
              this.$router.push('/');
            });
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
