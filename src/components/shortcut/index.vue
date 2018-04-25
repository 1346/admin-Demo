<template>
    <div id="XsShortcut">
      <div class="xs-shortcut">

        <!--购物车-->
          <div class="xs-shortcut-first" @mouseenter="shoppingShow = false" @mouseleave="shoppingShow = true">
            <div class="xs-shortcut-shopping" :class="{ border: !shoppingShow }">
            <i class="icon-ic_shoppingcar icon"></i>
            </div>
            <xs-white-tooltip class="xs-shortcut-shopping-tooltip" :class="{ hidden: shoppingShow }">
              <span class="xs-shortcut-shopping-tooltip-content">购物车</span>
            </xs-white-tooltip>
          </div>

        <!--客服-->
          <div class="xs-shortcut-top" @mouseenter="kefuShow = false" @mouseleave="kefuShow = true">
            <div class="xs-shortcut-shopping" :class="{ border: !kefuShow }">
            <i class="icon-ic_kefu icon"></i>
              <slot name="kefu"></slot>
            </div>
            <xs-white-tooltip class="xs-shortcut-kefu-tooltip" :class="{ hidden: kefuShow }">
              <span class="xs-shortcut-shopping-tooltip-content">在线客服</span>
            </xs-white-tooltip>
          </div>

        <!--公众号-->
          <div class="xs-shortcut-top" @mouseenter="gongzhonghaoShow = false" @mouseleave="gongzhonghaoShow = true">
            <div class="xs-shortcut-shopping" :class="{ border: !gongzhonghaoShow }">
            <i class="icon-ic_gongzhonghao icon"></i>
            </div>
            <xs-white-tooltip class="xs-shortcut-gongzhonghao-tooltip" type="gongzhonghao" :class="{ hidden: gongzhonghaoShow }">
              <div class="xs-shortcut-gongzhonghao-code">二维码</div>
              <span class="xs-shortcut-gongzhonghao-tooltip-content">微信公众号</span>
            </xs-white-tooltip>
          </div>

        <!--反馈-->
          <div class="xs-shortcut-top" @mouseenter="feedbackShow = false" @mouseleave="feedbackShow = true">
            <div class="xs-shortcut-shopping" :class="{ border: !feedbackShow }">
            <i class="icon-ic_feedback icon"></i>
            </div>
            <xs-white-tooltip class="xs-shortcut-kefu-tooltip" :class="{ hidden: feedbackShow }">
              <span class="xs-shortcut-shopping-tooltip-content">意见反馈</span>
            </xs-white-tooltip>
          </div>

        <!--电话咨询-->
          <div class="xs-shortcut-top" @mouseenter="telephoneShow = false" @mouseleave="telephoneShow = true">
            <div class="xs-shortcut-shopping" :class="{ border: !telephoneShow }">
            <i class="icon-ic_telephone icon"></i>
            </div>
            <xs-white-tooltip class="xs-shortcut-telephone-tooltip" :class="{ hidden: telephoneShow }">
              <span class="xs-shortcut-telephone-tooltip-content">免费咨询：4006-123-980</span>
            </xs-white-tooltip>
          </div>

        <!--返回顶部-->
          <div class="xs-shortcut-top" @mouseenter="backtopShow = false" @mouseleave="backtopShow = true">
            <div class="xs-shortcut-shopping" :class="{ border: !backtopShow }">
            <i class="icon-ic_backtop icon"></i>
            </div>
            <xs-white-tooltip class="xs-shortcut-kefu-tooltip" :class="{ hidden: backtopShow }">
              <span class="xs-shortcut-shopping-tooltip-content">返回顶部</span>
            </xs-white-tooltip>
          </div>

      </div>
    </div>
</template>

<script>
    import XsTooltip from "../tooltip/index";
    import XsWhiteTooltip from "../tooltip/XsWhiteTooltip";
    export default {
        name: "XsShortcut",
      components: {XsWhiteTooltip, XsTooltip},
      data() {
        return {
          shoppingShow: true,
          kefuShow: true,
          gongzhonghaoShow: true,
          feedbackShow: true,
          telephoneShow: true,
          backtopShow: true,
        }
      },
      created() {
      },
      methods: {
      }
    }
</script>

<style lang="scss" scoped>
  #XsShortcut {
    .xs-shortcut {
      position: fixed;
      right: 5px;
      @mixin xs-shortcut-i {
        width: 40px;
        height: 40px;
        background: #FFFFFF;
        border: 1px solid #e6e6e6;
      }
      span {
        display: inline-block;
      }
      .xs-shortcut-shopping {
        width: 100%;
        height: 100%;
        border: 1px solid transparent;
        i {
          margin-top: -2px;
          margin-left: -2px;
        }
      }
      .xs-shortcut-top {
        @include xs-shortcut-i;
        margin-top: 5px;
      }
      .xs-shortcut-first {
        @include xs-shortcut-i;
      }
      .xs-shortcut-shopping-tooltip {
        margin-left: -90px;     /* 这个数值是根据tooltip的长度 + 4.3(尖角到正方形的部分) + 5.7(尖角的部分)  */
        margin-top: -39px;    /* 这个数值是一个正方形的高度 - 1(默认tooltip相对于正方形往下1px) */
      }
      .xs-shortcut-shopping-tooltip-content {
        margin: 10px 16px;
      }
      .xs-shortcut-kefu-tooltip {
        margin-left: -106px;    /* 这个数值是根据tooltip的长度 + 4.3(尖角到正方形的部分) + 5.7(尖角的部分)  */
        margin-top: -39px;
      }
      .xs-shortcut-gongzhonghao-tooltip {
        margin-left: -106px;    /* 这个数值是根据tooltip的长度 + 4.3(尖角到正方形的部分) + 5.7(尖角的部分)  */
        margin-top: -128px;     /* 这个数值是tooltip的高度 */
        .xs-shortcut-gongzhonghao-code {
          width: 96px;
          height: 96px;
          background-color: #ccc;
        }
        .xs-shortcut-gongzhonghao-tooltip-content {
          margin: 0 8px 10px 8px;
        }
      }
      .xs-shortcut-telephone-tooltip {
        margin-left: -230px;    /* 这个数值是根据tooltip的长度 + 4.3(尖角到正方形的部分) + 5.7(尖角的部分)  */
        margin-top: -39px;
        .xs-shortcut-telephone-tooltip-content {
          width: 195px;
          margin: 8px 9.5px 10px 15.5px;
          text-align: center;
        }
      }
      .border {
        cursor: pointer;
        border: 1px solid #E6E6E6;
      }
      .hidden {
        display: none;
      }
    }
  }
</style>
