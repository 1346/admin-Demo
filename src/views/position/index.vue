<template>
  <div>
    <div class="div0"></div>
    <div class="div1"></div>
    <div class="div2"></div>
    <!--<p>{{$store.state.count}}</p>-->
    <div>
      <!--<button @click="increment">+</button>-->
      <!--<button @click="reduce">-</button>-->
    </div>
  </div>
</template>

<script>
  import store from '../../store/store.js';

  export default {
    data() {
      return {
      }
    },
    store,
    computed: {
      count() {
        return this.$store.state.count;
      }
    },
    created() {

    },
    methods: {
      increment() {
        this.$store.commit('increment')
      }
    }
  }
</script>

<style scoped>
  .div0 {
    width: 100px;
    height: 100px;
    background-color: cornflowerblue;
    transition: all 0.8s;
  }
  .div0:hover {
    box-shadow: 0px 0px 20px 5px cornflowerblue;
  }
  .div1 {
    width: 200px;
    height: 200px;
    background-color: #001528;
    margin: 10px 0;
    transition: all 0.8s;
  }
  .div1:hover {
    box-shadow: 0px 0px 20px 5px black;
  }
  .div2 {
    width: 300px;
    height: 300px;
    background-color: orange;
    transition: all 0.8s;
  }
  .div2:hover {
    box-shadow: 0px 0px 20px 5px orange;
  }
</style>
