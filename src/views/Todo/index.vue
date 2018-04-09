<template>
  <div>
    <div class="todo">
      <div class="todo-header">
        <div class="iconDown" @click="downClick">
          <svg-icon :iconClass="downIcon"></svg-icon>
        </div>
        <input v-focus v-model="txt" type="text" placeholder="this is txt area" @keyup.enter="enterTxt"/>
      </div>
      <div class="todo-body">
        <ul v-for="item in txtArr" :key="item.id">
          <div class="iconSvg" @click="checkboxClick(item)">
            <svg-icon :iconClass="item.icon"></svg-icon>
          </div>
          <!--<input type="checkbox" v-model="item.isOk" class="checkboxStyle" @change="checkboxClick(item)" />-->
          <li v-bind:class="{ isOk: item.isOk }">{{item.txt}}</li>
          <div class="deleteIcon" @click="deleteLi(item)">
            <svg-icon iconClass="delete"></svg-icon>
          </div>
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
        txt: undefined,
        txtArr: [],
        isOk: false,
        icon: 'no',
        downIcon: 'no',
      }
    },
    directives: {
      focus: {
        // v-focus指令定义
        inserted: function (el) {
          el.focus()
        }

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
      deleteLi(val) {
        this.txtArr.splice(this.txtArr.indexOf(val), 1)
      },
      checkboxClick(val){
        val.isOk = !val.isOk;
        val.isOk ? val.icon = 'ok' : val.icon = 'no';
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .todo {
    width: 200px;
    height: 100%;
    background-color: #fff;
    svg {
      width: 1em;
      height: 1em;
    }
    .todo-header {
      .iconDown {
        display: inline-block;
        margin-left: 5px;
        vertical-align: middle;
        color: #ccc;
      }
      input {
        width: 172px;
        border: none;
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
        cursor: pointer;
      }
      .deleteIcon {
        float: right;
        margin-right: 5px;
        cursor: pointer;
      }
    }
  }
</style>
