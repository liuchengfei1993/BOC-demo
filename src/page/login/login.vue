<template>
  <div class="table">
    <div class="login">
      <div class="font">个人客户云维管理平台</div>
      <hr class="xuxian" />
      <div class="number">
        <el-input placeholder="用户admin" v-model="user" style="width:60%" prefix-icon="el-icon-user"></el-input>
        <el-input placeholder="请输入您的密码" v-model="pass" show-password style="width:60%;margin-top:20px" prefix-icon="el-icon-unlock"></el-input>
      </div>
      <el-button class="button" type="primary" @click="login">登录</el-button>
    </div>
  </div>
</template>
<script>
  export default {
    data() {
      return {
        user: "",
        pass: ""
      };
    },
    methods: {
      login() {
        if (this.user !== 'admin' || this.pass !== '123456') {
          this.$message.error('用户名或密码错误');
          return
        }
        sessionStorage.setItem('login',true)
        this.$router.push({
          path: "/home"
        });
        this.$message.success('登陆成功')
      }
    }
  };
</script>
<style scoped>
  .table {
    background-image: url("../../image/Group.png");
    width: 100%;
    height: 100%;
    background-size: cover;
  }

  .login {
    background-image: url("../../image/login.png");
    width: 536px;
    height: 426px;
    position: relative;
    left: 30%;
    top: 20%;
    text-align: center;
  }

  .font {
    position: relative;
    top: 10%;
    font-size: 20px;
  }

  .xuxian {
    border: 1px dashed #ccc;
    height: 1px;
    width: 80%;
    position: relative;
    top: 16%;
  }

  .number {
    position: relative;
    top: 25%;
  }

  .button {
    margin-top: 150px;
    width: 200px;
    background-color: #a71e32;
  }
</style>