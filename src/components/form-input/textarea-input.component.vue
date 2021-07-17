<template>
  <div class="mb-3">
    <label for="" class="form-label">
      {{ label }}
      <span v-if="required" class="text-danger">*</span>
    </label>
    <textarea rows="4" class="form-control" @input="onInput" :value="value" />
    <div class="form-text text-danger">{{ message }}</div>
  </div>
</template>

<script>
const TextareaInput = {
  emits: ['input'],
  props: {
    required: Boolean,
    label: String,
    value: String,
    message: String
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    }
  }
}

export default TextareaInput;
</script>
