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
                <el-button @click="handleClickDown()" type="text" size="small"  >下载</el-button>
              </template>
            </el-table-column>
          </el-table>
        </div>
      </el-col>
    </el-row>
    <quill-text ></quill-text>
  </div>
</template>

<script>
import permission from "@/directive/permission/index.js";
import QuillText from "@/components/RichText/QuillText.vue";
import { getMockOne } from "../api/mock.js";
import { parseTime } from "@/utils/index.js";
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
            tableData: [],
            filename: "",            // 非必填 文件名
            autoWidth: true,         // 非必填 单元格大小是否自动
            bookType: ""             // 非必填 下载的文件类型
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
        },
        handleClickDown () {
            import("@/vendor/Export2Excel").then(excel => {
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
        formatJson (filterVal, jsonData) {
            return jsonData.map(v => filterVal.map(j => {
                if (j === "timestamp") {
                    return parseTime(v[j]);
                } else {
                    return v[j];
                }
            }));
        }
    },
    components: {
        QuillText
    }
};
</script>

<style scoped>
</style>
