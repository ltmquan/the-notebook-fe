<template>
  <nav style="--bs-breadcrumb-divider: '>'">
    <ol class="breadcrumb">
      <li v-for="dest in path" :key="dest.name" class="breadcrumb-item">
        <router-link :to="dest.link">
          <span class="breadcrumb-link fw-bold">{{ dest.name }}</span>
        </router-link>
      </li>
      <li class="breadcrumb-item active">{{ current }}</li>
    </ol>
  </nav>
</template>

<script>
import { title } from '../../constants/page.constant';
import breadcrumbUtil from '../../utils/breadcrumb.util';

const Breadcrumb = {
  props: {
    directory: Object
  },
  computed: {
    path() {
      return breadcrumbUtil.generateBreadcrumbPath(this.routeName, this.directory);
    },
    current() {
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
};

export default Breadcrumb;
</script>

<style scoped>
.breadcrumb-link {  
  color: var(--bs-primary-font-color);
  text-decoration: underline;
}

.breadcrumb-link:hover {
  opacity: 0.7;
  cursor: pointer;
}
</style>
