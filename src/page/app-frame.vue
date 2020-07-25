<template>
  <div id="app">
    <appheader style="height:10%;"></appheader>
    <div style="display:flex;height:90%;">
      <appmenu></appmenu>
      <router-view />
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
  }
};
</script>
 <style  scoped>
html,
body,
#app {
  height: 100%;
  padding: 0;
  margin: 0;
}
</style>
