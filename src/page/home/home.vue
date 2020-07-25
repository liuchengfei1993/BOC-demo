<template>
  <div style="width:100%">
    <div style="width:100%;display:flex">
      <img style="width:518px;height:820px;margin:10px" src="@/image/top1.png" />
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
                <el-table-column prop="no" label="客户号"></el-table-column>
                <el-table-column prop="date" label="联系方式" width="150"></el-table-column>
                <el-table-column prop="down" label=" 资产减少额"></el-table-column>
                <el-table-column prop="man" label=" 已维护人"></el-table-column>
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
                <el-table-column prop="no" label="客户号"></el-table-column>
                <el-table-column prop="date" label="联系方式"></el-table-column>
                <el-table-column prop="down" label=" 资产减少额"></el-table-column>
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
        <img style="width:710px;height:320px;margin-left:10px" src="@/image/top2.png" />
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
          no: "13838212",
          name: "王小虎",
          date: "18803221832",
          address: "上海市普陀区金沙江路 1518 弄",
          down:"30万",
          man:"小六"
        },
        {
          no: "13838214",
          name: "李四",
          date: "18803322222",
          address: "上海市普陀区金沙江路 1517 弄",
          down:"10万",
          man:"小六"
        },
        {
          no: "13838219",
          date: "18803221331",
          name: "张三",
          address: "上海市普陀区金沙江路 1519 弄",
          down:"210万",
          man:"小六"
        },
        {
          no: "13838223",
          date: "18803446211",
          name: "李雷",
          address: "上海市普陀区金沙江路 1516 弄",
          down:"3万",
          man:"小六"
        },
      ],
    };
  },
  methods: {
    gotask() {
      this.$router.push({
        path: "/task",
      });
    },
  },
};
</script>
 <style  scoped>
.sign {
  margin: 10px;
  width:710px;
  background-color: #fff;
  border: 0.5px solid #eee;
}
</style>
