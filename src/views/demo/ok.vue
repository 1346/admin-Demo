<template>
  <div class="completion-input-box">
    {{ projectN }}
    <FromList  :text="'创业项目名称'" placeholder="placeholder" v-model="projectN" @click="xixi(projectN)"></FromList>
    {{ companyN }}
    <FromList  :text="'所属公司名称'" v-model="companyN"></FromList>
    {{ mechanismN }}
    <FromList  :text="'所属投资机构名称'" v-model="mechanismN"></FromList>

    <div>
      <p>起送金额：20元</p>
      <p>配送费：{{ peisong }}元</p>
      <p>您买了{{ food.name }} * {{ food.count }} === ￥{{ food.price }}元/份</p>
      <p>共计：{{ totalPrice }}元</p>
    </div>


  </div>
</template>
<script>
  import FromList from './index.vue';

  export default {
    name: 'search',
    components: {
      FromList
    },
    data() {
      return {
        projectN: 'sfsaf',         // 创业项目名称
        companyN: 'asdfsadf',         // 所属公司名称
        mechanismN: 'xxxxx',        // 所属机构名称
        food: { id:1, name:'红烧牛肉面', price: 20, count: 1},
        peisong: 5
      }
    },
    created() {
      this.getInfo();
    },
    computed: {
      totalPrice() {
        return this.food.price * this.food.count + this.peisong
      }
    },
    methods: {
      getInfo() {

      },
      xixi(val) {
        console.log(val)
      },
      changeInput() {
        var x = $(".textInput").val();
        console.log(x);
      },
      setPlaceholder() {
        console.log($(".textInput").attr('placeholder'));
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  .textInput {
    width: 150px;
  }
</style>
