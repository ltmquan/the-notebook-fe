<template>
  <div class="component-box add-note shadow-sm">
    <TitleText title="New Note" />

    <h3>Under Construction!</h3>
  </div>
</template>

<script>
import TitleText from '../components/title-text.component.vue';

const AddNote = {
  components: {
    TitleText
  }
}

export default AddNote
</script>

<style scoped>
.add-note {
  width: 70%;
  padding: 5%;
  margin: 2% auto;
  border-radius: 10px;
}
</style>