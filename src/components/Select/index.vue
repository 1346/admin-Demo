<template>
      <div class="selectDownTxt">
          <li @click="$emit('click')"><slot></slot></li>
      </div>
</template>

<script>
  export default {
    name: 'Select',
    props: ['val'],
    data() {
      return {
      }
    },
    methods: {

    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    input {
      -webkit-appearance: none;
      border-radius: 4px;
      border: 1px solid #dcdfe6;
      color: #606266;
      display: inline-block;
      height: 40px;
      line-height: 1;
      outline: none;
      padding: 0 15px;
      transition: border-color .2s cubic-bezier(.645,.045,.355,1);
      width: 100%;
      font-size: 14px;
    }
    input:focus{
      border-color: #409eff;
    }
    input:hover{
      border-color: #409eff;
    }
    input::-webkit-input-placeholder {
      color: #ccc;
      font-size: 14px;
    }
    .selectDownTxt {
      border: 1px solid #dcdfe6;
      margin: 0;
      width: 100%;
      ul {
        margin: 0;
        padding: 6px 0;
        box-sizing: border-box;
      }
    }
    li {
      padding: 0 20px;
      list-style: none;
      cursor: pointer;
      color: #606266;
      line-height: 34px;
      height: 34px;
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      font-size: 14px;
    }
    li:hover {
      background-color: #ccc;
    }
    .bgColor {
      background-color: #ccc;
    }
</style>
