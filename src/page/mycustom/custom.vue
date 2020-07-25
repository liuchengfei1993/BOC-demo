<template>
  <div style="width:100%">
    <div class="serach-div">
      <el-form :inline="true" label-width="100px" :model="formInline" class="demo-form-inline">
        <el-form-item label="客户号">
          <el-input v-model="formInline.user" placeholder="客户号"></el-input>
        </el-form-item>
        <el-form-item label="手机号">
          <el-input v-model="formInline.user" placeholder="手机号"></el-input>
        </el-form-item>
        <el-form-item label="权益类别">
          <el-select style="width:200px" v-model="formInline.region" placeholder="权益类别">
            <el-option label="类型一" value="shanghai"></el-option>
            <el-option label="类型二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="身份证号">
          <el-input v-model="formInline.user" placeholder="身份证号"></el-input>
        </el-form-item>
        <el-form-item label="账号（卡号）">
          <el-input v-model="formInline.user" placeholder="账号（卡号）"></el-input>
        </el-form-item>
        <el-form-item label="归属机构号">
          <el-input v-model="formInline.user" placeholder="归属机构号"></el-input>
        </el-form-item>
        <el-form-item label="名称">
          <el-input v-model="formInline.user" placeholder="名称"></el-input>
        </el-form-item>
        <el-form-item label="金融资产">
          <el-input v-model="formInline.user" placeholder="金融资产"></el-input>
        </el-form-item>
        <el-form-item label="客户标签">
          <el-input v-model="formInline.user" placeholder="客户标签"></el-input>
        </el-form-item>
      </el-form>
      <div class="search-button">
        <el-button class="button" type="primary" icon="el-icon-search">搜索</el-button>
      </div>
    </div>
    <el-table :data="tableData" style="width: 96%;margin:30px">
      <el-table-column prop="no" label="客户号 "></el-table-column>
      <el-table-column prop="name" label="客户姓名 "></el-table-column>
      <el-table-column prop="date" label="手机号 "></el-table-column>
      <el-table-column prop="man" label=" 归属机构号 "></el-table-column>
      <el-table-column prop="address" label=" 归属机构名称 "></el-table-column>
      <el-table-column prop="down" label=" 日均金融资产（最小值） "></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: "",
      },
      tableData: [
        {
          no: "13838212",
          name: "王小虎",
          date: "18803221832",
          address: "江苏分行",
          down:"10万",
          man:"030600"
        },
        {
          no: "13838214",
          name: "李四",
          date: "18803322222",
          address: "南京分行",
          down:"10万",
          man:"030611"
        },
        {
          no: "13838219",
          date: "18803221331",
          name: "张三",
          address: "上海分行",
          down:"2万",
          man:"030632"
        },
        {
          no: "13838223",
          date: "18803446211",
          name: "李雷",
          address: "北京分行",
          down:"3万",
          man:"030633"
        },
      ],
    };
  },
};
</script>
 <style  scoped>
.serach-div {
  background-color: #fff;
  margin: 15px;
  border: 1px solid #ccc;
}
.demo-form-inline {
  padding: 20px;
}
.search-button {
  text-align: center;
  margin-top: 10px;
  margin-bottom: 10px;
}
.button {
  background-color: #a71e32;
  border: 0.5px solid #a71e32;
}
</style>
