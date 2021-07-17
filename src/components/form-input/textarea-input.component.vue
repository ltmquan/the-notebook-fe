<template>
  <div class="mb-3">
    <label for="" class="form-label">
      {{ label }}
      <span v-if="required" class="text-danger">*</span>
    </label>
    <textarea ref="input" rows="4" class="form-control" @input="onInput" :value="value" />
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
    message: String,
    autofocus: Boolean
  },
  methods: {
    onInput(event) {
      this.$emit('input', event.target.value);
    }
  },
  mounted() {
    if (this.autofocus) {
      this.$refs.input.focus();
    }
  }
}

export default TextareaInput;
</script>
