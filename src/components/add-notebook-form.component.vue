<template>
  <form @submit="addNotebook">
    <TextInput 
      label="Name"
      :required="true"
      :value="name"
      :message="vName"
      @input="name = $event"
    />

    <TextareaInput 
      label="Description"
      :required="false"
      :value="description"
      :message="vDescription"
      @input="description = $event"
    />

    <input type="submit" class="btn btn-outline-primary-color" />
  </form>
</template>

<script>
import validationUtil from '../utils/validation.util';
import TextInput from './text-input.component.vue';
import TextareaInput from './textarea-input.component.vue';

const AddNotebookForm = {
  components: {
    TextInput,
    TextareaInput
  },
  emits: ['addNotebook'],
  data() {
    return {
      name: '',
      description: '',
      submitting: false
    }
  },
  computed: {
    vName() {
      return this.submitting && validationUtil.vNotebookName(this.name)
        ? validationUtil.vNotebookName(this.name)
        : "";
    },
    vDescription() {
      return this.submitting && validationUtil.vNotebookDescription(this.description)
        ? validationUtil.vNotebookDescription(this.description)
        : "";
    }
  },
  methods: {
    addNotebook(event) {
      event.preventDefault();

      this.submitting = true;
      if (!this.vName && !this.vDescription) {
        this.$emit('addNotebook', {
          name: this.name,
          description: this.description
        })
      }
    }
  }
}

export default AddNotebookForm;
</script>
