<template>
  <div class="component-box forgot-password shadow-sm">
    <Breadcrumb :current="title" />
    <TitleText :title="title" />

    <ForgotPasswordForm :sentEmail="true" @send-email="sendEmail" @verify="verify" />
  </div>
</template>

<script>
import authService from '../../services/auth.service';
import TitleText from '../../components/text/title-text.component.vue';
import Breadcrumb from '../../components/breadcrumb/breadcrumb.component.vue';
import ForgotPasswordForm from '../../components/login/forgot-password-form.component.vue';
import { title } from '../../constants/page.constant';
import responseHandler from '../../utils/response.handler';

const ForgotPassword = {
  components: {
    TitleText,
    Breadcrumb,
    ForgotPasswordForm
  },
  data() {
    return {
      sentEmail: false,
    }
  },
  computed: {
    title() {
      return title.FORGOT_PASSWORD;
    }
  },
  methods: {
    sendEmail(email) {
      this.$store.dispatch('spinner/show');
      authService.sendResetPasswordEmail(email).then(
        response => {
          this.$store.dispatch('spinner/hide');
          responseHandler.handlePostResponse(this.$store, response, (param) => {
            this.sentEmail = true;
          });
        }
      )
    },
    verify(request) {
      this.$store.dispatch('spinner/show');
      authService.resetPasswordWithOtp(request).then(
        response => {
          this.$store.dispatch('spinner/hide');
          responseHandler.handlePostResponse(this.$store, response, (param) => {
            this.$router.push('/login');
          })
        }
      )
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