<template>
  <div class="display-6 mb-3">{{ title }}</div>
</template>

<script>
import { title } from "../../constants/page.constant";

const TitleText = {
  props: {
    current: String
  },
  computed: {
    title() {
      if (this.current) {
        return this.current;
      } else if (this.routeName === 'NOTE') {
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
