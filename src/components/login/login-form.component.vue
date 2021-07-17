<template>
  <form class="login-form" @submit="login">
    <TextInput
      label="Username"
      :autofocus="true"
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

  <p class="fst-italic mt-2 form-text">
    If you haven't signed up, click here
    <router-link to="/signup">Sign Up</router-link>
  </p>
</template>

<script>
import validationUtil from "../../utils/validation.util";
import TextInput from "../form-input/text-input.component.vue";
import PasswordInput from "../form-input/password-input.component.vue";

const LoginForm = {
  components: {
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
