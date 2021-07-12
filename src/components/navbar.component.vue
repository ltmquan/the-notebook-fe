<template>
  <div class="container-box navbar-component bg-color-primary">
    <nav class="navbar navbar-expand navbar-light">
      <a href="/" class="navbar-brand">The Notebook</a>
      <div class="navbar-nav me-auto">
        <li class="nav-item mx-1">
          <router-link to="/home" class="nav-link">
            <font-awesome-icon icon="home" /> Home
          </router-link>
        </li>
        <li v-if="loggedIn" class="nav-item mx-1">
          <router-link to="/collections" class="nav-link">
            <font-awesome-icon icon="book" /> My Collections
          </router-link>
        </li>
      </div>

      <div class="navbar-nav ms-auto">
        <li v-if="loggedIn" class="nav-item mx-1">
          <router-link to="/" class="nav-link" @click="signout">
            <font-awesome-icon icon="sign-out-alt" /> Sign out
          </router-link>
        </li>
        <li v-if="loggedIn" class="nav-item mx-1">
          <router-link to="/settings" class="nav-link">
            <font-awesome-icon icon="cog" /> Settings
          </router-link>
        </li>
        <li v-if="!loggedIn" class="nav-item mx-1">
          <router-link to="/login" class="nav-link">
            <font-awesome-icon icon="sign-in-alt" /> Login
          </router-link>
        </li>
        <li v-if="!loggedIn" class="nav-item mx-1">
          <router-link to="/signup" class="nav-link">
            <font-awesome-icon icon="user" /> Signup
          </router-link>
        </li>
      </div>
    </nav>
  </div>
</template>

<script>
const Navbar = {
  data() {
    return {};
  },
  computed: {
    loggedIn() {
      return this.$store.getters["auth/isLoggedIn"];
    },
  },
  methods: {
    signout() {
      this.$store.dispatch('spinner/show');
      this.$store.dispatch('auth/logout').then(
        () => {
          this.$store.dispatch('spinner/hide');
          console.log('logout success');
        }
      )
    }
  }
};

export default Navbar;
</script>

<style scoped>
.navbar-component {
  padding: 0 5%;
}
</style>
