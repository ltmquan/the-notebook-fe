<template>
  <div class="component-box collections shadow-sm">
    <Breadcrumb />
    <TitleText />

    <CollectionsList
      v-if="notebooks"
      :notebooks="notebooks"
      @add-notebook="addNotebook"
    />
  </div>
</template>

<script>
import notebookService from "../../services/notebook.service";
import Breadcrumb from "../../components/breadcrumb/breadcrumb.component.vue";
import TitleText from "../../components/text/title-text.component.vue";
import CollectionsList from "../../components/notebook/collections-list.component.vue";
import AddNotebook from "../../components/modal/add-notebook-form.component.vue";
import responseHandler from "../../utils/response.handler";
import { title } from "../../constants/page.constant";

const Collections = {
  components: {
    Breadcrumb,
    TitleText,
    CollectionsList,
  },
  data() {
    return {
      notebooks: null,
    };
  },
  methods: {
    loadNotebooks() {
      this.$store.dispatch("spinner/show");
      notebookService.getByCurrentUser().then((response) => {
        this.$store.dispatch("spinner/hide");
        responseHandler.handleGetResponse(
          this.$store,
          response,
          (notebooks) => {
            this.notebooks = notebooks;
          }
        );
      });
    },
    addNotebook() {
      this.$store.dispatch("modal/open", {
        component: AddNotebook,
        title: "Add notebook",
        props: {},
        callback: () => {
          this.loadNotebooks();
        },
      });
    },
  },
  created() {
    this.loadNotebooks();
  },
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
</style>
