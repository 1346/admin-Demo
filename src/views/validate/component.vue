<template>
    <el-form-item label="活动名称" :prop="propOk">
      <el-input :v-model="Vmodel"></el-input>
    </el-form-item>
</template>

<script>
    export default {
      name: 'EForm',
      props: [ 'propOk', 'Vmodel' ]
    }
</script>

<style scoped>

</style>
