<template>
  <button class="btn btn-outline-primary-color" @click="addFlashcard">Add Flashcard</button>
  
</template>

<script>
import flashcardService from '../../services/flashcard.service';
import AddFlashcard from '../../components/modal/add-flashcard-form.component.vue';
import responseHandler from '../../utils/response.handler';

const FlashcardInfo = {
  data() {
    return {
      flashcards: null
    }
  },
  methods: {
    loadFlashcards() {
      this.$store.dispatch('spinner/show');
      flashcardService.getByCurrentUser().then((response) => {
        this.$store.dispatch('spinner/hide');
        responseHandler.handleGetResponse(
          this.$store,
          response,
          (flashcards) => {
            this.flashcards = flashcards;
          }
        );
      });
    },
    addFlashcard() {
      this.$store.dispatch('modal/open', {
        component: AddFlashcard,
        title: 'Add flashcard',
        props: {},
        callback: () => {
          this.loadFlashcards();
        },
      });
    },
  },
  created() {
    this.loadFlashcards();
  },
}

export default FlashcardInfo
</script>
