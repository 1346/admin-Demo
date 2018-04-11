<template>
  <div id="demo_demoStore">
    <div>
      <span>服务等级：</span>
      <span>{{ model.driver_category_name }}</span>
      <tip tip_class="styleClass">
        <p>最多人数{{ model.max_steats }}人，最多行李{{ model.max_bag }}件（24寸），一个儿童座椅1.5个座位</p>
      </tip>
    </div>
    <div>
      <span>出行车型：</span>
      <span>{{ model.car_category_name }}</span>
      <tip tip_class="styleClass">
        <p v-for="item in model.driver_category_tags" :key="item.key">{{ item }}</p>
      </tip>
    </div>
    <div>
      <span>test</span>
      <tip tip_class=""></tip>
    </div>

    <i class="icon-ic_wenhao icon"></i>

  </div>
</template>

<script>
  import Tip from '../../components/tip';
  import { getTipInfo } from "../../api/tip";
  import Rx from 'rxjs/Rx'

  export default {
    components: { Tip },
    data() {
      return {
        model: {}
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
        getTipInfo().then(({ data: res }) => {
          if (res.status > 0) {
            this.model = res.data;
          }
        })
      }
    }
  }
</script>

<style lang="scss">
  #demo_demoStore {
    .icon {
      display: block;
    }
  }
</style>

