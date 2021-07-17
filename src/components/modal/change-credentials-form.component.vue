<template>
  <form @submit="changeCredentials">
    <TextInput
      label="Username"
      :required="true"
      :value="username"
      :message="vUsername"
      @input="username = $event"
    />

    <PasswordInput
      label="Old password"
      :required="true"
      :value="oldPassword"
      :message="vOldPassword"
      @input="oldPassword = $event"
    />

    <PasswordInput
      label="New password"
      :required="false"
      :value="newPassword"
      :message="vNewPassword"
      @input="newPassword = $event"
    />

    <input type="submit" class="btn btn-outline-primary-color" />
  </form>
</template>

<script>
import validationUtil from "../../utils/validation.util";
import TextInput from "../form-input/text-input.component.vue";
import PasswordInput from "../form-input/password-input.component.vue";

const ChangeCredentialsForm = {
  components: {
    TextInput,
    PasswordInput,
  },
  emits: ["changeCredentials"],
  data() {
    return {
      username: "",
      oldPassword: "",
      newPassword: "",
      submitting: false,
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters["auth/currentUser"];
    },
    vUsername() {
      return this.submitting && validationUtil.vUsername(this.username)
        ? validationUtil.vUsername(this.username)
        : "";
    },
    vOldPassword() {
      return this.submitting && validationUtil.vPassword(this.oldPassword)
        ? validationUtil.vPassword(this.oldPassword)
        : "";
    },
    vNewPassword() {
      console.log(this.submitting && validationUtil.vChangeCredentialsPassword(this.newPassword, this.oldPassword)
        ? validationUtil.vChangeCredentialsPassword(this.newPassword, this.oldPassword)
        : "");
      return this.submitting && validationUtil.vChangeCredentialsPassword(this.newPassword, this.oldPassword)
        ? validationUtil.vChangeCredentialsPassword(this.newPassword, this.oldPassword)
        : "";
    },
  },
  methods: {
    changeCredentials(event) {
      event.preventDefault();

      this.submitting = true;
      if (!this.vUsername && !this.vNewPassword && !this.vOldPassword) {
        this.$emit("changeCredentials", {
          username: this.username,
          oldPassword: this.oldPassword,
          newPassword: this.newPassword,
        });
      }
    },
  },
  mounted() {
    this.username = this.currentUser.username;
  },
};

export default ChangeCredentialsForm;
</script>
