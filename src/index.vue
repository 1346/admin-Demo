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
        next: '新建next分支'
      }
    },
    created() {
      this.getInfo();
    },
    methods: {
      getInfo() {
        this.$http.post('src/data/cartData.json').then(response => {
          const res = response;
          if (res.status > 0) {
          }
        })
      }
    }
  }
</script>
