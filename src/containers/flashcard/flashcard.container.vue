<template>
  <div class="component-box flashcard shadow-sm">
    <TitleText :title="title" />
    <Breadcrumb :current="title" />

    <FlashcardInfo />
  </div>
</template>

<script>
import TitleText from '../../components/text/title-text.component.vue';
import Breadcrumb from '../../components/breadcrumb/breadcrumb.component.vue';
import FlashcardInfo from '../../components/flashcard/flashcard-info.component.vue';

const Flashcard = {
  components: {
    TitleText,
    Breadcrumb,
    FlashcardInfo
  }
}

export default Flashcard;
</script>

<style scoped>
.flashcard {
  width: 70%;
  padding: 5%;
  margin: 2% auto;
  border-radius: 10px;
}
</style>