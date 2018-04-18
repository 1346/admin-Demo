<template>
  <div id="button_index">
    <c-input styleClass="IClass" v-model="input" placeholder="请输入手机号"><i class="icon-ic_ok icon"></i></c-input>
    <c-button styleClass="BClass" @click="showMore">确认</c-button>
  </div>
</template>

<script>
  import CButton from '../../components/Button';
  import CInput from '../../components/input';
    export default {
      components: {CButton, CInput},
      data() {
        return {
            input: 'xixi',
        }
      },
      methods: {
        showMore() {
          console.log(this.input)
        }
      }
    }
</script>

<style lang="scss">
  .IClass {
    padding-right: 35px;
  }
  .icon {
    position: absolute;
    left: 274px;
    top: 50%;
    transform: translateY(-50%);
  }
</style>
