<template>
  <div style="height:100%">
    <el-container >
      <el-main>
        <el-row :gutter="30" style="0 0 0 -15px">
            <el-col :span="9" class="">
              <div class="whiteBg aroundCol" style="height:116px;width:100%;padding:0 20px;">
                <div class="underDash leftRow" style="padding:10px 0">
                    <img src="../../image/callOut_blue2.png" alt="" class="smallIcon">
                    <div class="lightBlack">人工外呼量</div>
                </div>
                  <el-row :gutter="30" style="width: 100%;">
                      <el-col :span="8">
                          <div class="lightGrey textCenter">外呼总量</div>
                          <div class="lightBlack textCenter">{}通</div>
                      </el-col>
                      <el-col :span="8" class="twoSideBorder">
                          <div class="lightGrey textCenter">外呼接通量</div>
                          <div class="lightBlack textCenter">{}通</div>
                      </el-col>
                      <el-col :span="8">
                          <div class="lightGrey textCenter">接通率</div>
                          <div class="lightBlack textCenter">{}%</div>
                      </el-col>
                  </el-row>       
              </div>
            </el-col>
            <el-col :span="5" class="">
              <div class="whiteBg aroundCol" style="height:116px;width:100%;padding:0 20px;">
                <div class="underDash leftRow" style="padding:10px 0">
                    <img src="../../image/message2.png" alt="" class="smallIcon">
                    <div class="lightBlack">短信量</div>
                </div>
                <div class="rightRow">
                  <span class="lightGrey">短信数量</span>
                  <span class="lightBlack">{}条</span>
                </div>               
              </div>
      
            </el-col>
            <el-col :span="5" class="">
              <div class="whiteBg aroundCol" style="height:116px;width:100%;padding:0 20px;">
                <div class="underDash leftRow" style="padding:10px 0">
                    <img src="../../image/AI2.png" alt="" class="smallIcon">
                    <div class="lightBlack">智能外呼量</div>
                </div>
                <div class="rightRow">
                  <span class="lightGrey">外呼量</span>
                  <span class="lightBlack">{}条</span>
                </div>             
              </div>
            
            </el-col>
            <el-col :span="5" class="">
              <div class="whiteBg aroundCol" style="height:116px;width:100%;padding:0 20px;">
                <div class="underDash leftRow" style="padding:10px 0">
                    <img src="../../image/phoneBank_pink2.png" alt="" class="smallIcon">
                    <div class="lightBlack">手机银行推送量</div>
                </div>
                <div class="rightRow">
                  <span class="lightGrey">推送量</span>
                  <span class="lightBlack">{}条</span>
                </div>              
              </div>
          
            </el-col>
        </el-row>
        <el-row :gutter="20" class="whiteBg" style="margin:8px 0">
          <el-col :span="5" class="borderDC">
            <div class="leftRow">
                <div>客户姓名</div>
                <div>
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>            
            </div>

          </el-col>
          <el-col :span="5" class="borderDC">
              <div class="leftRow">
                <div>电话号码</div>
                <div>
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>            
              </div>

          </el-col>
          <el-col :span="5" class="borderDC">
              <div class="leftRow">
                <div>证件号码</div>
                <div>
                  <el-input v-model="input" placeholder="请输入内容"></el-input>
                </div>           
              </div>

          </el-col>
          <el-col :span="7" class="borderDC">
            <div class="leftRow">
              <div>时间周期</div>
              <el-date-picker
                v-model="value1"
                type="daterange"
                range-separator="至"
                start-placeholder="开始日期"
                end-placeholder="结束日期" style="width:100%">
              </el-date-picker>
            </div>

          </el-col>
          <el-col :span="2">
            <div>
              <img src="../../image/search2.png" alt="">
              <span>搜索</span>          
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
      input:'222',
      value1:'222'
    };
  }
};
</script>
 <style  scoped>

*{
  box-sizing: border-box;
}

.whiteBg{
  background: #fff;
}

 .lightGrey{
   color:#999;
 }

 .lightBlack{
   color:#333;
 }

 .centerCol{
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: center;
 }

 .aroundCol{   
   display: flex;
   flex-direction: column;
   align-items: center;
   justify-content: space-around;
 }

 .rightRow{
   width: 100%;
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: flex-end;
 }

 .leftRow{
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: flex-start;
 }

 .twoSideBorder{
   border-left: 1px solid #DCDCDC;
   border-right: 1px solid #DCDCDC;
 }

 .underDash{
   border-bottom: 1px dashed #DCDCDC;
   width: 100%;
 }

 .borderDC{
   border: 1px solid #DCDCDC; 
 }

.smallIcon{
  width: 28px;
  height: 24px;
  display: inline-block;
  margin-right: 8px;
}

.textCenter{
  text-align: center;
}

</style>
