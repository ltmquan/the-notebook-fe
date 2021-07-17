<template>
  <div class="mb-3" @focus="focusInput">
    <label for="" class="form-label">
      {{ label }}
      <span v-if="required" class="text-danger">*</span>
    </label>
    <input ref="input" type="text" class="form-control" @input="onInput" :value="value" />
    <div class="form-text text-danger">{{ message }}</div>
  </div>
</template>

<script>
const TextInput = {
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
    },
    focusInput() {
      console.log('yes');
    }
  },
  mounted() {
    if (this.autofocus) {
      this.$refs.input.focus();
    }
  }
}

export default TextInput;
</script>
