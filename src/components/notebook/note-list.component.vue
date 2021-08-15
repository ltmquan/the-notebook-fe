<template>
  <div class="note-wrapper row mt-4">
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
</template>

<script>
const NoteList = {
  props: {
    notes: Array,
    notebook: Object
  },
  methods: {
    toNote(id) {
      this.$router.push(`${this.notebook.id}/note/${id}`);
    },
    addNote() {
      this.$router.push(`/note/add-note`);
    },
  }
}

export default NoteList
</script>

<style scoped>
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
