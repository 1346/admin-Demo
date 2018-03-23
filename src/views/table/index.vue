<template>
  <div>
    <p>table</p>
    <el-table :data="tableArr">
      <el-table-column
        prop="id"
        label="ID"
        width=""
      >
      </el-table-column>
      <el-table-column
        prop="name"
        label="名字"
        width=""
      >
      </el-table-column>
      <el-table-column
        prop="sex"
        label="性别"
        width=""
      >
      </el-table-column>
      <el-table-column
        prop="phone"
        label="电话"
        width=""
      >
      </el-table-column>
      <el-table-column
        prop="birth"
        label="出生日期"
        width=""
      >
      </el-table-column>
      <el-table-column
        prop="address"
        label="地址"
        width=""
      >
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
  import { getTableInfo } from "../../api/table";

  export default {
    data() {
      return {
        tableArr: []
      }
    },
    created() {
      this.getInfo();
    },
    methods: {
      getInfo() {
        getTableInfo().then(response => {
          const res = response.data;
          if(res.status > 0) {
            this.tableArr = res.data;
          }
        })
      }
    }
    }
</script>

<style scoped>

</style>
