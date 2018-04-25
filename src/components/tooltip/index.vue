<template>
  <div class="test-tip" :type="type">
    <div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
    export default {
        name: "XsTooltip",
      props: {
          type: {
            type: String,
            default: 'right'
          }
      }
    }
</script>

<style lang="scss" scoped>
  @mixin after {
    border: 5px solid transparent;
    content: ' ';
    height: 0;
    position: absolute;
    width: 0;
    top: 50%;
    transform: translateY(-50%);
  }
  .test-tip {
    display: inline-block;
    min-width: 176px;
    height: 40px;
    background: rgba(77,77,77,0.80);
    position: relative;
  }
  [type='right'] {
    &:after {
      @include after;
      right: 100%;
      border-right-color: rgba(77,77,77,0.80);
    }
  }
  [type='left'] {
    &:after {
      @include after;
      left: 100%;
      border-left-color: rgba(77,77,77,0.80);
    }
  }
</style>
