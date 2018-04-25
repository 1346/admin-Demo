<template>
  <div id="button_index">
    <div style="margin-bottom: 50px">
    <c-input styleClass="IClass" v-model="input" placeholder="请输入手机号"><i class="icon-ic_ok icon"></i></c-input>
    <c-button styleClass="BClass" @click="showMore" :disabled="true">确认</c-button>
      <button :disabled="true">确认</button>
    </div>
    <div class="ic-div-selected" @click="checked(1)">
      <span class="ic-div-span-edit">填写信息</span>
      <i class="ic_selected" :class="{ 'icon-ic_selected': selected, 'icon-ic_unchecked': unchecked }"></i>
    </div>
    <div class="ic-div" @click="checked(2)">
      <span class="ic-div-span-submit">提交审核</span>
      <i class="icon-ic_unchecked ic_unchecked"></i>
    </div>
    <div class="ic-div" @click="checked(3)">
      <span class="ic-div-span-success">完成审核，注册成功</span>
      <i class="icon-ic_unchecked ic_unchecked"></i>
    </div>

    <c-input type="checkbox" styleClass="checkbox" @click="changeCheckbox">
      <span class="inner" slot="head"></span>
      <span>我已阅读并同意《平台服务条款》</span>
    </c-input>

    <el-tooltip class="item" effect="dark" content="L此邮箱已经被注册此邮箱已经被注册此邮箱已经被注册此邮箱已经被注册此邮箱已经被注册" placement="right" :hide-after="0">
      <el-button>左边</el-button>
    </el-tooltip>

    <div>
      <c-input></c-input>
      <xs-tooltip>safsafasdfsfhkajsfaklsjfaksjflaskjflaskjfalskfjlaskfjlsakfjl</xs-tooltip>
    </div>

  </div>
</template>

<script>
  import CButton from '../../components/Button';
  import CInput from '../../components/input';
  import XsTooltip from "../../components/tooltip/index";
    export default {
      components: {XsTooltip, CButton, CInput},
      data() {
        return {
            input: 'xixi',
          selected: true,
          unchecked: false
        }
      },
      methods: {
        showMore() {
          console.log(this.input)
        },
        checked(val) {
          console.log(val);
          if (val !== 1) {
            this.selected = false;
            this.unchecked = true;
          } else {
            this.selected = true;
            this.unchecked = false;
          }
        },
        changeCheckbox() {

        }
      }
    }
</script>

<style lang="scss">
  #button_index {
    .IClass {
      padding-right: 35px;
    }
    .icon {
      position: absolute;
      left: 274px;
      top: 50%;
      transform: translateY(-50%);
    }
    @mixin ic-span {
      position: absolute;
      line-height: 28px;
      font-size: 20px;
    }
    .ic-div-selected {
      display: inline-block;
      position: relative;
      .ic-div-span-edit {
        @include ic-span;
        padding: 26px 134px 26px 120px;
        color: #ffffff;
      }
      .ic_selected {
        display: inline-block;
      }
    }
    .ic_unchecked {
      display: inline-block;
    }
    .ic-div {
      display: inline-block;
      position: relative;
      margin-left: -22px;
      .ic-div-span-submit {
        @include ic-span;
        padding: 26px 128px 26px 126px;
        color: #4D4D4D;
      }
      .ic-div-span-success {
        @include ic-span;
        padding: 26px 77px;
        color: #4D4D4D;
      }
    }
    .checkbox {
      opacity: 0;
      outline: none;
      position: absolute;
      margin: 0;
      width: 0;
      height: 0;
      z-index: -1;
    }
    .inner {
      display: inline-block;
      position: relative;
      border: 1px solid #dcdfe6;
      box-sizing: border-box;
      width: 16px;
      height: 16px;
      background-color: #fff;
      z-index: 1;
      vertical-align: middle;
      margin-bottom: 2px;
      transition: border-color .25s cubic-bezier(.71,-.46,.29,1.46),background-color .25s cubic-bezier(.71,-.46,.29,1.46);
      &:after {
        transform: rotate(45deg) scaleY(1);
        box-sizing: content-box;
        content: "";
        border: 3px solid #000;
        border-left: 0;
        border-top: 0;
        height: 7px;
        left: 4px;
        position: absolute;
        top: 1px;
        width: 3px;
        transition: transform .15s cubic-bezier(.71,-.46,.88,.6) .05s;
        transform-origin: center;
      }
    }
  }
</style>
