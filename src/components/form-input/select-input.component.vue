<template>
  <div class="mb-3" @focus="focusInput">
    <label for="" class="form-label">
      {{ label }}
      <span v-if="required" class="text-danger">*</span>
    </label>
    <select
      ref="input"
      class="form-select"
      @input="onInput"
      :value="value"
    >
      <option
        v-for="option in options"
        :key="option.value"
        :value="stringify(option.value)"
      >
        {{ option.label }}
      </option>
    </select>
    <div class="form-text text-danger">{{ message }}</div>
  </div>
</template>

<script>
const SelectInput = {
  emits: ["input"],
  props: {
    required: Boolean,
    label: String,
    value: String,
    message: String,
    autofocus: Boolean,
    options: Array,
  },
  methods: {
    onInput(event) {
      this.$emit("input", event.target.value);
    },
    stringifyValue(value) {
      return String(value);
    }
  },
  mounted() {
    if (this.autofocus) {
      this.$refs.input.focus();
    }
  },
};

export default SelectInput;
</script>
