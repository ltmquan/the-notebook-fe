<template>
  <div class="display-6 mb-3">{{ title }}</div>
</template>

<script>
import { title } from "../../constants/page.constant";

const TitleText = {
  computed: {
    title() {
      if (this.routeName === 'NOTE') {
        return this.$store.getters['note/name'];
      } else if (this.routeName === 'NOTEBOOK') {
        return this.$store.getters['notebook/name'];
      } else {
        return title[this.routeName];
      }
    },
    routeName() {
      return this.$route.name;
    }
  }
}

export default TitleText;
</script>
