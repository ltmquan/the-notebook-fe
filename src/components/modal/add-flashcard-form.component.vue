<template>
  <form @submit="addFlashcard">
    <TextInput 
      label="Name"
      :required="true"
      :autofocus="true"
      :value="title"
      :message="vTitle"
      @input="title = $event"
    />

    <TextareaInput 
      label="Description"
      :required="true"
      :value="content"
      @input="content = $event"
    />

    <input type="submit" class="btn btn-outline-primary-color" />
  </form>
</template>

<script>
import validationUtil from '../../utils/validation.util';
import TextInput from '../form-input/text-input.component.vue';
import TextareaInput from '../form-input/textarea-input.component.vue';

const AddFlashcardForm = {
  components: {
    TextInput,
    TextareaInput
  },
  emits: ['addFlashcard'],
  data() {
    return {
      title: '',
      content: '',
      submitting: false
    }
  },
  computed: {
    vTitle() {
      return this.submitting && validationUtil.vFlashcardTitle(this.name)
        ? validationUtil.vFlashcardTitle(this.name)
        : "";
    }
  },
  methods: {
    addFlashcard(event) {
      event.preventDefault();

      this.submitting = true;
      if (!this.vTitle) {
        this.$emit('addFlashcard', {
          title: this.title,
          content: this.content
        })
      }
    }
  }
}

export default AddFlashcardForm;
</script>
