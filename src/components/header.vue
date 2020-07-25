<template>
  <div>
    <el-menu class="el-menu-demo" mode="horizontal">
      <div style="display:flex">
        <div style="margin-top:10px">
          <img src="@/image/logo.png" />
        </div>
        <el-menu-item style="margin-left:50%" class="tab1" index="1">
          <template slot="title">
            <div>
              <div class="image">
                <img src="@/image/comeIn.png" />
              </div>
              <span>签入</span>
            </div>
          </template>
        </el-menu-item>
        <el-menu-item class="tab1" index="2">
          <template slot="title">
            <div>
              <div class="image">
                <img src="@/image/busy.png" />
              </div>
              <span>示忙</span>
            </div>
          </template>
        </el-menu-item>
        <el-menu-item class="tab1" index="3">
          <template slot="title">
            <div>
              <div class="image">
                <img src="@/image/hangUp.png" />
              </div>
              <span>保持</span>
            </div>
          </template>
        </el-menu-item>
        <el-menu-item class="tab1" index="4">
          <template slot="title">
            <div>
              <div class="image">
                <img src="@/image/keepOn.png" />
              </div>
              <span>挂机</span>
            </div>
          </template>
        </el-menu-item>
        <el-menu-item class="tab2" index="5">
          <template slot="title">
            <img src="@/image/lock.png" />
          </template>
        </el-menu-item>
        <el-menu-item class="tab2" index="6">
          <template slot="title">
            <img src="@/image/theme.png" />
          </template>
        </el-menu-item>
        <el-submenu index="7" style="width:150px" >
          <template slot="title">
            <img src="@/image/oval.png" />
            <span>用户名</span>
          </template>
            <el-menu-item index="7-1" ><div @click="quit">退出</div></el-menu-item>
        </el-submenu>
      </div>
    </el-menu>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
    quit(){
     this.$router.push({
        path: '/login'
      });
    }
  }
};
</script>
 <style  scoped>
.tab1 {
  line-height: 25px;
}
.image {
  margin-bottom: 2px;
}
.tab2 {
  line-height: 40px;
}
:focus {
      outline:0;
}
</style>
