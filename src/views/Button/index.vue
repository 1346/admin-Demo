<template>
  <div class="Button-index">
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

    <div class="ceshi"></div>
    <div style="width: 100px;height: 100px;background-color: orange"></div>

    <!--<Button>jfslajflskajflakj</Button>-->

    <div class="parent">
      <e-button>
        <template slot-scope="props">
          <span>hello from parent</span><br/>
          <span>{{ props.text }}</span><br/>
          <span>{{ props.text1 }}</span>
        </template>
      </e-button>
    </div>

  </div>
</template>

<script>
  import EButton from '../../components/Button'

  export default {
    components: {
      EButton
    },
    data() {
      return {
        loadingMe: false
      }
    },
    created() {
    },
    methods: {
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .Button-index {
    background-color: #ccc;
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
      :hover {
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
    .ceshi {
      width: 100px;
      height: 100px;
      background-color: #001528;
    }
  }
</style>
