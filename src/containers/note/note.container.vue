<template>
  <div class="component-box note shadow-sm">
    <Breadcrumb :current="title" />
    <div class="row m-0">
      <div class="break-word col-10 p-0">
        <TitleText v-if="note && !editTitle" :title="note.name" />
        <textarea
          v-if="editTitle"
          class="form-control title-input"
          v-model="title"
        />
      </div>
      <div
        class="edit-button col-1 p-3 justify-content-center"
        @click="toggleEditTitle()"
      >
        <font-awesome-icon
          v-if="!editTitle"
          icon="pencil-alt"
          class="edit-button-icon"
        />
        <font-awesome-icon
          v-else
          icon="times"
          class="edit-button-icon"
        />
      </div>
    </div>

    <div class="text-editor">
      <ckeditor :editor="editor" v-model="content" />
    </div>

    <button class="btn btn-outline-primary-color" @click="save">Save</button>
  </div>
</template>

<script>
// import noteService from '../services/note.service';
import Breadcrumb from "../../components/breadcrumb/breadcrumb.component.vue";
import TitleText from "../../components/text/title-text.component.vue";
import ClassicEditor from "../../ckeditor/classic.editor";
import { title } from "../../constants/page.constant";

const Note = {
  components: {
    Breadcrumb,
    TitleText,
  },
  data() {
    return {
      editor: ClassicEditor,
      editTitle: false,
      note: null,
      title: "Definitionweajfnejfrbejqberjfbejfbeberjnrjiebgverjbnerjbejbgvrj",
      content: "",
    };
  },
  computed: {
    title() {
      return title.NOTE;
    }
  },
  methods: {
    loadNote() {
      // this.$store.dispatch("spinner/show");
      // noteService.getById(this.$route.params.id).then(
      //   response => {
      //     this.$store.dispatch("spinner/hide");
      //     responseHandler.handleGetResponse(this.$store, response, (note) => {
      //       this.note = note;
      //     })
      //   }
      // )
      this.note = {
        id: 1,
        name: "Definitionweajfnejfrbejqberjfbejfbeberjnrjiebgverjbnerjbejbgvrj",
        content: "Testing",
        notebookId: 1,
        notebookName: "Microservices",
      };
    },
    toggleEditTitle() {
      this.editTitle = !this.editTitle;
    },
    save() {
      console.log(this.content);
    }
  },
  created() {
    this.loadNote();
  },
};

export default Note;
</script>


<style scoped>
.note {
  width: 70%;
  padding: 5%;
  margin: 2% auto;
  border-radius: 10px;
}

.edit-button {
  padding: 0 10px;
  width: auto;
  height: 50px;
  border-radius: 10px;
}

.edit-button:hover {
  background-color: #ececec;
  cursor: pointer;
}

.edit-button-icon {
  font-size: 1.2rem;
}

.title-input {
  font-size: calc(1.375rem);
}

.text-editor {
  border: 1px solid var(--bs-primary-color);
  border-radius: 5px;
  margin: 5% 0;
  min-height: 65vh;
}
</style>