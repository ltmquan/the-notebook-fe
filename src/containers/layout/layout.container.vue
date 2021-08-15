<template>
  <div class="container-box">
    <div class="row navbar-area m-0">
      <div class="col-12 p-0">
        <Navbar />
      </div>
    </div>
    <div class="row justify-content-center content-area m-0">
      <div class="col-9 my-3 p-0">
        <router-view></router-view>
      </div>
    </div>
  </div>
  <Modal />
  <Spinner />
  <Notification />
</template>

<script>
import Navbar from "../../components/navbar/navbar.component.vue";
import Modal from "../../containers/modal/modal.container.vue";
import Spinner from '../../components/spinner/spinner.component.vue';
import Notification from '../../components/notification/notification.component.vue';

const LayoutContainer = {
  components: {
    Navbar,
    Modal,
    Spinner,
    Notification
  },
}

export default LayoutContainer;
</script>

<style scoped>
.navbar-area {
  height: 10%;
}

.content-area {
  height: 90%;
}
</style>