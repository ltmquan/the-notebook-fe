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
const Breadcrumb = {
  props: {
    path: Array,
    current: String
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
