<template>
  <div class="component-box home shadow-sm">
    <Breadcrumb />
    <TitleText />

  </div>
</template>

<script>
import Breadcrumb from '../../components/breadcrumb/breadcrumb.component.vue';
import TitleText from '../../components/text/title-text.component.vue';
import { title } from '../../constants/page.constant';

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