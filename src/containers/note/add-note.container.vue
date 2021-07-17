<template>
  <div class="component-box add-note shadow-sm">
    <Breadcrumb :current="title" />
    <TitleText :title="title" />

    <h3>Under Construction!</h3>
  </div>
</template>

<script>
import Breadcrumb from "../../components/breadcrumb/breadcrumb.component.vue";
import TitleText from '../../components/text/title-text.component.vue';
import { title } from "../../constants/page.constant";

const AddNote = {
  components: {
    Breadcrumb,
    TitleText
  },
  computed: {
    title() {
      return title.ADD_NOTE;
    }
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