<template>
  <div style="width:100%">
    <div class="serach-div">
      <el-form :inline="true" label-width="120px"  :model="formInline" class="demo-form-inline">
        <el-form-item  label="产品名称">
          <el-input v-model="formInline.user" placeholder="产品名称"></el-input>
        </el-form-item>
        <el-form-item label="产品类型">
          <el-select v-model="formInline.region" placeholder="产品类型">
            <el-option label="类型一" value="shanghai"></el-option>
            <el-option label="类型二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="产品编号">
          <el-input v-model="formInline.user" placeholder="产品名称"></el-input>
        </el-form-item>
        <el-form-item label="适用客群/客户">
          <el-select v-model="formInline.region" placeholder="产品类型">
            <el-option label="类型一" value="shanghai"></el-option>
            <el-option label="类型二" value="beijing"></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <div class="search-button">
        <el-button class="button" type="primary" icon="el-icon-search">搜索</el-button>
      </div>
    </div>
    <el-table :data="tableData" style="width: 96%;margin:30px">
      <el-table-column prop="name" label="产品名称" ></el-table-column>
      <el-table-column prop="type" label="产品类型" ></el-table-column>
      <el-table-column prop="date" label="产品编号" ></el-table-column>
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
          date: "ZYHZA20123",
          name: "中银策略",
          address: "小中型企业",
          type:"固定收益类"
        },
        {
          date: "ZYHZA20322",
          name: "中银汇增",
          address: "小中型企业",
          type:"固定收益类"
        },
        {
          date: "ZYHZA23111",
          name: "中银乐享",
          address: "小中型企业",
          type:"固定收益类"
        },
        {
          date: "ZYHZA23422",
          name: "中银日积月累",
          address: "小中型企业",
          type:"固定收益类"
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
