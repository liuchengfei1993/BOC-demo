<template>
  <div class="taskInfo">
    <el-container style="width:100%">
      <!-- 侧边个人信息 -->
      <el-aside width="25%" height='100%'>
        <div class="aside">
          <div style="height:170px;margin:10px">
            <!-- 客户画像 -->
            <img v-if="gender === 'man'" src="../../image/manCard.png" alt="" style="width:100%;height:100%">
            <img v-else src="../../image/womanCard.png" alt="" style="width:100%;height:100%">
          </div>
          <div style="height:88px;margin:12px;">
            <el-collapse v-model="actveNode">
              <!-- 用户标签 -->
              <el-collapse-item name="1">
                <template slot="title">
                  <i style="margin-left:2%;margin-top:2%">
                    <img src="../../image/userLabel.png" style="width:16.3px;height:15.8px">
                  </i>
                  <span style="margin-left:15px">用户标签</span>
                </template>
                <div style="margin-top:5px;display:flex;align-content:center;flex-wrap:wrap">
                  <div
                    style="padding:5px 10px;margin:5px 5px;border:1px solid #CFECFF ;border-radius:4px;background-color:#CFECFF">
                    <span>分期达人</span>
                  </div>
                  <div
                    style="padding:5px 10px;margin:5px 5px;border:1px solid #BDF4D3;border-radius:4px;background-color:#BDF4D3">
                    <span>中高端钻石级用户</span>
                  </div>
                  <div
                    style="padding:5px 10px;margin:5px 5px;border:1px solid #F5D0BB;border-radius:4px;background-color:#F5D0BB ">
                    <span>专属用户</span>
                  </div>
                </div>
              </el-collapse-item>
              <!-- 用户认证 -->
              <el-collapse-item name='2'>
                <template slot="title">
                  <i style="margin-left:2%;margin-top:2%">
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
              <el-collapse-item name="3">
                <template slot="title">
                  <i style="margin-left:2%;margin-top:2%">
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
              <el-collapse-item name="4">
                <template slot="title">
                  <i style="margin-left:2%;margin-top:2%">
                    <img src="../../image/communicateInfo.png" style="width:16.3px;height:15.8px">
                  </i>
                  <span style="margin-left:15px">沟通情况</span>
                  <span style="margin-left:52%">更多</span>
                </template>
                <el-table :data="tableData" style="width: 100%">
                  <el-table-column prop="maintainName" label="维护人"></el-table-column>
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
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <div style="padding:20px">
                <div style="display:flex;align-items:center">
                  <i>
                    <img src="../../image/productImg.png" style="width:21.9px;height:24px">
                  </i>
                  <span style="font-size:22px;margin-left:20px">产品库</span>
                </div>
                <div style="margin-top:17px">
                  <i>
                    <img src="../../image/pointRight.png" alt="" style="width:30px;height:16px">
                  </i>
                  <span style="font-size:20px">
                    XXX产品库
                  </span>
                  <img src="../../image/pointLeft.png" alt="" style="width:30px;height:16px">
                </div>
                <div style="margin-top:14px">
                  <span style="background-color:#FAFAFA;padding:4px;border-right:1px solid #DCDCDC">产品编号</span><span
                    style="background-color:#FAFAFA;padding:4px">746538745001</span>
                  <span style="background-color:#FAFAFA;padding:4px;border-right:1px solid #DCDCDC">产品类型</span><span
                    style="background-color:#FAFAFA;padding:4px">信用卡客户</span>
                </div>
                <div style="margin-top:5px">
                  <span style="font-size:16px;color:#3F3F3F">
                    产品说明：xx客服设计平台，用最小的工作量，无缝接入xx客服生态，提供跨越设计与开发的体验解决方案。xx客服设计平台用最小的工作量，无缝接入xx客服生态，提供跨越设计与开发的体验解决方案。
                  </span>
                </div>
              </div>
            </div>
          </el-col>
          <el-col :span="12">
            <div class="grid-content bg-purple">
              <img src="../../image/menuLitter.png" alt=""
                style="width:38px;height:38px;position:absolute;top:0;right:0" @click="showLitterMenu">
              <div v-show="showLMenu" style="position:absolute;top:0;right:0;z-index:2020">
              </div>
              <div style="padding:20px">
                <div style="display:flex;align-items:center">
                  <i>
                    <img src="../../image/productImg.png" style="width:21.9px;height:24px">
                  </i>
                  <span style="font-size:22px;margin-left:20px">权益库</span>
                </div>
                <div style="margin-top:17px">
                  <i>
                    <img src="../../image/pointRight.png" alt="" style="width:30px;height:16px">
                  </i>
                  <span style="font-size:20px">
                    XXX权益库
                  </span>
                  <img src="../../image/pointLeft.png" alt="" style="width:30px;height:16px">
                  <div style="margin-top:14px">
                    <span style="background-color:#FAFAFA;padding:4px;border-right:1px solid #DCDCDC">权益类型</span><span
                      style="background-color:#FAFAFA;padding:4px">A类权益</span>
                  </div>
                  <div style="margin-top:5px">
                    <span style="font-size:16px;color:#3F3F3F">
                      权益说明：xx客服设计平台，用最小的工作量，无缝接入xx客服生态，提供跨越设计与开发的体验解决方案。xx客服设计平台用最小的工作量，无缝接入xx客服生态，提供跨越设计与开发的体验解决方案。
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple">
              <div style="padding:20px">
                <div style="display:flex;align-items:center">
                  <i>
                    <img src="../../image/verbalTrick.png" style="width:21.9px;height:24px">
                  </i>
                  <span style="font-size:22px;margin-left:20px">座席话术</span>
                </div>
                <div style="margin-top:17px">
                  <div style="margin-top:5px">
                    <span style="font-size:16px;color:#3F3F3F">
                      尊敬的客户您好，之前有了解到您申请了我行的信用卡，现在我们针对贵宾客户有个信用卡 专项活动， 分期打折。也就是说您可以把您的账单分几次尝还，方便您的资金流动，不收取任务利息，只要少量的手续费，
                      或者您也可以直接将您的信用卡额度进行提现，然后分期尝还，除了手续也不收取任何费用，您看您需要办理。
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div class="grid-content bg-purple" style="padding:20px;">
              <div class="spaceRow">
                <div class="leftRow">
                  <img src="../../image/customer2.png" alt="" style="width:22px;height:17px;margin-right:10px;">
                  <div style="font-size: 22px;color: #333333;">小结</div>
                </div>
                <div class="leftRow" style="margin:10px 8px;">
                  <div class="centerRow behindLine" style="">
                    <img src="../../image/callOut_red2.png" class="tabICon">
                    <el-button type="text" style="color: #a71e32;">外呼渠道</el-button>
                  </div>

                  <div class="centerRow behindLine" style="">
                    <img src="../../image/message_pink2.png" class="tabICon">
                    <el-button type="text" style="color: #a71e32;">短信</el-button>
                  </div>

                  <div class="centerRow behindLine" style="">
                    <img src="../../image/weChat2.png" class="tabICon">
                    <el-button type="text" style="color: #a71e32;">微信渠道进线</el-button>
                  </div>
                  <!-- 排版占位div -->
                  <div class="behindLine centerRow"></div>
                </div>
              </div>
              <el-row :gutter="20">
                <el-col :span="6" class="">
                  <div class="leftRow" style="height:42px;border: 1px solid #DCDCDC;">
                    <div style=" padding: 8px 10px;font-size: 14px;">呼叫状态</div>
                    <div style="width:60%;">
                      <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </div>
                </el-col>
                <el-col :span="6" class="">
                  <div class="leftRow" style="height:42px;border: 1px solid #DCDCDC;">
                    <div style=" padding: 8px 10px;font-size: 14px;">处理结果</div>
                    <div style="width:60%;">
                      <el-select v-model="value" placeholder="请选择" style="border:none">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </div>
                </el-col>
                <el-col :span="6" class="">
                  <div class="leftRow" style="height:42px;border: 1px solid #DCDCDC;">
                    <div style=" padding: 8px 10px;font-size: 14px;">是否预约</div>
                    <div style="width:60%;">
                      <el-select v-model="value" placeholder="请选择">
                        <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value">
                        </el-option>
                      </el-select>
                    </div>
                  </div>
                </el-col>
                <el-col :span="6" class="">
                  <div class="leftRow" style="height:42px;border: 1px solid #DCDCDC;">
                    <div style=" padding: 8px 10px;font-size: 14px;">预约时间</div>
                    <div style="width:60%;">
                      <el-date-picker v-model="value1" type="date" placeholder="选择日期"
                        style="width:100%;border:none;padding:0 0 0 10px；">
                      </el-date-picker>
                    </div>
                  </div>
                </el-col>
              </el-row>
              <el-input type="textarea" placeholder="请输入您的处理意见" v-model="textarea" maxlength="500" show-word-limit
                :rows="4" resize='none'>
              </el-input>
            </div>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="24">
            <div style="margin-left:40%">
              <el-button type="danger" style="width:100px;margin-right:5%">提交</el-button>
              <el-button type="danger" style="width:100px" @click="feedback">返回</el-button>
            </div>
          </el-col>
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
        actveNode: ["1", "2", "3", '4'],
        showLMenu: false,
        gender: 'man',
        tableData: [{
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
        ],
        activeName: 'first',
        value1: '',
        textarea: '',
        options: [{
          value: '选项1',
          label: '成功'
        }, {
          value: '选项2',
          label: '失败'
        }, {
          value: '选项3',
          label: '在线'
        }, {
          value: '选项4',
          label: '忙碌'
        }, {
          value: '选项5',
          label: '挂断'
        }],
        value: ''
      };
    },
    mounted() {
      this.height = window.screen.height;
      console.log(this.height);
      this.gender = this.$route.params.gender
      console.log(this.$route.params)
    },
    methods: {
      showLitterMenu() {
        this.showLMenu = !this.showLMenu
        console.log(this.showLMenu)
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      feedback() {
        this.$router.push({
          name: 'task'
        })
      }
    }
  };
</script>
<style scoped>
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

  .spaceRow {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
  }

  .tabICon {
    width: 23px;
    height: 20px;
    margin-right: 10px;
  }

  .inputBlock {
    border: none;
    width: 100%;
    border-left: 1px solid #dcdcdc;
    padding-left: 10px;
  }

  .el-input el-input--suffix {
    border: none
  }
  
  .behindLine::before {
    content: ' ';
    height: 16px;
    width: 1px;
    background: #dcdcdc;
    margin: 0 20px;
  }
</style>