<template>
  <div id="app-icon">
    <span class="icon-title">
      <a href="http://iconfont.cn/collections/detail?spm=a313x.7781069.1998910419.d9df05512&cid=7406" target="_blank">原创作者链接在此</a>
    </span>
      <div class="iconDiv" v-for="item in iconsMap" :key="item">
      <svg-icon :iconClass="item"></svg-icon>
        <span>{{ item }}</span>
      </div>
    <span class="icon-title">
     下面的是随便找的图标全是这个链接里面的 <a href="http://iconfont.cn" target="_blank">链接在此</a>
    </span>
    <div class="iconDiv" v-for="item in otherIconsMap" :key="item">
      <svg-icon :iconClass="item"></svg-icon>
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
  import icons from './generateIconsView'

  export default {
    name: 'icons',
    data() {
      return {
        iconsMap: [],
        otherIconsMap: []
      }
    },
    created() {
      this.getIcons();
    },
    methods: {
      getIcons() {
        icons.state.iconsMap.map((i) => {
          (i.default.id.indexOf('y') > 0) ? this.iconsMap.push(i.default.id.split('icon-')[1]) : this.otherIconsMap.push(i.default.id.split('icon-')[1]);
        });
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  #app-icon {
    text-align: center;
    .svg-icon {
      width: 3em;
      height: 3em;
    }
    .iconDiv {
      display: inline-block;
      text-align: center;
      margin: 20px;
      cursor: pointer;
      width: 12.5%;
      height: 120px;
      span {
        display: block;
        margin-top: 10px;
      }
    }
    .icon-title {
      line-height: 60px;
      display: block;
      background-color: #ccc;
    }
  }
</style>
