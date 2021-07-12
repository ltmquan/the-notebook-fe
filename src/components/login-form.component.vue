<template>
  <form class="login-form" @submit="login">
    <TitleText title="Log in" />

    <TextInput
      label="Username"
      :required="true"
      :value="username"
      :message="vUsername"
      @input="username = $event"
    />

    <PasswordInput
      label="Password"
      :required="true"
      :value="password"
      :message="vPassword"
      @input="password = $event"
    />

    <router-link to="/forgot-password">
      <div class="form-text mb-3 fw-bold forgot-password-text">
        Forgot your password?
      </div>
    </router-link>

    <input type="submit" class="btn btn-outline-primary-color" />
  </form>
</template>

<script>
import validationUtil from "../utils/validation.util";
import TitleText from './title-text.component.vue';
import TextInput from "./text-input.component.vue";
import PasswordInput from "./password-input.component.vue";

const LoginForm = {
  components: {
    TitleText,
    TextInput,
    PasswordInput,
  },
  emits: ["login"],
  data() {
    return {
      username: "",
      password: "",
      loggingIn: false,
    };
  },
  computed: {
    vUsername() {
      return this.loggingIn && validationUtil.vUsername(this.username)
        ? validationUtil.vUsername(this.username)
        : "";
    },
    vPassword() {
      return this.loggingIn && validationUtil.vPassword(this.password)
        ? validationUtil.vPassword(this.password)
        : "";
    },
  },
  methods: {
    login(event) {
      event.preventDefault();

      this.loggingIn = true;
      if (!this.vUsername && !this.vPassword) {
        this.$emit("login", {
          username: this.username,
          password: this.password,
        });
      } else {
        console.log("has error");
      }
    },
  },
};

export default LoginForm;
</script>

<style scoped>
.forgot-password-text {
  text-decoration: underline;
}

.forgot-password-text:hover {
  opacity: 0.7;
  cursor: pointer;
}
</style>
