<template>
  <form class="login-form" @submit="signup">
    <TextInput
      label="Full name"
      :required="true"
      :autofocus="true"
      :value="name"
      :message="vName"
      @input="name = $event"
    />

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

    <PasswordInput
      label="Confirm password"
      :required="true"
      :value="passwordConfirm"
      :message="vConfirmPassword"
      @input="passwordConfirm = $event"
    />

    <EmailInput
      label="Email"
      :required="true"
      :value="email"
      :message="vEmail"
      @input="email = $event"
    />

    <input type="submit" class="btn btn-outline-primary-color" />
  </form>
</template>

<script>
import validationUtil from "../../utils/validation.util";
import TextInput from "../form-input/text-input.component.vue";
import PasswordInput from "../form-input/password-input.component.vue";
import EmailInput from "../form-input/email-input.component.vue";

const SignupForm = {
  components: {
    TextInput,
    PasswordInput,
    EmailInput,
  },
  emits: ["signup"],
  data() {
    return {
      name: "",
      username: "",
      password: "",
      passwordConfirm: "",
      email: "",
      signingup: false,
    };
  },
  computed: {
    vName() {
      return this.signingup && validationUtil.vName(this.name)
        ? validationUtil.vName(this.name)
        : "";
    },
    vUsername() {
      return this.signingup && validationUtil.vUsername(this.username)
        ? validationUtil.vUsername(this.username)
        : "";
    },
    vPassword() {
      return this.signingup && validationUtil.vPassword(this.password)
        ? validationUtil.vPassword(this.password)
        : "";
    },
    vConfirmPassword() {
      return this.signingup &&
        validationUtil.vConfirmPassword(this.passwordConfirm, this.password)
        ? validationUtil.vConfirmPassword(this.passwordConfirm, this.password)
        : "";
    },
    vEmail() {
      return this.signingup && validationUtil.vEmail(this.email)
        ? validationUtil.vEmail(this.email)
        : "";
    },
  },
  methods: {
    signup(event) {
      event.preventDefault();

      this.signingup = true;
      if (
        !this.vName &&
        !this.vUsername &&
        !this.vPassword &&
        !this.vConfirmPassword &&
        !this.vEmail
      ) {
        this.$emit("signup", {
          name: this.name,
          username: this.username,
          password: this.password,
          email: this.email,
        });
      } else {
        console.log("no error");
      }
    },
  },
};

export default SignupForm;
</script>
