<template>
  <div class="component-box add-notebook">
    <AddNotebookForm @add-notebook="addNotebook" />
  </div>
</template>

<script>
import notebookService from '../services/notebook.service';
import AddNotebookForm from '../components/add-notebook-form.component.vue';
import responseHandler from '../utils/response.handler';

const AddNotebook = {
  components: {
    AddNotebookForm
  },
  emits: ['finish'],
  methods: {
    addNotebook(notebook) {
      notebookService.create(notebook).then(
        response => {
          this.$emit('finish');
          this.$store.dispatch('modal/close');
          responseHandler.handlePostResponse(this.$store, response);
        }
      )
    }
  },
}

export default AddNotebook;
</script>