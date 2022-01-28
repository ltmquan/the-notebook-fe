<template>
  <div class='component-box note shadow-sm'>
    <Breadcrumb :directory='breadcrumbDirectory' />
    <div class='row m-0'>
      <div class='title-container break-word col-10 p-0'>
        <TitleText v-if='!editTitle' :current="name" />
        <textarea
          v-if='editTitle'
          rows="2"
          class='form-control title-input'
          v-model='name'
        />
      </div>
      <div
        class='edit-button col-1 p-3 justify-content-center'
        @click='toggleEditTitle()'
      >
        <font-awesome-icon
          v-if='!editTitle'
          icon='pencil-alt'
          class='edit-button-icon'
        />
        <font-awesome-icon v-else icon='times' class='edit-button-icon' />
      </div>
    </div>

    <SelectInput
      v-if='noteTypes'
      label='Type'
      :value='typeId'
      :options='noteTypesSimplified'
      @input='typeId = $event.target.value'
    />

    <div class='text-editor'>
      <ckeditor :editor='editor' v-model='content' />
    </div>

    <button class='btn btn-outline-primary-color' @click='save'>Save</button>
  </div>
</template>

<script>
import Breadcrumb from '../../components/breadcrumb/breadcrumb.component.vue';
import TitleText from '../../components/text/title-text.component.vue';
import SelectInput from '../../components/form-input/select-input.component.vue';
import ClassicEditor from '../../ckeditor/classic.editor';
import noteService from '../../services/note.service';
import noteTypeService from '../../services/note-type.service';
import responseHandler from '../../utils/response.handler';

const Note = {
  components: {
    Breadcrumb,
    TitleText,
    SelectInput,
  },
  data() {
    return {
      editor: ClassicEditor,
      editTitle: false,
      id: 0,
      name: '',
      content: '',
      typeId: 0,
      typeName: '',
      noteTypes: null,
      isCreate: false,
      breadcrumbDirectory: {},
    };
  },
  computed: {
    noteTypesSimplified() {
      return this.noteTypes.map((noteType) => {
        return {
          label: noteType.name,
          value: noteType.id,
        };
      });
    },
  },
  methods: {
    loadNote() {
      this.$store.dispatch('spinner/show');
      noteService.getById(this.$route.params.id).then((response) => {
        this.$store.dispatch('spinner/hide');
        responseHandler.handleGetResponse(this.$store, response, (note) => {
          this.breadcrumbDirectory['Notebook'] = {
            name: note.notebookName,
            link: `/notebook/${note.notebookId}`,
          };
          this.id = note.id;
          this.name = note.name;
          this.content = note.content;
          this.typeId = note.typeId;
          this.typeName = note.typeName;
          this.notebookId = note.notebookId;
          this.notebookName = note.notebookName;

          this.$store.dispatch('note/set', note);
        });
      });
    },
    loadNoteTypes() {
      this.$store.dispatch('spinner/show');
      noteTypeService.getByCurrentUser().then((response) => {
        this.$store.dispatch('spinner/hide');
        responseHandler.handleGetResponse(
          this.$store,
          response,
          (noteTypes) => {
            this.noteTypes = noteTypes;
          }
        );
      });
    },
    toggleEditTitle() {
      this.editTitle = !this.editTitle;
    },
    save() {
      this.$store.dispatch('spinner/show');
      console.log(this.$store.getters['notebook/id']);
      if (this.isCreate) {
        noteService
          .create({
            name: this.name,
            content: this.content,
            notebookId: this.$store.getters['notebook/id'],
          })
          .then((response) => {
            this.$store.dispatch('spinner/hide');
            responseHandler.handlePostResponse(
              this.$store,
              response,
              (param) => {
                this.$router.push(`/notebook/${this.$store.getters['notebook/id']}`);
              }
            );
          });
      } else {
        noteService
          .update({
            id: this.id,
            name: this.name,
            content: this.content,
            notebookId: this.$store.getters['notebook/id'],
          })
          .then((response) => {
            this.$store.dispatch('spinner/hide');
            responseHandler.handlePutResponse(
              this.$store,
              response,
              (param) => {
                this.$router.push(`/notebook/${this.$store.getters['notebook/id']}`);
              }
            );
          });
      }
    },
  },
  created() {
    if (!isNaN(Number(this.$route.params.id))) {
      this.loadNote();
    } else {
      this.editTitle = true;
      this.isCreate = true;
    }
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

.title-container {
  width: auto;
  max-width: calc(100% * 5 / 6);
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