<template>
  <div>
    <p>这是一个首页</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {

      }
    },
    created() {
      this.getInfo();
    },
    methods: {
      getInfo() {
        this.$http.get('/cartData.json').then(response => {
          const res = response;
          if (res.status > 0) {

          }
        })
      }
    }
  }
</script>
