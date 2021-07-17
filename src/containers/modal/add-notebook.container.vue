<template>
  <div class="component-box add-notebook">
    <AddNotebookForm @add-notebook="addNotebook" />
  </div>
</template>

<script>
import notebookService from "../../services/notebook.service";
import AddNotebookForm from "../../components/modal/add-notebook-form.component.vue";
import responseHandler from "../../utils/response.handler";

const AddNotebook = {
  components: {
    AddNotebookForm,
  },
  emits: ["finish"],
  methods: {
    addNotebook(notebook) {
      notebookService.create(notebook).then((response) => {
        responseHandler.handlePostResponse(this.$store, response, (param) => {
          this.$emit("finish");
          this.$store.dispatch("modal/close");
        });
      });
    },
  },
};

export default AddNotebook;
</script>