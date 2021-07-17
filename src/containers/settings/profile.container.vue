<template>
  <div v-if="currentUser" class="component-box profile shadow-sm">
    <Breadcrumb :current="title" />
    <TitleText :title="title" />

    <UserInfo :currentUser="currentUser" />
  </div>
</template>

<script>
import Breadcrumb from '../../components/breadcrumb/breadcrumb.component.vue';
import TitleText from "../../components/text/title-text.component.vue";
import UserInfo from '../../components/settings/user-info.component.vue';
import { title } from '../../constants/page.constant';

const Profile = {
  components: {
    Breadcrumb,
    TitleText,
    UserInfo
  },
  computed: {
    title() {
      return title.PROFILE;
    },
    currentUser() {
      return this.$store.getters["auth/currentUser"];
    }
  },
  methods: {
    getCurrentUser() {
      this.name = this.currentUser.name;
      this.username = this.currentUser.username;
      this.email = this.currentUser.email;
    },
  },
  created() {
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
</style>
