<template>
  <div>
    <sidebar></sidebar>
    <p>这是一个首页</p>
  </div>
</template>

<script>
  import sidebar from "./components/sidebar";
  export default {
    components: {sidebar},
    comments: {
      sidebar
    },
    data() {
      return {
      }
    },
    created() {
      this.getInfo();
    },
    methods: {
      getInfo() {

      }
    }
  }
</script>
