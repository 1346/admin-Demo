<template>
  <div>
    <el-button type="info" :loading="loadingMe">
      <span v-if="loadingMe === false">点击旁边的按钮会进入loading状态</span>
      <span v-if="loadingMe === true">再次点击会退出loading状态</span>
    </el-button>
    <el-button type="text" @click="loadingMe = !loadingMe"><svg-icon iconClass="edit" class="editIcon"></svg-icon></el-button>
    <el-button type="text" icon="el-icon-loading"></el-button>

    <div style="margin: 20px;height: 250px">
    <div class="png">
      <img class="img-item" src="../../assets/img1.png"/>
    </div>
    <div class="gif">
      <img src="../../assets/gif1.gif"/>
    </div>
      <div class="scoped"></div>
    </div>
    <!--<div class="textAlign">-->
      <!--<p>测试测试测试测试测试测试测试测试测试测试测试测试</p>-->
      <!--<p>测试测试测试测试测试测试测试测试测试测试测试测试</p>-->
      <!--<p>测试测试测试测试测试测试测试测试测试测试测试测试</p>-->
    <!--</div>-->

    <div class="todo">
      <div class="todo-header">
        <div class="iconDown" @click="downClick">
        <svg-icon :iconClass="downIcon"></svg-icon>
        </div>
        <input v-model="txt" type="text" placeholder="this is txt area" @keyup.enter="enterTxt"/>
      </div>
      <div class="todo-body">
        <ul v-for="item in txtArr" :key="item.id">
          <div class="iconSvg" @click="checkboxClick(item)">
          <svg-icon :iconClass="item.icon"></svg-icon>
          </div>
          <!--<input type="checkbox" v-model="item.isOk" class="checkboxStyle" @change="checkboxClick(item)" />-->
          <li v-bind:class="{ isOk: item.isOk }">{{item.txt}}</li>
        </ul>
      </div>
      <div class="todo-footer"></div>
    </div>

  </div>
</template>

<script>

  export default {
    data() {
      return {
        loadingMe: false,
        txt: undefined,
        txtArr: [],
        isOk: false,
        icon: 'no',
        downIcon: 'no'
      }
    },
    created() {
    },
    methods: {
      enterTxt(val) {
        if (val.target.value.trim()) {
          this.txtArr.push({
            txt: this.txt,
            isOk: this.isOk,
            icon: this.icon
          });
        }
        this.txt = undefined;
      },
      downClick() {
        var arr =  this.txtArr;
        debugger
        if (this.downIcon === 'no') {
          this.txtArr = arr.map(item => {
            return ({
              isOk: item.isOk = true,
              txt: item.txt,
              icon: item.icon = 'ok'
            })
          })
          this.downIcon = 'ok';
        } else {
          this.txtArr = arr.map(item => {
            return ({
              isOk: item.isOk = false,
              txt: item.txt,
              icon: item.icon = 'no'
            })
          })
          this.downIcon = 'no';
        }
      },
      checkboxClick(val){
        val.isOk = !val.isOk;
        val.isOk ? val.icon = 'ok' : val.icon = 'no';
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .editIcon {
    width: 1.5em;
    height: 1.5em;
  }
  .png {
    width: 300px;
    height: 200px;
    display: inline-block;
    img {
      width: 100%;
      height: 100%;
      transition: all 0.5s;
    }
    img:hover {
      transform: scale(1.1);
    }
  }
  .gif {
    width: 70px;
    height: 70px;
    display: inline-block;
    position: relative;
    border-radius: 50%;
    border: 5px solid #fff;
    top: 35px;
    right: 260px;
    z-index: 101;
    img {
      width: 100%;
      height: 100%;
      border-radius: 50%;
      transition: all 0.5s;
    }
    :hover{
      transform-origin: 90% 40%;
      transform: rotate(-90deg);
    }
  }
  .scoped {
    display: inline-block;
    width: 70px;
    height: 70px;
    border: 5px solid #fff;
    border-radius: 50%;
    background-color: red;
    position: relative;
    top: 40px;
    right: 335px;
    z-index: 100;
  }
  .textAlign {
    color: black;
    text-align-last: justify;
    text-shadow: 0px 20px black;
  }
  .todo {
    width: 200px;
    height: 100%;
    border: 1px solid;
    svg {
      width: 1em;
      height: 1em;
    }
    .todo-header {
      .iconDown {
        display: inline-block;
        margin-left: 5px;
        vertical-align: middle;
      }
      input {
        width: 172px;
      }
    }
    .todo-body {
      ul {
        padding-left: 0px;
        .isOk {
          text-decoration: line-through;
          color: #ccc;
        }
      }
      .checkboxStyle {
        margin: 0 5px;
      }
      li {
        list-style: none;
        display: inline-block;
      }
      .iconSvg {
        display: inline-block;
        margin: 0 5px;
        vertical-align: middle;
      }
    }
  }
</style>
