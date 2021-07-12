<template>
  <div class="component-box home shadow-sm">
    <Breadcrumb :path="[]" current="Home" />
    <TitleText title="Home" />

  </div>
</template>

<script>
import Breadcrumb from '../components/breadcrumb.component.vue';
import TitleText from '../components/title-text.component.vue';

const Home = {
  components: {
    Breadcrumb,
    TitleText
  }
}

export default Home;
</script>

<style scoped>
.home {
  width: 80%;
  padding: 5%;
  margin: 2% auto;
  border-radius: 10px;
}
</style>