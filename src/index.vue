<template>
  <div>
    <p>这是一个首页</p>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        ceshi: '这是一个测试数据',
        ceshiAgain: '这是一个又是测试数据',
        ceshixixixi: 'asfasfasfa',
        addOther: '修改master分支上的同一文件同一地方',
        next: '新建next分支'
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
