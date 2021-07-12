<template>
  <div class="component-box add-notebook">
    <AddNotebookForm @add-notebook="addNotebook" />
  </div>
</template>

<script>
// import notebookService from '../services/notebook.service';
import AddNotebookForm from '../components/add-notebook-form.component.vue';

const AddNotebook = {
  components: {
    AddNotebookForm
  },
  methods: {
    addNotebook(notebook) {
      // notebookService.create(notebook).then(
      //   () => {
      //     console.log('create success');
      //     this.$store.dispatch('modal/close');
      //   }
      // )
      console.log(notebook);
    }
  },
}

export default AddNotebook;
</script>