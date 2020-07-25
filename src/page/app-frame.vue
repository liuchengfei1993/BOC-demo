<template>
  <div id="app">
    <appheader style="height:9%;"></appheader>
    <div class="lion" >
      <appmenu></appmenu>
      <router-view class="tap" />
    </div>
  </div>
</template>
<script>
import appheader from "@/components/header";
import appmenu from "@/components/appmenu";
export default {
  components: { appheader, appmenu },
  data() {
    return {};
  },
  mounted() {
    //原生获取屏幕高度
  },
};
</script>
 <style  scoped>
#app {
  height: 100%;
  padding: 0;
  margin: 0;
  overflow-y: scroll;
}
.lion {
  display: flex;
  height: 91%;
}
.tap {
  overflow-y: scroll;
}
</style>
