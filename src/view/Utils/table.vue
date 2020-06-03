 <!-- mock.js 测试页面页面 -->
<template>
  <div class="info">
    <div class="table-search">
      <div >
        <span>查找手机号:</span>
        <el-input placeholder="查询条件"></el-input>
      </div>
      <div >
        <el-input placeholder="查询条件"></el-input>
      </div>
      <div >
        <el-input placeholder="查询条件"></el-input>
      </div>
      <div>
        <span>选择食物:</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </div>
      <div>
        <span>选择食物:</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </div>
      <div>
        <span>选择食物:</span>
        <el-select v-model="value" placeholder="请选择">
          <el-option v-for="item in options" :key="item.value" :label="item.label" :value="item.value"> </el-option>
        </el-select>
      </div>

      <div  class="table-button">
        <el-button type="primary" >查询</el-button>
        <el-button type="primary" icon="el-icon-plus">新增</el-button>
        <el-button type="primary" icon="el-icon-document-delete">修改</el-button>
        <el-button type="danger" icon="el-icon-delete ">删除</el-button>
      </div>
    </div>
    <el-row>
      <el-col>
        <div class="table-box">
          <el-table :data="tableData" style="width: 100%" >
            <el-table-column v-for="(col, index) in columns" :key="index" :prop="col.prop" :label="col.label" :width="col.width"></el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button @click="handleClick(scope.row)" type="text" >跳转</el-button>
                <el-button @click="handleClick(scope.row)" type="text"  v-permission="['user_delete']">删除</el-button>
                <el-button @click="handleClickDown()" type="text" >下载</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>

    <div class="table-pagination-right">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        layout="total, sizes, prev, pager, next, jumper"
        :total="400">
      </el-pagination>
    </div>

  </div>
</template>

<script>
import permission from "@/directive/permission/index.js";
import { getMockOne } from "@/api/mock.js";
import { parseTime } from "@/utils/index.js";
const columns = [
  { prop: "Date", label: "日期", width: 180 },
  { prop: "Name", label: "姓名", width: 180 },
  { prop: "Address", label: "地址", width: 180 },
  { prop: "Paragraph", label: "描述", width: undefined }
];
export default {
  directives: { permission },
  created() {
    this.getDataFromApi();
  },
  data() {
    return {
      columns: columns,
      tableData: [],
      filename: "",            // 非必填 文件名
      autoWidth: true,         // 非必填 单元格大小是否自动
      bookType: "",             // 非必填 下载的文件类型
      options: [ { value: "选项1", label: "黄金糕" }, { value: "选项2", label: "双皮奶" }, { value: "选项3", label: "蚵仔煎" }, { value: "选项4", label: "龙须面" }, { value: "选项5", label: "北京烤鸭" } ],
      value: "",
      currentPage4: 0
    };
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    async getDataFromApi() {
      const res = await getMockOne();
      this.tableData = res;
    },
    handleClick(row) {
      window.open(row.Url);
    },
    handleClickDown() {
      import("@/vendor/Export2Excel").then(excel => {
        // const tHeader = [ [ "Id", "Title", "Author", "Readings", "Date" ], [ 1, 2, 3, 4, 5 ] ];
        const tHeader = [ "Id", "Title", "Author", "Readings", "Date" ];
        const filterVal = [ "Natural", "String", "Name", "Paragraph", "Date" ];
        const list = this.tableData;// 数据
        const data = this.formatJson(filterVal, list);
        excel.export_json_to_excel({
          header: tHeader,
          data,
          filename: this.filename,
          autoWidth: this.autoWidth,
          bookType: this.bookType
        });
      });
    },
    formatJson(filterVal, jsonData) {
      return jsonData.map(v => filterVal.map(j => {
        if (j === "timestamp") {
          return parseTime(v[j]);
        } else {
          return v[j];
        }
      }));
    }
  }
};
</script>
