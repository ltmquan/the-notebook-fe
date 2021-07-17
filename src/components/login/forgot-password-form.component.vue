<template>
  <form v-if="!sentEmail" @submit="sendEmail">
    <EmailInput
      label="Email"
      :required="true"
      :value="email"
      :message="vEmail"
      @input="email = $event"
    />

    <input type="submit" class="btn btn-outline-primary-color" />
  </form>

  <form v-else @submit="verify">
    <TextInput
      label="OTP Code"
      :required="true"
      :value="otp"
      :message="vOtp"
      @input="otp = $event"
    />

    <PasswordInput
      label="New password"
      :required="true"
      :value="newPassword"
      :message="vNewPassword"
      @input="newPassword = $event"
    />

    <PasswordInput
      label="Confirm new password"
      :required="true"
      :value="confirmNewPassword"
      :message="vConfirmNewPassword"
      @input="confirmNewPassword = $event"
    />

    <input type="submit" class="btn btn-outline-primary-color" />
  </form>
</template>

<script>
import validationUtil from "../../utils/validation.util";
import EmailInput from "../form-input/email-input.component.vue";
import TextInput from "../form-input/text-input.component.vue";
import PasswordInput from "../form-input/password-input.component.vue";
import { vRequired } from "../../constants/form-validations.constant";

const ForgotPasswordForm = {
  components: {
    EmailInput,
    TextInput,
    PasswordInput,
  },
  emits: ["sendEmail", "verify"],
  data() {
    return {
      email: "",
      sentEmail: false,
      otp: "",
      newPassword: "",
      confirmNewPassword: "",
      submitting: false,
    };
  },
  computed: {
    vEmail() {
      return this.submitting && validationUtil.vEmail(this.email)
        ? validationUtil.vEmail(this.email)
        : "";
    },
    vOtp() {
      return this.submitting && vRequired(this.otp)
        ? vRequired(this.email)
        : "";
    },
    vNewPassword() {
      return this.submitting && validationUtil.vPassword(this.newPassword)
        ? validationUtil.vPassword(this.newPassword)
        : "";
    },
    vConfirmNewPassword() {
      return this.submitting &&
        validationUtil.vConfirmPassword(
          this.confirmNewPassword,
          this.newPassword
        )
        ? validationUtil.vConfirmPassword(
            this.confirmNewPassword,
            this.newPassword
          )
        : "";
    },
  },
  methods: {
    sendEmail(event) {
      event.preventDefault();

      this.submitting = true;
      if (!this.vEmail) {
        this.$emit("sendEmail", this.email);
      }
    },
    verify(event) {
      event.preventDefault();

      this.submitting = true;
      if (!this.vOtp && !this.vNewPassword && !this.vConfirmNewPassword) {
        this.$emit("verify", {
          otp: this.otp,
          newPassword: this.newPassword,
        });
      }
    },
  },
};

export default ForgotPasswordForm;
</script>
