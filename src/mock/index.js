import Mock from "mockjs"; // 引入mockjs

import tableData from "./mockData/tableData";

Mock.mock("/mock/api/tableData", "post", tableData); // tableData
