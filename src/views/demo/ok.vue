<template>
  <div class="completion-input-box">
    {{ projectN }}
    <FromList  :text="'创业项目名称'" placeholder="placeholder" v-model="projectN" @click="xixi(projectN)"></FromList>
    {{ companyN }}
    <FromList  :text="'所属公司名称'" v-model="companyN"></FromList>
    {{ mechanismN }}
    <FromList  :text="'所属投资机构名称'" v-model="mechanismN"></FromList>

    <div>
      <input class="textInput" type="text" placeholder="测试一下" @input="changeInput()" @click="setPlaceholder()" />
      <div class="test"></div>
    </div>

    <div>测试</div>
    <div>测试 * 2</div>

  </div>
</template>
<script>
  import FromList from './index.vue';
  import * as Rx from 'rxjs'

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
      }
    },
    created() {
      this.getInfo();
      var myObservable = Rx.Observable.create(observer => {
        observer.next('foo');
        setTimeout(() => observer.next('bar'), 1000);
      });
      myObservable.subscribe(value => console.log(value));
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
