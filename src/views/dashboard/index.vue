<template>
  <div id="dashboard">
    <div style="text-align: center;background-color: #eef1f6">
      <p class="count">待处理事项统计</p>
      <el-row>
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><div class="title">待修改价格<p>10单</p></div>
        <p>10笔订单待修改采购商价格</p>
        <p class="ulTitle">订单</p>
        <ul>
          <li v-for="i in arr" :key="i.id">{{ i.name }}</li>
        </ul>
      </el-col>
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><div class="title">待指派队长<p>10单</p></div>
        <p>10笔订单待指派队长</p>
        <p class="otherTitle">订单</p>
        <ul>
          <li v-for="i in arr" :key="i.id">{{ i.name }}</li>
        </ul>
      </el-col>
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><div class="title">待指派导游<p>10单</p></div>
        <p>10笔订单待指派导游</p>
        <p class="otherTitle">订单</p>
        <ul>
          <li v-for="i in arr" :key="i.id">{{ i.name }}</li>
        </ul>
      </el-col>
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><div class="title">待审核体现<p>10单</p></div>
        <p>10笔提现待财务审核</p>
        <p class="otherTitle">订单</p>
        <ul>
          <li v-for="i in arr" :key="i.id">{{ i.name }}</li>
        </ul>
      </el-col>
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><div class="title">待审核退单<p>10单</p></div>
        <p>10笔退款待财务审核</p>
        <p class="otherTitle">订单</p>
        <ul>
          <li v-for="i in arr" :key="i.id">{{ i.name }}</li>
        </ul>
      </el-col>
      <el-col :xs="4" :sm="4" :md="4" :lg="4" :xl="4"><div class="title">待处理投诉<p>10单</p></div>
        <p>10笔订单待处理投诉</p>
        <p class="otherTitle">订单</p>
        <ul>
          <li v-for="i in arr" :key="i.id">{{ i.name }}</li>
        </ul>
      </el-col>
      </el-row>
    </div>

    <div style="margin-top: 25px">
      <div class="notice">
        <p style="color: #999999;">公告</p>
        <p class="noticeTitle">标题标题标题</p>
        <p class="noticeUserName">发布人</p>
        <p class="noticeTime">2029-09-09 15:04</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nam fermentum, nulla luctus pharetra vulputate, felis tellus mollis orci, sed rhoncus sapien nunc eget.</p>
      </div>
      <div class="account">
        <p style="color: #999999;margin-left: 20px">新增审核账号统计</p>
        <table>
          <tr>
            <td class="first"></td>
            <td class="second">网站账号</td>
            <td>APP账号</td>
          </tr>
          <tr>
            <td>今日</td>
            <td>20</td>
            <td>20</td>
          </tr>
          <tr>
            <td>昨日</td>
            <td>20</td>
            <td>20</td>
          </tr>
          <tr>
            <td>本周</td>
            <td>20</td>
            <td>20</td>
          </tr>
          <tr>
            <td>本月</td>
            <td>20</td>
            <td>20</td>
          </tr>
        </table>
      </div>
    </div>
  </div>
</template>

<script>

  export default {
    data() {
      return {
        arr: [{id: 1, name: '366429805'},{id: 2, name: '366429805'},{id: 3, name: '366429805'},{id: 4, name: '366429805'}]
      }
    }
  }
</script>

<style rel="stylesheet/scss" lang="scss">
  #dashboard {
    font-size: 14px;
    .count {
      text-align: left;
      margin: 0 0 5px 20px;
      padding-top: 15px;
      color: #999999;
    }
    .title {
      width: 77px;
      height: 77px;
      border: 1px solid #999999;
      border-radius: 50%;
      padding-top: 20px;
      margin: 0 auto;
      background-color: white;
      color: #333;
    }
    .ulTitle {
      text-align: left;
      margin: 0 0 0 20px;
    }
    .otherTitle {
      text-align: left;
      margin: 0 0 0 40px;
    }
    ul {
      list-style: none;
      padding: 0;
      margin: 0;
      line-height: 25px;
    }
    .notice {
      display: inline-block;
      width: 59%;
      float: left;
      padding-left: 20px;
      background-color: #eef1f6;
      .noticeTitle {
        margin-left: 40%;
      }
      .noticeUserName {
        display: inline-block;
        margin-left: 50%;
      }
      .noticeTime {
        display: inline-block;
        margin-left: 30px;
      }
    }
    .account {
      display: inline-block;
      width: 39%;
      background-color: #eef1f6;
      float: right;
      table {
        text-align: center;
        line-height: 40px;
        .first {
          width: 30%;
        }
        .second {
          width: 50%;
        }
      }
    }
  }
</style>
