<template>
  <div style="width:100%">
    <div style="width:100%;display:flex">
      <div style="width:60%">
        <div class="sign">
          <el-tabs style="margin-left:5px">
            <el-tab-pane label="必做任务">
              <el-tag>流失挽回</el-tag>
              <el-tag>理财到期</el-tag>
              <el-tag>定期到期</el-tag>
              <el-tag>生日新客</el-tag>
              <el-table :data="tableData" style="width: 90%;margin:30px">
                <el-table-column prop="name" label="客户姓名"></el-table-column>
                <el-table-column prop="name" label="客户号"></el-table-column>
                <el-table-column prop="date" label="联系方式"></el-table-column>
                <el-table-column prop="name" label=" 资产减少额"></el-table-column>
                <el-table-column prop="name" label=" 已维护人"></el-table-column>
                <el-table-column label=" 操作">
                  <template slot-scope="{}">
                    <el-button type="text" size="small" @click="gotask">处理</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="精准营销任务">
              <el-table :data="tableData" style="width: 90%;margin:30px">
                <el-table-column prop="name" label="客户姓名"></el-table-column>
                <el-table-column prop="name" label="客户号"></el-table-column>
                <el-table-column prop="date" label="联系方式"></el-table-column>
                <el-table-column prop="name" label=" 资产减少额"></el-table-column>
                <el-table-column prop="name" label=" 已维护人"></el-table-column>
                <el-table-column label=" 操作">
                  <template slot-scope="{}">
                    <el-button type="text" size="small">处理</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="自选任务">
              <el-table :data="tableData" style="width: 90%;margin:30px">
                <el-table-column prop="name" label="客户姓名"></el-table-column>
                <el-table-column prop="name" label="客户号"></el-table-column>
                <el-table-column prop="date" label="联系方式"></el-table-column>
                <el-table-column prop="name" label=" 资产减少额"></el-table-column>
                <el-table-column prop="name" label=" 已维护人"></el-table-column>
                <el-table-column label=" 操作">
                  <template slot-scope="{}">
                    <el-button type="text" size="small">处理</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="临时任务">
              <el-table :data="tableData" style="width: 90%;margin:30px">
                <el-table-column prop="name" label="客户姓名"></el-table-column>
                <el-table-column prop="name" label="客户号"></el-table-column>
                <el-table-column prop="date" label="联系方式"></el-table-column>
                <el-table-column prop="name" label=" 资产减少额"></el-table-column>
                <el-table-column prop="name" label=" 已维护人"></el-table-column>
                <el-table-column label=" 操作">
                  <template slot-scope="{}">
                    <el-button type="text" size="small">处理</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
            <el-tab-pane label="预约任务">
              <el-table :data="tableData" style="width: 90%;margin:30px">
                <el-table-column prop="name" label="客户姓名"></el-table-column>
                <el-table-column prop="name" label="客户号"></el-table-column>
                <el-table-column prop="date" label="联系方式"></el-table-column>
                <el-table-column prop="name" label=" 资产减少额"></el-table-column>
                <el-table-column prop="name" label=" 已维护人"></el-table-column>
                <el-table-column label=" 操作">
                  <template slot-scope="{}">
                    <el-button type="text" size="small">处理</el-button>
                  </template>
                </el-table-column>
              </el-table>
            </el-tab-pane>
          </el-tabs>
        </div>
        <div class="sign">123</div>
        <div class="sign">132</div>
      </div>
      <div style="width:40%">
        <div class="sign">
          <div>个人信息</div>
        </div>
        <div class="sign">
          <div>个人信息</div>
        </div>
        <div class="sign">
          <div>个人信息</div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  },
  methods: {
    gotask() {
      this.$router.push({
        path: "/task"
      });
    }
  }
};
</script>
 <style  scoped>
.sign {
  margin: 10px;
  background-color: #fff;
  border: 0.5px solid #eee;
}
</style>
