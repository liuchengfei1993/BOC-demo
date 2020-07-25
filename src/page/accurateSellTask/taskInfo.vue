<template>
  <div style="height:100%">
    <el-container >
      <!-- 侧边个人信息 -->
      <el-aside width="35%" height='100%'>
        <div class="aside"> 
          <div style="width:320px;height:170px;margin:5%;background-color:#fff">

          </div>
          <div style="width:320px;height:88px;margin:5%;background-color:#fff">

          </div>
          <div style="width:320px;height:122px;margin:5%;background-color:#fff">

          </div>
          <div style="width:320px;height:90px;margin:5%;background-color:#fff">

          </div>
          <div style="width:320px;height:284px;margin:5%;background-color:#fff">

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
      </el-main>
    </el-container>
  </div>
</template>
<script>
export default {
  data() {
    return {
      height: ""
    };
  },
  mounted() {
    this.height = window.screen.height;
    console.log(this.height);
  }
};
</script>
<style scoped >
.el-aside {
  background-color: #d3dce6;
  color: #333;
}
.el-main {
  background-color: #e9eef3;
  color: #333;
}
.el-row {
  margin-bottom: 20px;
  &:last-child {
    margin-bottom: 0;
  }
}
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #fff;
}
.bg-purple {
  background: #fff;
}
.bg-purple-light {
  background: #fff;
}
.grid-content {
  border-radius: 4px;
  min-height: 222px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
</style>
