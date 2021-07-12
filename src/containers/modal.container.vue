<template>
  <ModalContent :isOpen="!!component" :title="title" @close="close">
    <component :is="component" v-bind="props" />
  </ModalContent>
</template>

<script>
import ModalContent from '../components/modal-content.component.vue';

const Modal = {
  components: {
    ModalContent
  },
  data() {
    return {
      
    }
  },
  computed: {
    component() {
      return this.$store.getters['modal/component'];
    },
    title() {
      return this.$store.getters['modal/title'];
    },
    props() {
      return this.$store.getters['modal/props'];
    }
  },
  created() {
    document.addEventListener('keyup', this.handleKeyup)
  },
  beforeDestroy() {
    document.removeEventListener('keyup');
  },
  methods: {
    close() {
      this.$store.dispatch('modal/close');
    },
    handleKeyup(e) {
      if (e.keyCode === 27) this.close();
    }
  }
}

export default Modal;
</script>
