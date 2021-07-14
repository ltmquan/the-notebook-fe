<template>
  <div class="component-box notebook shadow-sm">
    <Breadcrumb
      v-if="breadcrumb && notebook"
      :path="breadcrumb"
      :current="notebook.name"
    />
    <TitleText v-if="notebook" :title="notebook.name" />

    <p v-if="notebook" class="fst-italic">
      <span class="fw-bold">Description:</span> {{ notebook.description }}
    </p>

    <div v-if="notes" class="note-wrapper row mt-4">
      <div
        v-for="note in notes"
        :key="note.id"
        class="note-group col-4 justify-content-center text-center"
        @click="toNote(note.id)"
      >
        <font-awesome-icon icon="file-alt" class="note-icon" />
        <div>{{ note.name }}</div>
      </div>
      <div
        class="note-group note-add col-4 justify-content-center text-center"
        @click="addNote()"
      >
        <font-awesome-icon icon="plus-circle" class="note-icon" />
        <div>Add New Note</div>
      </div>
    </div>
  </div>
</template>

<script>
import responseHandler from "../utils/response.handler";
import notebookService from "../services/notebook.service";
import noteService from "../services/note.service";
import Breadcrumb from "../components/breadcrumb.component.vue";
import TitleText from "../components/title-text.component.vue";

const Notebook = {
  components: {
    Breadcrumb,
    TitleText,
  },
  data() {
    return {
      breadcrumb: null,
      notebook: null,
      notes: null,
    };
  },
  computed: {
    hasData() {
      return this.breadcrumb && this.notebook && this.notes;
    },
  },
  methods: {
    loadBreadcrumb() {
      this.breadcrumb = [
        { name: "Home", link: "/" },
        { name: "Collections", link: "/collections" },
      ];
    },
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
    toNote(id) {
      this.$router.push(`/note/${id}`);
    },
    addNote() {
      this.$router.push(`/note/add-note`);
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

.note-group {
  padding-top: 5%;
}

.note-group:hover {
  cursor: pointer;
  background-color: #ececec;
  opacity: 1;
}

.note-add {
  background-color: #ececec;
  opacity: 0.5;
}

.note-icon {
  width: 50%;
  height: 50%;
  margin: 0 auto;
}
</style>
