<template>
  <div class="taskInfo">
    <el-container style="width:100%">
      <!-- 侧边个人信息 -->
      <el-aside width="25%" height='100%'>
        <div class="aside"> 
          <div style="height:170px;margin:12px;background-color:#fff">
            <!-- 客户画像 -->
          </div>
          <div style="height:88px;margin:12px;">
            <el-collapse >
              <!-- 用户标签 -->
              <el-collapse-item  name="1">
                <template slot="title">
                  <i  style="margin-left:2%;margin-top:2%">
                    <img src="../../image/userLabel.png" style="width:16.3px;height:15.8px">
                  </i>
                  <span style="margin-left:15px">用户标签</span>
                </template>
                <div style="margin-top:5px;display:flex;align-content:center;flex-wrap:wrap">
                  <div style="padding:5px 10px;margin:5px 5px;border:1px solid #CFECFF ;border-radius:4px;background-color:#CFECFF">
                    <span>分期达人</span>
                  </div>
                  <div style="padding:5px 10px;margin:5px 5px;border:1px solid #BDF4D3;border-radius:4px;background-color:#BDF4D3">
                    <span>中高端钻石级用户</span>
                  </div>
                  <div style="padding:5px 10px;margin:5px 5px;border:1px solid #F5D0BB;border-radius:4px;background-color:#F5D0BB ">
                    <span>专属用户</span>
                  </div>
                </div>
              </el-collapse-item>
              <!-- 用户认证 -->
              <el-collapse-item  name='2'>
                <template slot="title">
                  <i  style="margin-left:2%;margin-top:2%">
                    <img src="../../image/userApprove.png" style="width:16.3px;height:15.8px">
                  </i>
                  <span style="margin-left:15px">用户认证</span>
                </template>
                 <div style="margin-top:5px;display:flex;align-content:center;flex-wrap:wrap">
                  <div style="padding:5px 10px;margin:5px 10px;border:1px solid #D06565;border-radius:4px">
                    <i class="el-icon-success" style="color:#D06565"></i>
                    <span>交易密码</span>
                  </div>
                  <div style="padding:5px 10px;margin:5px 10px;border:1px solid #D06565;border-radius:4px">
                    <i class="el-icon-success" style="color:#D06565"></i>
                    <span>查询密码</span>
                  </div>
                  <div style="padding:5px 10px;margin:5px 10px;border:1px solid #CCCCCC;border-radius:4px">
                    <i class="el-icon-error" style="color:#CCCCCC"></i>
                    <span> CVV2 </span>
                  </div>
                  <div style="padding:5px 5px;margin:5px 10px;border:1px solid #D06565;border-radius:4px">
                    <span>风险核身：A1</span>
                  </div>
                </div>
              </el-collapse-item>
              <!-- 自助渠道活跃度及推广 -->
              <el-collapse-item  name="3">
                <template slot="title">
                  <i  style="margin-left:2%;margin-top:2%">
                    <img src="../../image/business.png" style="width:16.3px;height:15.8px">
                  </i>
                  <span style="margin-left:15px">自助渠道活跃度及推广</span>
                </template>
                 <div style="margin-top:5px;display:flex;align-content:center;flex-wrap:wrap">
                  <div style="padding:5px 10px;margin:5px 5px;border:1px solid #7AD6FF ;border-radius:4px">
                    <i style="margin-top:3%">
                      <img src="../../image/blue.png" alt="" style="width:12.5px;height:14px;margin-top: 5%">
                    </i>
                    <span>微信银行</span>
                  </div>
                  <div style="padding:5px 10px;margin:5px 5px;border:1px solid #FFC42B ;border-radius:4px">
                    <i style="margin-top:2%">
                      <img src="../../image/yellow.png" alt="" style="width:12.5px;height:14px;margin-top: 5%">
                    </i>
                    <span>网上银行</span>
                  </div>
                  <div style="padding:5px 10px;margin:5px 5px;border:1px solid #C3BBFF;border-radius:4px">
                    <i style="margin-top:2%">
                      <img src="../../image/violet.png" alt="" style="width:12.5px;height:14px;margin-top: 5%">
                    </i>
                    <span>手机银行</span>
                  </div>
                </div>
              </el-collapse-item>
              <!-- 沟通情况 -->
              <el-collapse-item  name="4">
                <template slot="title">
                  <i  style="margin-left:2%;margin-top:2%">
                    <img src="../../image/communicateInfo.png" style="width:16.3px;height:15.8px">
                  </i>
                  <span style="margin-left:15px">沟通情况</span>
                  <span style="margin-left:52%">更多</span>
                </template>
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column prop="maintainName" label="维护人" ></el-table-column>
                  <el-table-column prop='projectName' label="沟通项目"></el-table-column>
                  <el-table-column prop="maintainTime" label="沟通时间"></el-table-column>
                  <el-table-column prop="maintainRes" label="沟通结果"></el-table-column>
                </el-table>
              </el-collapse-item>
            </el-collapse>
          </div>
        </div>
      </el-aside>
      <el-main>
        <el-row :gutter="20">
          <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
          <el-col :span="12"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row >
          <el-col :span="24"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
        <el-row >
          <el-col :span="24"><div class="grid-content bg-purple"></div></el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      height: "",
      tableData: [
        {
          maintainName: "章三",
          projectName: "精准营销",
          maintainTime: "2018.09.02",
          maintainRes: "成功"
        },
        {
          maintainName: "李四",
          projectName: "生日关怀",
          maintainTime: "2018.09.08",
          maintainRes: "短信"
        },
        {
          maintainName: "王五",
          projectName: "新课回访",
          maintainTime: "2018.09.18",
          maintainRes: "已回访"
        },
        {
          maintainName: "小刘",
          projectName: "到期提示",
          maintainTime: "2018.09.20",
          maintainRes: "已提示"
        }
      ]
    };
  },
  mounted() {
    this.height = window.screen.height;
    console.log(this.height);
  }
};
</script>
<style scoped >
.taskInfo {
  font-size: 16px;
  width: 100%;
}
.el-row {
  margin-bottom: 20px;
}
.el-col {
  border-radius: 2%;
}
.bg-purple-dark {
  background: #ffffff;
}
.bg-purple {
  background: #ffffff;
}
.bg-purple-light {
  background: #ffffff;
}
.grid-content {
  border-radius: 2%;
  min-height: 222px;
}
.row-bg {
  padding: 2% 0;
  background-color: #f9fafc;
}
.el-collapse-item {
  margin-top: 2%;
}
.el-table__header {
  padding: 0;
}
</style>
