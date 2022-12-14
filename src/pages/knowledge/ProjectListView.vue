<template>
  <div class="box-card">
    <div v-for="item in list" :key="item.name" class="project-item" >
      <div class="item-title">
        <p class="el-icon-dog"></p>
        <a :href="item.link" :title="item.name" target="_blank" >{{item.name}}</a>
        <p>{{item.description}}</p>
        <div style="display: flex">
          <el-tag>stars: {{item.starGazers}}</el-tag>
          <el-tag style="margin-left: 10px">fork: {{item.forks}}</el-tag>
        </div>
      </div>
    </div>
    <div class="pages">
      <el-pagination
          background
          layout="prev, pager, next"
          @current-change="getProjectList"
          :current-page="current"
          :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {GET_PROJECT} from "@/utils/api/knowledgeDetail";

export default {
  name: "ProjectListView",
  data(){
    return {
      list:[],
      current: 0,
      total: 0,
      pageSize: 10
    }
  },
  props: {
    knowledgeId: Number
  },
  async created(){
    this.getProjectList(this.current)
  },
  methods: {
    async getProjectList(val) {
      this.current = val
      const res = await GET_PROJECT(this.knowledgeId, {pageNum:this.current,pageSize:this.pageSize})
      this.list = res.records
      this.current = res.current
      this.total = res.total
    }
  }
}
</script>

<style scoped>
.project-item {
  height: 150px;
  display: flex;
  margin-top: 20px;
  padding-top: 0px;
  padding-left: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
a{
  text-decoration: none;
  color: black;
}

.el-icon-dog{
  background: url(@/assets/images/github.png) center no-repeat;  /*使用自己的图片来替换*/
  background-size: contain;
}
.el-icon-dog:before{
  content: "dog";                                    /*before属性中的content文本是用来占位的,必须有*/
  font-size: 20px;                                   /*可以设置字体大小来确定图标大小*/
  visibility: hidden;                                /*使用visibility: hidden;来隐藏文字*/
}

.item-title{
  padding-left: 30px;
  padding-right: 10px;
}
</style>
