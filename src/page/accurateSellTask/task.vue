<template>
  <div style="height:100%" id="task">
    <el-container>
      <el-main>
        <el-row :gutter="30" style="0 0 0 -15px">
          <el-col :span="9" class="">
            <div class="whiteBg aroundCol borderDC" style="height:116px;width:100%;padding:0 20px;">
              <div class="underDash leftRow" style="padding:10px 0">
                <img src="../../image/callOut_blue2.png" alt="" class="smallIcon">
                <div class="lightBlack">人工外呼量</div>
              </div>
              <el-row :gutter="30" style="width: 100%;">
                <el-col :span="8">
                  <div class="lightGrey textCenter">外呼总量</div>
                  <div class="lightBlack textCenter">{{callTolNum}}通</div>
                </el-col>
                <el-col :span="8" class="twoSideBorder">
                  <div class="lightGrey textCenter">外呼接通量</div>
                  <div class="lightBlack textCenter">{{calledNum}}通</div>
                </el-col>
                <el-col :span="8">
                  <div class="lightGrey textCenter">接通率</div>
                  <div class="lightBlack textCenter">{{callPercent}}%</div>
                </el-col>
              </el-row>
            </div>
          </el-col>
          <el-col :span="5" class="">
            <div class="whiteBg aroundCol borderDC" style="height:116px;width:100%;padding:0 20px;">
              <div class="underDash leftRow" style="padding:10px 0">
                <img src="../../image/message2.png" alt="" class="smallIcon">
                <div class="lightBlack">短信量</div>
              </div>
              <div class="rightRow">
                <span class="lightGrey">短信数量</span>
                <span class="lightBlack">{{messageNum}}条</span>
              </div>
            </div>

          </el-col>
          <el-col :span="5" class="">
            <div class="whiteBg aroundCol borderDC" style="height:116px;width:100%;padding:0 20px;">
              <div class="underDash leftRow" style="padding:10px 0">
                <img src="../../image/AI2.png" alt="" class="smallIcon">
                <div class="lightBlack">智能外呼量</div>
              </div>
              <div class="rightRow">
                <span class="lightGrey">外呼量</span>
                <span class="lightBlack">{{AICallNum}}条</span>
              </div>
            </div>

          </el-col>
          <el-col :span="5" class="">
            <div class="whiteBg aroundCol borderDC" style="height:116px;width:100%;padding:0 20px;">
              <div class="underDash leftRow" style="padding:10px 0">
                <img src="../../image/phoneBank_pink2.png" alt="" class="smallIcon">
                <div class="lightBlack">手机银行推送量</div>
              </div>
              <div class="rightRow">
                <span class="lightGrey">推送量</span>
                <span class="lightBlack">{{pushNum}}条</span>
              </div>
            </div>

          </el-col>
        </el-row>
        <el-row :gutter="20" class="whiteBg borderDC" style="margin:8px 0;padding:20px;">
          <el-col :span="5" class="">
            <div class="leftRow borderDC" style="height:42px;">
              <div class="font14 inputTitle">客户姓名</div>
              <div style="width:60%;">
                <!-- <el-input v-model="input" placeholder="请输入内容"></el-input> -->
                <input type="text" placeholder="请输入内容" class="inputBlock">
              </div>
            </div>

          </el-col>
          <el-col :span="5" class="">
            <div class="leftRow borderDC" style="height:42px;">
              <div class="font14 inputTitle">电话号码</div>
              <div style="width:60%;">
                <!-- <el-input v-model="input" placeholder="请输入内容"></el-input> -->
                <input type="text" placeholder="请输入内容" class="inputBlock">
              </div>
            </div>
          </el-col>
          <el-col :span="5" class="">
            <div class="leftRow borderDC" style="height:42px;">
              <div class="font14 inputTitle">证件号码</div>
              <div style="width:60%;">
                <!-- <el-input v-model="input" placeholder="请输入内容"></el-input> -->
                <input type="text" placeholder="请输入内容" class="inputBlock">
              </div>
            </div>
          </el-col>
          <el-col :span="7" class="">
            <div class="leftRow borderDC" style="height:42px;">
              <div class="font14 inputTitle">时间周期</div>
              <el-date-picker v-model="value1" type="daterange" range-separator="至" start-placeholder="开始日期"
                end-placeholder="结束日期" style="width:75%;border:none;padding:0 0 0 10px;align-items: baseline;">
              </el-date-picker>
            </div>
          </el-col>
          <el-col :span="2">
            <div class="search centerRow" style="height:42px;">
              <img src="../../image/search2.png" alt="" style="width:16px;height:17px;margin-right: 10px;">
              <div>搜索</div>
            </div>
          </el-col>
        </el-row>
        <el-row style="margin:0;" class="whiteBg borderDC">
          <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
            <el-tab-pane name="first">
              <span slot="label" class="leftRow"><img src="../../image/callOut_red2.png" class="tabICon"> 人工外呼</span>

            </el-tab-pane>
            <el-tab-pane name="second">
              <span slot="label" class="leftRow"><img src="../../image/message_pink2.png" class="tabICon"> 短信量</span>

            </el-tab-pane>
            <el-tab-pane name="third">
              <span slot="label" class="leftRow"><img src="../../image/AI2.png" class="tabICon"> 智能外呼</span>

            </el-tab-pane>
            <el-tab-pane name="fourth">
              <span slot="label" class="leftRow"><img src="../../image/phoneBank2.png" class="tabICon"> 手机银行推送</span>

            </el-tab-pane>
            <el-tab-pane name="forth">
              <span slot="label" class="leftRow"><img src="../../image/weChat2.png" class="tabICon"> 微信渠道进线</span>
            </el-tab-pane>
          </el-tabs>

          <el-table ref="multipleTable" :data="tableData" tooltip-effect="dark" style="width: 100%"
            @selection-change="handleSelectionChange">
            <el-table-column type="selection" width="55" align="center">
            </el-table-column>
            <el-table-column prop="name" label="员工姓名" width="120" align="center">
            </el-table-column>
            <el-table-column prop="jobName" label="岗位名称" width="120" align="center">
            </el-table-column>
            <el-table-column prop="creatTime" label="创建时间" sortable align="center">
            </el-table-column>
            <el-table-column prop="isUsed" width="120" label="是否使用" align="center">
            </el-table-column>
            <el-table-column prop="address" label="地址" align="center">
            </el-table-column>
            <el-table-column label="操作" width="120" align="center">
              <template slot-scope="scope">
                <el-button type="text" @click="handleEdit(scope.$index, scope.row)">查看详情</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-row>
      </el-main>
    </el-container>

  </div>
</template>
<script>
  export default {
    data() {
      return {
        input: '222',
        value1: '222',
        callTolNum: '185',
        calledNum: '85',
        callPercent: '90',
        messageNum: '15',
        AICallNum: '26',
        pushNum: '69',
        activeName: 'first',
        tableData: [{
          creatTime: '2016-05-03',
          name: '王小虎',
          jobName: "前端开发",
          address: '上海市普陀区金沙江路 1518 弄',
          isUsed: 'Sta'
        }, {
          creatTime: '2016-05-03',
          name: '王小虎',
          jobName: "前端开发",
          address: '上海市普陀区金沙江路 1518 弄',
          isUsed: 'Sta'
        }, {
          creatTime: '2016-05-03',
          name: '王小虎',
          jobName: "前端开发",
          address: '上海市普陀区金沙江路 1518 弄',
          isUsed: 'Sta'
        }, {
          creatTime: '2016-05-03',
          name: '王小虎',
          jobName: "前端开发",
          address: '上海市普陀区金沙江路 1518 弄',
          isUsed: 'Sta'
        }, {
          creatTime: '2016-05-03',
          name: '王小虎',
          jobName: "前端开发",
          address: '上海市普陀区金沙江路 1518 弄',
          isUsed: 'Sta'
        }],
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      },

      handleEdit(index, row) {
        console.log(index, row);
        this.$router.push({
          path:'/taskInfo',
          name: {'gender':'men'}
        });
      },

      handleSelectionChange(val) {
        this.multipleSelection = val;
      }
    }
  };
</script>
<style scoped>
  * {
    box-sizing: border-box;
  }

  .whiteBg {
    background: #fff;
  }

  .lightGrey {
    color: #999;
  }

  .lightBlack {
    color: #333;
  }

  .centerCol {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .aroundCol {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
  }

  .rightRow {
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
  }

  .leftRow {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
  }

  .centerRow {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .twoSideBorder {
    border-left: 1px solid #DCDCDC;
    border-right: 1px solid #DCDCDC;
  }

  .underDash {
    border-bottom: 1px dashed #DCDCDC;
    width: 100%;
  }

  .borderDC {
    border: 1px solid #DCDCDC;
  }

  .smallIcon {
    width: 28px;
    height: 24px;
    display: inline-block;
    margin-right: 8px;
  }

  .textCenter {
    text-align: center;
  }

  #task input.el-input__inner {
    border: none !important;
  }

  .font14 {
    font-size: 14px;
  }

  .inputTitle {
    padding: 8px 10px;
  }

  .inputBlock {
    border: none;
    width: 100%;
    border-left: 1px solid #dcdcdc;
    padding-left: 10px;
  }

  .search {
    color: #A71E32;
    font-size: 14px;
    border: 1px solid #A71E32;
  }

  .tabICon {
    width: 23px;
    height: 20px;
    margin-right: 10px;
  }
</style>