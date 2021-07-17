<template>
  <h5 class="my-4">Name: {{ currentUser.name }}</h5>

  <h5 class="my-4">Username: {{ currentUser.username }}</h5>

  <h5 class="my-4">Email: {{ currentUser.email }}</h5>

  <div class="row">
    <div class="col-4">
      <button
        class="btn btn-outline-primary-color edit-button"
        @click="editProfile"
      >
        Edit profile
      </button>
    </div>
    <div class="col-5">
      <button class="btn btn-outline-primary-color" @click="changeCredentials">
        Change Credentials
      </button>
    </div>
  </div>
</template>

<script>
import ChangeCredentials from '../modal/change-credentials-form.component.vue';
import EditProfile from '../modal/edit-profile-form.component.vue';

const UserInfo = {
  props: {
    currentUser: Object
  },
  methods: {
    changeCredentials() {
      this.$store.dispatch('modal/open', {
        component: ChangeCredentials, 
        title: "Change credentials", 
        props: {}
      });
    },
    editProfile() {
      this.$store.dispatch('modal/open', {
        component: EditProfile, 
        title: "Edit profile", 
        props: {}
      });
    }
  }
}

export default UserInfo;
</script>

<style scoped>
.edit-button {
  width: 100%;
}
</style>
