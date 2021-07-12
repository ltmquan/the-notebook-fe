<template>
  <div class="component-box collections shadow-sm">
    <Breadcrumb v-if="breadcrumb" :path="breadcrumb" current="Collections" />
    <TitleText title="Collections" />

    <div v-if="notebooks" class="notebook-wrapper row mt-4">
      <div
        v-for="notebook in notebooks"
        :key="notebook.id"
        class="notebook-group col-4 justify-content-center text-center"
        @click="toNotebook(notebook.id)"
      >
        <font-awesome-icon icon="book" class="notebook-icon" />
        <div>{{ notebook.name }}</div>
      </div>
      <div
        class="notebook-group notebook-add col-4 justify-content-center text-center"
        @click="addNotebook()"
      >
        <font-awesome-icon icon="plus-circle" class="notebook-icon" />
        <div>Add New Notebook</div>
      </div>
    </div>
  </div>
</template>

<script>
// import notebookService from "../services/notebook.service";
import Breadcrumb from '../components/breadcrumb.component.vue';
import TitleText from "../components/title-text.component.vue";
import AddNotebook from './add-notebook.container.vue';

const Collections = {
  components: {
    Breadcrumb,
    TitleText,
  },
  data() {
    return {
      breadcrumb: null,
      notebooks: null,
    };
  },
  computed: {
    hasData() {
      return this.breadcrumb && this.notebooks;
    }
  },
  methods: {
    loadBreadcrumb() {
      this.breadcrumb = [
        { name: 'Home', link: '/'}
      ]
    },
    loadNotebooks() {
      // notebookService.getByCurrentUser().then((response) => {
      //   this.notebooks = response;
      // });
      this.notebooks = [
        {
          id: 1,
          name: "Notebook 1"
        },
        {
          id: 2,
          name: "Notebook 2"
        },
        {
          id: 3,
          name: "Notebook 3"
        },
        {
          id: 4,
          name: "Notebook 4"
        },
      ]
    },
    toNotebook(id) {
      this.$router.push(`/collections/${id}`);
    },
    addNotebook() {
      this.$store.dispatch('modal/open', {
        component: AddNotebook, 
        title: "Add notebook", 
        props: {}
      });
    }
  },
  created() {
    this.$store.dispatch('spinner/show');
    this.loadBreadcrumb();
    this.loadNotebooks();
  },
  mounted() {
    if (this.hasData) {
      this.$store.dispatch('spinner/hide');
    }
  }
};

export default Collections;
</script>

<style scoped>
.collections {
  width: 70%;
  padding: 5%;
  margin: 2% auto;
  border-radius: 10px;
}

.notebook-group {
  padding-top: 5%;
}

.notebook-group:hover {
  cursor: pointer;
  background-color: #ececec;
  opacity: 1;
}

.notebook-add {
  background-color: #ececec;
  opacity: 0.5;
}

.notebook-icon {
  width: 50%;
  height: 50%;
  margin: 0 auto;
}
</style>
