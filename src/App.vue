<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: "App",
  mounted(){
    if(!sessionStorage.getItem('login')){
      this.$router.push({
          path: "/login"
        });
    }
  }
};
</script>

<style>
/* #app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} */
html,
body,
#app {
  height:100%;
  padding: 0;
  margin: 0;
  background: #f2f2f2;
}
</style>
