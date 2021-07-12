<template>
  <div v-if="currentUser" class="component-box profile shadow-sm">
    <Breadcrumb v-if="breadcrumb" :path="breadcrumb" current="Profile" />
    <TitleText title="Profile" />

    <h5 class="my-4">Name: {{ currentUser.name }}</h5>

    <h5 class="my-4">Username: {{ currentUser.username }}</h5>

    <h5 class="my-4">Email: {{ currentUser.email }}</h5>

    <div class="row">
      <div class="col-4">
        <button class="btn btn-outline-primary-color edit-button" @click="editProfile">Edit profile</button>
      </div>
      <div class="col-5">
        <button class="btn btn-outline-primary-color" @click="changeCredentials">Change Credentials</button>
      </div>
    </div>
  </div>
</template>

<script>
import Breadcrumb from '../components/breadcrumb.component.vue';
import TitleText from "../components/title-text.component.vue";
import ChangeCredentials from './change-credentials.container.vue';
import EditProfile from './edit-profile.container.vue';

const Profile = {
  components: {
    Breadcrumb,
    TitleText,
  },
  data() {
    return {
      breadcrumb: null,
      name: '',
      username: '',
      email: ''
    };
  },
  computed: {
    currentUser() {
      return this.$store.getters["auth/currentUser"];
    }
  },
  methods: {
    loadBreadcrumb() {
      this.breadcrumb = [
        { name: "Settings", link: '/settings'}
      ]
    },
    getCurrentUser() {
      this.name = this.currentUser.name;
      this.username = this.currentUser.username;
      this.email = this.currentUser.email;
    },
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
  },
  created() {
    this.loadBreadcrumb();
    this.getCurrentUser();
  },
};

export default Profile;
</script>

<style scoped>
.profile {
  width: 60%;
  padding: 5%;
  margin: 2% auto;
  border-radius: 10px;
}

.edit-button {
  width: 100%;
}
</style>
