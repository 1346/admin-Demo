<template>
  <div>

      <button @click="increment">+</button>
      <!--<button @click="reduce">-</button>-->
  </div>
</template>

<script>
  import store from '../../store/store.js';
  import {mapState} from 'vuex'

  export default {
    name: 'EStore',
    data() {
      return {
      }
    },
    store,
    computed: {
      ...mapState(['count', 'status']),
      doneTodosCount () {
        return this.$store.getters.doneTodosCount
      }
    },
    created() {
      this.filter();
      console.log('x'.repeat(6));
    },
    methods: {
      increment() {
        this.$store.commit('increment')
      },
      filter() {
        console.log(this.$store.getters.getTodoById(2));
      }
    }
  }
</script>

<style scoped>

</style>
