<template>
  <div>
    {{ txt }}
    <Input placeholder="" v-model="txt" @click="visible = !visible"/>
    <Select v-show="visible" v-for="item in arr" :key="item.id" @click="selectTxt(item)">{{ item.name }}</Select>
  </div>
</template>

<script>
  import Select from '../../components/Select'
  import Input from '../../components/Select/input'

  export default {
    components: { Select, Input },
    data() {
      return {
        txt: '',
        arr: [{id:1,name:'123'},{id:2,name:'456'}],
        visible: false,
        active: true
      }
    },
    created() {

    },
    methods: {
      selectTxt(val) {
        this.txt = val.name;
        this.visible = false;
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">

</style>
