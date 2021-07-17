<template>
  <div class="component-box login shadow-sm">
    <Breadcrumb :current="title" />
    <TitleText :title="title" />

    <LoginForm @login="login"/>
  </div>
</template>

<script>
import TitleText from '../../components/text/title-text.component.vue';
import Breadcrumb from '../../components/breadcrumb/breadcrumb.component.vue';
import LoginForm from '../../components/login/login-form.component.vue';
import responseHandler from '../../utils/response.handler';
import { title } from '../../constants/page.constant';

const Login = {
  components: {
    TitleText,
    Breadcrumb,
    LoginForm
  },
  computed: {
    title() {
      return title.LOGIN;
    }
  },
  methods: {
    login(user) {
      this.$store.dispatch('spinner/show');
      this.$store.dispatch('auth/login', user)
        .then(
          response => {
            this.$store.dispatch('spinner/hide');
            responseHandler.handlePostResponse(this.$store, response, (param) => {
              this.$router.push('/');
            });
          },
        )
    }
  },
};

export default Login;
</script>

<style scoped>
.login {
  width: 45%;
  padding: 5%;
  margin: 2% auto;
  border-radius: 10px;
}
</style>
