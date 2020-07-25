<template>
  <div class="menu">
    <el-menu background-color="#262931" class="el-menu-vertical-demo" :collapse="true">
      <el-submenu index="1">
        <template slot="title">
          <img src="@/image/menu.png" />
        </template>
        <el-menu background-color="#262931">
          <el-menu-item index="1">
            <span slot="title">我的客户</span>
          </el-menu-item>
          <el-submenu index="2">
            <template slot="title">
              <span style="color:#fff">我的任务</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="2-1">必做任务</el-menu-item>
              <el-menu-item index="2-2">精准营销任务</el-menu-item>
              <el-menu-item index="2-3">自选任务</el-menu-item>
              <el-menu-item index="2-4">临时任务</el-menu-item>
            </el-menu-item-group>
          </el-submenu>

          <el-submenu index="3">
            <template slot="title">
              <span style="color:#fff">我的工具</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1">产品库</el-menu-item>
              <el-menu-item index="3-2">权益库</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-menu-item index="4">
            <span slot="title">我的绩效</span>
          </el-menu-item>
        </el-menu>
      </el-submenu>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
 <style  scoped>
 .menu{
   background-color:"#262931"
 }
 .el-menu-item {
  color:#fff ;
}
.el-menu {
    border-right:0px;
}
.el-menu-item.is-active {
  background-color: #a71e32 !important ;
}
</style>
