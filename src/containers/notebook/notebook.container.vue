<template>
  <div class='component-box notebook shadow-sm'>
    <Breadcrumb />
    <TitleText class='break-word' v-if='notebook' />

    <p v-if='notebook' class='fst-italic'>
      <span class='fw-bold'>Description:</span> {{ notebook.description }}
    </p>

    <NoteList v-if='notes && notebook' :notes='notes' :notebook='notebook' />
  </div>
</template>

<script>
import responseHandler from '../../utils/response.handler';
import notebookService from '../../services/notebook.service';
import noteService from '../../services/note.service';
import Breadcrumb from '../../components/breadcrumb/breadcrumb.component.vue';
import TitleText from '../../components/text/title-text.component.vue';
import NoteList from '../../components/notebook/note-list.component.vue';

const Notebook = {
  components: {
    Breadcrumb,
    TitleText,
    NoteList
  },
  data() {
    return {
      notebook: null,
      notes: null,
    };
  },
  methods: {
    loadNotebook() {
      this.$store.dispatch('spinner/show');
      notebookService.getById(this.$route.params.id).then((response) => {
        this.$store.dispatch('spinner/hide');
        responseHandler.handleGetResponse(this.$store, response, (notebook) => {
          this.notebook = notebook;
          this.$store.dispatch('notebook/set', notebook);
        });
      });
    },
    loadNotes() {
      this.$store.dispatch('spinner/show');
      noteService.getByNotebookId(this.$route.params.id).then((response) => {
        this.$store.dispatch('spinner/hide');
        responseHandler.handleGetResponse(this.$store, response, (notes) => {
          this.notes = notes;
        });
      });
    },
  },
  created() {
    this.loadNotebook();
    this.loadNotes();
  },
};

export default Notebook;
</script>

<style scoped>
.notebook {
  width: 70%;
  padding: 5%;
  margin: 2% auto;
  border-radius: 10px;
}
</style>
