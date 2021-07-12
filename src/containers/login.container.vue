<template>
  <div class="component-box login shadow-sm">
    <LoginForm @login="login"/>
  </div>
</template>

<script>
import LoginForm from '../components/login-form.component.vue';

const Login = {
  components: {
    LoginForm
  },
  data() {
    return {
      
    }
  },
  methods: {
    login(user) {
      this.$store.dispatch('spinner/show');
      this.$store.dispatch('auth/login', user)
        .then(
          () => {
            this.$store.dispatch('spinner/hide');
            this.$router.push('/');
            console.log('login success');
          }
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
