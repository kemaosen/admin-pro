 <!-- mock.js 测试页面页面 -->
<template>
  <div class="info">
    <h1>This is A Mock Demo.</h1>
    <el-row>
      <el-col>
        <div class="table-box">
          <el-table :data="tableData" style="width: 100%" height="450">
            <el-table-column v-for="(col, index) in columns" :key="index" :prop="col.prop" :label="col.label" :width="col.width" ></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" size="small" >跳转</el-button>
                <el-button @click="handleClick(scope.row)" type="text" size="small" v-permission="['user_delete']" >删除</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import permission from "@/directive/permission/index.js";
import { getMockOne } from "../api/mock.js";
const columns = [
    { prop: "Date", label: "日期", width: 180 },
    { prop: "Name", label: "姓名", width: 180 },
    { prop: "Address", label: "地址", width: 180 },
    { prop: "Paragraph", label: "描述", width: undefined }
];
export default {
    directives: { permission },
    created () {
        this.getDataFromApi();
    },
    data () {
        return {
            columns: columns,
            tableData: []
        };
    },
    methods: {
        async getDataFromApi () {
            const res = await getMockOne();
            console.log(res);
            this.tableData = res;
        },
        handleClick (row) {
            window.open(row.Url);
        }
    }
};
</script>

<style scoped>
</style>
