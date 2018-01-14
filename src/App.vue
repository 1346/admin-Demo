<template>
  <div id="app">
    <router-view/>
    <router-link to="/HelloWorld">自带HelloWorld</router-link>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      dev: '这是dev分支上的修改',
      dev2: '测试一下修改同一文件'
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
