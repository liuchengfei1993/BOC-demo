<template>
  <div style="display:flex">
    <div style="width:60px;background-color: #262931;height:100%">
      <img
        style="margin-left:20px;width:20px;margin-top:25px"
        @click="gohome"
        src="@/image/homeis.png"
      />
      <img class="image1" @click="getlist" src="@/image/menu.png" />
    </div>
    <el-menu v-show="showlist" style="width:150px" background-color="#262931">
      <el-menu-item index="1">
        <span slot="title" @click="tocustom">我的客户</span>
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
          <el-menu-item index="2-5">预约任务</el-menu-item>
        </el-menu-item-group>
      </el-submenu>

      <el-submenu index="3">
        <template slot="title">
          <span style="color:#fff">我的工具</span>
        </template>
        <el-menu-item-group>
          <el-menu-item index="3-1" @click="toproduct">产品库</el-menu-item>
          <el-menu-item index="3-2" @click="gotolegal">权益库</el-menu-item>
        </el-menu-item-group>
      </el-submenu>
      <el-menu-item index="4">
        <span slot="title">我的绩效</span>
      </el-menu-item>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      showlist: false,
    };
  },
  methods: {
    getlist() {
      if (this.showlist) {
        this.showlist = false;
      } else {
        this.showlist = true;
      }
    },
    gohome() {
      this.showlist = false;
      this.$router.push({
        path: "/home",
      });
    },
    toproduct() {
      this.$router.push({
        path: "/producttool",
      });
    },
    tocustom(){
      this.$router.push({
        path: "/custom",
      });
    },
    gotolegal() {
      this.$router.push({
        path: "/legal",
      });
    },
  },
};
</script>
 <style  scoped>
.el-menu-item {
  color: #fff;
}
.el-menu {
  border-right: 0px;
}
.el-menu-item.is-active {
  background-color: #a71e32 !important ;
}
.el-submenu .el-menu-item {
  min-width: 50px;
}
.image1 {
  margin-left: 20px;
  width: 20px;
  margin-top: 25px;
}
</style>
