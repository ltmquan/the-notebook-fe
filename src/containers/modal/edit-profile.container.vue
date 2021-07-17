<template>
  <div class="component-box edit-profile">
    <EditProfileForm @edit-profile="editProfile" />
  </div>
</template>

<script>
import userService from "../../services/user.service";
import EditProfileForm from "../../components/modal/edit-profile-form.component.vue";
import responseHandler from "../../utils/response.handler";

const EditProfile = {
  components: {
    EditProfileForm,
  },
  methods: {
    editProfile(user) {
      this.$store.dispatch("spinner/show");
      userService.update(user).then((response) => {
        responseHandler.handlePutResponse(this.$store, response, (param) => {
          this.$store.dispatch("spinner/hide");
          this.$store.dispatch("auth/updateState");
          this.$store.dispatch("modal/close");
        });
      });
    },
  },
};

export default EditProfile;
</script>
