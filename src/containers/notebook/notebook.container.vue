<template>
  <div class="component-box notebook shadow-sm">
    <Breadcrumb :current="title" />
    <TitleText class="break-word" v-if="notebook" :title="notebook.name" />

    <p v-if="notebook" class="fst-italic">
      <span class="fw-bold">Description:</span> {{ notebook.description }}
    </p>

    <NoteList v-if="notes" :notes="notes" />
  </div>
</template>

<script>
import responseHandler from "../../utils/response.handler";
import notebookService from "../../services/notebook.service";
import noteService from "../../services/note.service";
import Breadcrumb from "../../components/breadcrumb/breadcrumb.component.vue";
import TitleText from "../../components/text/title-text.component.vue";
import NoteList from '../../components/notebook/note-list.component.vue';
import { title } from "../../constants/page.constant";

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
  computed: {
    title() {
      return title.NOTEBOOK;
    }
  },
  methods: {
    loadNotebook() {
      this.$store.dispatch("spinner/show");
      notebookService.getById(this.$route.params.id).then((response) => {
        this.$store.dispatch("spinner/hide");
        responseHandler.handleGetResponse(this.$store, response, (notebook) => {
          this.notebook = notebook;
        });
      });
    },
    loadNotes() {
      this.$store.dispatch("spinner/show");
      noteService.getByNotebookId(this.$route.params.id).then((response) => {
        this.$store.dispatch("spinner/hide");
        responseHandler.handleGetResponse(this.$store, response, (notes) => {
          this.notes = notes;
        });
      });
    },
  },
  created() {
    this.loadBreadcrumb();
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
