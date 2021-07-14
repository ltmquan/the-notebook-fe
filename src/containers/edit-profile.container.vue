<template>
  <div class="component-box edit-profile">
    <EditProfileForm @edit-profile="editProfile" />
  </div>
</template>

<script>
import userService from '../services/user.service';
import EditProfileForm from '../components/edit-profile-form.component.vue';
import responseHandler from '../utils/response.handler';

const EditProfile = {
  components: {
    EditProfileForm
  },
  methods: {
    editProfile(user) {
      this.$store.dispatch('spinner/show');
      userService.update(user).then(
        response => {
          this.$store.dispatch('spinner/hide');
          this.$store.dispatch('auth/updateState');
          this.$store.dispatch('modal/close');
          responseHandler.handlePutResponse(this.$store, response);
        }
      )
    }
  }
}

export default EditProfile;
</script>
