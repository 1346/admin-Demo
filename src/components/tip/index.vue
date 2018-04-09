<template>
  <div class="tip" @mouseenter="mouseEnter" @mouseleave="mouseLeave">
    <svg-icon iconClass="question" class="icon"></svg-icon>
    <div class="tip-content-w" :class="{ hidden: isShow }">
      <div class="tip-content" :class="tip_class">
        <slot></slot>
      </div>
    </div>
  </div>

</template>

<script>
  export default {
    name: 'tip',
    props: ['tip_class'],
    // props: {
    //   tip_class: {
    //     type: String
    //   }
    // },
    data() {
      return {
        isShow: true
      }
    },
    methods: {
      mouseEnter() {
        this.isShow = false;
      },
      mouseLeave() {
        this.isShow = true;
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  @import "../../style/components.scss";

  .tip {
    display: inline-block;
    margin-top: 10px;
    .tip-content-w {
      position: absolute;
      margin-left: 20px;
      margin-top: -21px;
      z-index: 3;
    }
    .hidden {
      display: none;
    }
    .icon {
      font-size: 20px;
    }
  }
</style>
