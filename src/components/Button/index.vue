<template>
  <div>
    <button class="xs-button" :class="styleClass" @click="$emit('click')" :disabled="disabled"><slot></slot></button>
  </div>
</template>

<script>
  export default {
    name: 'EButton',
    props: {
      styleClass: {
        type: String
      },
      disabled: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {

      }
    },
    created() {
      if (this.disabled === true) {
        console.log(23132)
      }
    }
  }
</script>

<style lang="scss">
  .xs-button {
    padding: 0;
    width: 304px;
    height: 40px;
    font-size: 14px;
    background-color: #ED0A2B;
    color: #FFFFFF;
    border: none;
    &:focus {
      outline: 0;
      border: none;
    }
    &:hover {
      cursor: pointer;
    }
  }
</style>
