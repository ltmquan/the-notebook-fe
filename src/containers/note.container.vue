<template>
  <div class="component-box note shadow-sm">
    <Breadcrumb v-if="breadcrumb && note" :path="breadcrumb" :current="note.name" />
    <TitleText v-if="note" :title="note.name" />

    <p v-if="note">{{ note.content }}</p>
  </div>
</template>

<script>
// import noteService from '../services/note.service';
import Breadcrumb from '../components/breadcrumb.component.vue';
import TitleText from '../components/title-text.component.vue';

const Note = {
  components: {
    Breadcrumb,
    TitleText
  },
  data() {
    return {
      breadcrumb: null,
      note: null
    }
  },
  computed: {
    hasData() {
      return this.breadcrumb && this.note;
    }
  },
  methods: {
    loadBreadcrumb() {
      this.breadcrumb = [
        { name: 'Home', link: '/'},
        { name: 'Collections', link: '/collections'},
        { name: this.note.notebookName, link: `/collections/${this.note.notebookId}`}
      ]
    },
    loadNote() {
      // noteService.getById(this.$route.params.id).then(
      //   response => {
      //     this.note = response;
      //   }
      // )
      this.note = {
        id: 1, 
        name: 'Definition',
        content: 'Testing',
        notebookId: 1, 
        notebookName: 'Microservices'
      }
    }
  },
  created() {
    this.$store.dispatch('spinner/show');
    this.loadNote();
    this.loadBreadcrumb();
  },
  mounted() {
    this.$store.dispatch('spinner/hide');
  }
}

export default Note;
</script>


<style scoped>
.note {
  width: 70%;
  padding: 5%;
  margin: 2% auto;
  border-radius: 10px;
}
</style>