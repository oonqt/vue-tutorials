<template>
  <h1>{{ title }}</h1>
  <teleport to="#modals" v-if="showModal">
    <Modal theme="" @close="toggleModal">
      <template v-slot:links>
        <a href="#">Sign Up</a>
        <a href="#">Log In</a>        
      </template>
      
      <h1>Burger Giveaway</h1>
      <p>This is a free burger</p>
    </Modal>
  </teleport>

  <teleport to="#modals" v-if="showModal2">
    <Modal theme="sale" @close="toggleModal2">
      <template v-slot:links>
        <a href="#">Go to Sale</a> 
      </template>

      <h1>FLASH SALE NOW FOURTH OF JULY</h1>
    </Modal>
  </teleport>

  <p>welcome...</p>

  <button @click="toggleModal">open modal</button>
  <button @click="toggleModal2">open modal 2</button>
</template>

<script>
import Modal from './components/Modal.vue';

export default {
  name: 'App',
  components: { Modal }, // We have to register compnent
  data() {
    return {
      title: 'My VUE app',
      showModal: false,
      showModal2: false
    }
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModal2() {
      this.showModal2 = !this.showModal2;
    }
  }
}
</script>

<style>
  #app, #modals {
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }

  h1 {
    border-bottom: 1px solid #ddd;
    padding-bottom: 10px;
  }
</style>
