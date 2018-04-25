<template>
  <div id="demo_demoStore">
    <div>
      <span>服务等级：</span>
      <span>{{ model.driver_category_name }}</span>
      <tip tip_class="styleClass" iconClass="books">
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

    <estore></estore>

    <!--<el-input v-model="count"></el-input>-->
    <div v-show="show">
    <p>{{ count }}</p>
    <el-button @click="addCount">++</el-button>
    <el-button @click="lessCount">--</el-button>
    </div>
    <!--<p>{{ introduction }}</p>-->
    <el-button type="primary" @click="showOk">show</el-button>
  </div>
</template>

<script>
  import Tip from '../../components/tip';
  import Estore from '../../components/demo';
  import { getTipInfo } from "../../api/tip";
  import Rx from 'rxjs/Rx'
  import { mapGetters,mapActions } from 'vuex';

export default {
  components: { Tip, Estore },
  data() {
    return {
      model: {},
      a: 10
    }
  },
  computed: {
    ...mapGetters([
      'count',
      'show'
    ])
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
    },
    addCount() {
      try {
        this.$store.dispatch('increment', this.a);
      } catch (err) {
        console.log(err)
      }
      // this.$store.commit('demoMutationAdd', this.a)
    },
  ...mapActions({
    lessCount: 'demoMutationLess',
    // showOk: 'isShow'
  }),
  showOk() {
      this.$store.dispatch('isShow')
  }
    // lessCount() {
    //   this.$store.dispatch('demoMutationLess');
    //   // this.$store.commit('demoMutationLess')
    // }
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

