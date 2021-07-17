<template>
  <div class="notebook-wrapper row mt-4">
    <div
      v-for="notebook in notebooks"
      :key="notebook.id"
      class="notebook-group col-4 justify-content-center text-center"
      @click="toNotebook(notebook.id)"
    >
      <font-awesome-icon icon="book" class="notebook-icon" />
      <div class="break-word">{{ notebook.name }}</div>
    </div>
    <div
      class="
        notebook-group notebook-add
        col-4
        justify-content-center
        text-center
      "
      @click="addNotebook()"
    >
      <font-awesome-icon icon="plus-circle" class="notebook-icon" />
      <div>Add New Notebook</div>
    </div>
  </div>
</template>

<script>
const CollectionsList = {
  props: {
    notebooks: Array
  },
  methods: {
    toNotebook(id) {
      this.$router.push(`/collections/${id}`);
    },
    addNotebook() {
      this.$store.dispatch("modal/open", {
        component: AddNotebook,
        title: "Add notebook",
        props: {},
        callback: () => {
          this.loadNotebooks();
        },
      });
    },
  }
}

export default CollectionsList;
</script>

<style scoped>
.notebook-group {
  padding-top: 5%;
}

.notebook-group:hover {
  cursor: pointer;
  background-color: #ececec;
  opacity: 1;
}

.notebook-add {
  background-color: #ececec;
  opacity: 0.5;
}

.notebook-icon {
  width: 50%;
  height: 50%;
  margin: 0 auto;
}
</style>
