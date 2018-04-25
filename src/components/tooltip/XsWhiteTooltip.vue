<template>
    <div id="XsWhiteTooltip">
      <div class="xs-white-tooltip" :type="type">
        <div class="xs-white-tooltip-content">
          <slot></slot>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "XsWhiteTooltip",
      props: ['type']
    }
</script>

<style lang="scss" scoped>
  #XsWhiteTooltip {
    .xs-white-tooltip {
      min-width: 80.7px;
      display: inline-block;
      min-height: 40px;
      position: relative;
      background: #FFFFFF;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.10);
      &:after {
        border: 5.7px solid transparent;
        content: ' ';
        height: 0;
        position: absolute;
        width: 0;
        top: 50%;
        transform: translateY(-50%);
        left: 100%;
        border-left-color: #ffffff;
      }
      &:before {
        border: 2.5px solid transparent;
        content: ' ';
        height: 0;
        position: absolute;
        width: 0;
        top: 45%;
        transform: rotate(45deg);
        border-left-color: #ffffff;
        left: 99%;
        box-shadow: 2px -2px 4px -1px rgba(0, 0, 0, 0.1)
      }
      .xs-white-tooltip-content {
        font-size: 16px;
        line-height: 22px;
        height: inherit;
      }
      &:hover {
        cursor: pointer;
      }
    }
    [type='gongzhonghao'] {
      min-width: 80.7px;
      display: inline-block;
      min-height: 40px;
      position: relative;
      background: #FFFFFF;
      box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.10);
      &:after {
        border: 5.7px solid transparent;
        content: ' ';
        height: 0;
        position: absolute;
        width: 0;
        top: 85%;
        transform: translateY(-50%);
        left: 100%;
        border-left-color: #ffffff;
      }
      &:before {
        border: 2.5px solid transparent;
        content: ' ';
        height: 0;
        position: absolute;
        width: 0;
        top: 83%;
        transform: rotate(45deg);
        border-left-color: #ffffff;
        left: 99%;
        box-shadow: 2px -2px 4px -1px rgba(0, 0, 0, 0.1)
      }
    }
  }
</style>
