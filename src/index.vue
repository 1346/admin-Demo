<template>
  <div>
    <p>这是一个首页</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
<<<<<<< HEAD
        ceshi: '这是一个测试数据',
        ceshiAgain: '这是一个又是测试数据',
        ceshixixixi: 'asfasfasfa'
=======

>>>>>>> ceshi
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
            console.log(123)
          }
        })
      }
    }
  }
</script>
