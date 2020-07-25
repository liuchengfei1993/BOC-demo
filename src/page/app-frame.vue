<template>
  <div>
    <appheader></appheader>
    <el-row>
      <el-col style="background-color:#262931;height:100%"  :span="1.5">
        <appmenu></appmenu>
      </el-col>
      <el-col :span="22.5">
        <router-view />
      </el-col>
    </el-row>
  </div>
</template>
<script>
import appheader from "@/components/header";
import appmenu from "@/components/appmenu";
export default {
  components: { appheader, appmenu },
  data() {
    return {};
  }
};
</script>
 <style  scoped>
</style>
