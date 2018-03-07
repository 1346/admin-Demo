<template>
  <el-breadcrumb class="app-breadcrumb" separator="/">
    <transition-group name="breadcrumb">
      <el-breadcrumb-item v-for="(item,index)  in levelList" :key="item.path" v-if="item.name">
        <span v-if="item.redirect==='noredirect'||index==levelList.length-1" class="no-redirect">{{item.name}}</span>
        <router-link v-else :to="item.redirect||item.path">{{item.name}}</router-link>
      </el-breadcrumb-item>
    </transition-group>
    <p class="welcome hidden-md-and-down">hi,你好，亲爱的{{ introduction }}。   Eyes can't see anything, should be to look for it with all your heart.</p>
  </el-breadcrumb>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    created() {
      this.getBreadcrumb()
    },
    data() {
      return {
        levelList: null
      }
    },
    watch: {
      $route() {
        this.getBreadcrumb()
      }
    },
    computed: {
      ...mapGetters([
        'sidebar',
        'avatar',
        'name',
        'introduction'
      ])
    },
    methods: {
      getBreadcrumb() {
        let matched = this.$route.matched.filter(item => item.name)
        const first = matched[0]
        if (first && first.name !== '首页') {
          matched = [{ path: '/', name: '首页' }].concat(matched)
        }
        this.levelList = matched
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
  .app-breadcrumb.el-breadcrumb {
    display: inline-block;
    font-size: 14px;
    line-height: 50px;
    margin-left: 10px;
    .no-redirect {
      color: #97a8be;
      cursor: text;
    }
    .welcome {
      display: inline-block;
      margin: 0 0 0 30px;
    }
  }
</style>
