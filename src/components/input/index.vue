<template>
  <div style="position:relative;">
    <input
      :placeholder="placeholder"
      :type="type"
      ref="input"
      :value="value"
      class="xs-input"
      :class="styleClass"
      @input="$emit('input', $event.target.value)"
      @change="$emit('change', $event.target.value)"
      @click="$emit('click')"/>
    <slot></slot>
  </div>
</template>

<script>
    export default {
      name: 'CInput',
      props: ['type', 'value', 'placeholder', 'styleClass'],
    }
</script>

<style lang="scss">
  .xs-input {
    width: 304px;
    height: 40px;
    padding-left: 11.1px;
    padding-bottom: 10px;
    padding-top: 10px;
    font-size: 14px;
    border: 1px solid #E6E6E6;
    color: #000000;
    &::-webkit-input-placeholder { /* WebKit, Blink, Edge */
      color:    #CCCCCC;
    }
    &:-moz-placeholder { /* Mozilla Firefox 4 to 18 */
      color:    #CCCCCC;
    }
    &::-moz-placeholder { /* Mozilla Firefox 19+ */
      color:    #CCCCCC;
    }
    &:-ms-input-placeholder { /* Internet Explorer 10-11 */
      color:    #CCCCCC;
    }
  }
</style>
