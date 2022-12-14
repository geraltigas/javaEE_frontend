<template>
  <div class="table">
    <el-table
        :data="tableData"
        style="width: 100%"
        :header-cell-style="{
            'background-color': '#1989fa',
            'color': '#fff'}">
      <el-table-column
          prop="name"
          label="技术"
          width="100">
      </el-table-column>
      <el-table-column
          prop="name"
          label="教程名"
          width="270">
      </el-table-column>

    </el-table>
  </div>
</template>

<script>
import {GET_TUTORIAL} from "@/utils/api/knowledgeDetail";

export default {
  name: "TutorialListView",
  props: {
    knowledgeId: Number
  },
  data() {
    return {
      tableData: [],
      current: 0,
      total: 0,
      pageSize: 10
    }
  },
  created() {
    const res = GET_TUTORIAL(this.knowledgeId,{pageNum:this.current,pageSize:this.pageSize})
    this.tableData = res.data.records;
    //console.log(this.res)
  },

}
</script>

<style scoped>
.el-table{
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
</style>
