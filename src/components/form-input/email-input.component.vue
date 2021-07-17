<template>
  <div class="mb-3">
    <label for="" class="form-label">
      {{ label }}
      <span v-if="required" class="text-danger">*</span>
    </label>
    <input type="email" class="form-control" @input="onInput" :value="value" />
    <div class="form-text text-danger">{{ message }}</div>
  </div>
</template>

<script>
const EmailInput = {
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

export default EmailInput;
</script>
