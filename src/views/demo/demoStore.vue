<template>
  <div>
    <e-store></e-store>

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
        <p v-for="item in model.driver_category_tags">{{ item }}</p>
      </tip>
    </div>

  </div>
</template>

<script>
  import EStore from '../../components/demo';
  import Tip from '../../components/tip';
  import { getTipInfo } from "../../api/tip";

  export default {
    components: { EStore, Tip },
    data() {
      return {
        model: {}
      }
    },
    created() {
      this.getInfo();
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
