<template>
  <form @submit="editProfile">
    <TextInput
      label="Full name"
      :required="true"
      :value="name"
      :message="vName"
      @input="name = $event"
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
import EmailInput from "../form-input/email-input.component.vue";

const EditProfileForm = {
  components: {
    TextInput,
    EmailInput,
  },
  emits: ["editProfile"],
  data() {
    return {
      id: 0,
      name: "",
      email: "",
      submitting: false,
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters["auth/currentUser"];
    },
    vName() {
      return this.submitting && validationUtil.vName(this.name)
        ? validationUtil.vName(this.name)
        : "";
    },
    vEmail() {
      return this.submitting && validationUtil.vEmail(this.email)
        ? validationUtil.vEmail(this.email)
        : "";
    },
  },
  methods: {
    editProfile(event) {
      event.preventDefault();

      this.submitting = true;
      if (!this.vName && !this.vEmail) {
        this.$emit("editProfile", {
          id: this.id,
          name: this.name,
          email: this.email,
        });
      }
    },
  },
  created() {
    this.id = this.currentUser.id;
    this.name = this.currentUser.name;
    this.username = this.currentUser.username;
    this.email = this.currentUser.email;
  },
};

export default EditProfileForm;
</script>
