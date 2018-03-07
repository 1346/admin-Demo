<template>
  <div>
    <input
      :placeholder="placeholder"
      :type="type"
      ref="input"
      :value="value"
      @input="$emit('input', $event.target.value)"
      @click="$emit('click')"/>
  </div>
</template>

<script>
  export default {
    name: 'Input',
    props: ['type', 'value', 'placeholder'],
    data() {
      return {

      }
    },
    methods: {
    }
  }
</script>

<style>
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
</style>
