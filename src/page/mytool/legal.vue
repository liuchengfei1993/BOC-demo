<template>
  <div style="width:100%">
    <div class="serach-div">
      <el-form :inline="true" label-width="100px" :model="formInline" class="demo-form-inline">
        <el-form-item label="目标客户">
          <el-input v-model="formInline.user" placeholder="目标客户"></el-input>
        </el-form-item>
        <el-form-item label="权益主题">
          <el-select style="width:200px" v-model="formInline.region" placeholder="权益主题">
            <el-option label="类型一" value="shanghai"></el-option>
            <el-option label="类型二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="主推产品">
          <el-input v-model="formInline.user" placeholder="主推产品"></el-input>
        </el-form-item>
        <el-form-item label="权益类别">
          <el-select style="width:200px" v-model="formInline.region" placeholder="权益类别">
            <el-option label="类型一" value="shanghai"></el-option>
            <el-option label="类型二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="机构层级">
          <el-input v-model="formInline.user" placeholder="主推产品"></el-input>
        </el-form-item>
        <el-form-item label="权益内容">
          <el-input v-model="formInline.user" placeholder="主推产品"></el-input>
        </el-form-item>
        <el-form-item label="权益价值">
          <el-input v-model="formInline.user" placeholder="主推产品"></el-input>
        </el-form-item>
        <el-form-item label="开始日期">
          <el-date-picker  style="width:200px" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
        <el-form-item label="截至日期">
          <el-date-picker  style="width:200px" type="date" placeholder="选择日期"></el-date-picker>
        </el-form-item>
         <el-form-item label="参与流程">
          <el-input v-model="formInline.user" placeholder="主推产品"></el-input>
        </el-form-item>
         <el-form-item label="宣传素材">
          <el-input v-model="formInline.user" placeholder="主推产品"></el-input>
        </el-form-item>
        <el-form-item label="推荐话术">
          <el-input v-model="formInline.user" placeholder="主推产品"></el-input>
        </el-form-item>
        <el-form-item label="联系人">
          <el-input v-model="formInline.user" placeholder="主推产品"></el-input>
        </el-form-item>
      </el-form>
      <div class="search-button">
        <el-button class="button" type="primary" icon="el-icon-search">搜索</el-button>
      </div>
    </div>
    <el-table :data="tableData" style="width: 90%;margin:30px">
      <el-table-column prop="date" label="产品名称" width="280"></el-table-column>
      <el-table-column prop="name" label="产品类型" width="280"></el-table-column>
      <el-table-column prop="address" label="产品编号" width="280"></el-table-column>
      <el-table-column prop="address" label=" 适用客群/客户"></el-table-column>
    </el-table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      formInline: {
        user: "",
        region: ""
      },
      tableData: [
        {
          date: "2016-05-02",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-01",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1519 弄"
        },
        {
          date: "2016-05-03",
          name: "王小虎",
          address: "上海市普陀区金沙江路 1516 弄"
        }
      ]
    };
  }
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
