<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <el-table :data="tableMsg" border fit>
      <template v-for="item in tableArr">
        <el-table-column
          align="center"
          :label="item.name"
          :prop="item.id"
        >
        </el-table-column>
      </template>
    </el-table>

    <i class="iconClass">
      <svg-icon iconClass="testing-mouse"></svg-icon>
      <svg-icon iconClass="example"></svg-icon>
    </i>
    <i>
      <a href="#">下载<svg-icon iconClass="download"></svg-icon></a>
    </i>
  </div>
</template>

<script>
  const tableArr = [
    { name: '订单类型', id: 'type' },
    { name: '订单状态', id: 'status' },
    { name: '订单号', id: 'orderNo' },
    { name: '用车派单状态', id: 'assignedStatus' }
  ];
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      tableArr,
      tableMsg: undefined
    }
  },
  created() {
    this.getInfo();
  },
  methods: {
    getInfo() {
      this.tableMsg = [{ type: '一日包车', status: '订单退单', orderNo: '66666', assignedStatus: '派单完成' }]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.iconClass {
  font-size: 5em;
}
</style>
