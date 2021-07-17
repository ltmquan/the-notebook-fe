<template>
  <div class="component-box delete-account text-center">
    <p>Do you really want to delete this account? This action is irreversible</p>

    <button class="btn btn-outline-primary-color" @click="deleteAccount()">Submit</button>
  </div>
</template>

<script>
import userService from '../../services/user.service';
import responseHandler from '../../utils/response.handler';

const DeleteAccount = {
  methods: {
    deleteAccount() {
      this.$store.dispatch("spinner/show");
      userService.delete().then(response => {
        responseHandler.handleDeleteResponse(this.$store, response, (param) => {
          this.$store.dispatch("spinner/hide");
          this.$store.dispatch("auth/logout");
          this.$store.dispatch("modal/close");
          this.$router.push("/");
        })
      })
    }
  }
}

export default DeleteAccount;
</script>
