<template>
  <div class="box-card">
    <div v-for="item in list" :key="item.name" class="item" >
      <div class="list-img">
        <img :src=item.pic style="height: 80%" >
      </div>
      <div class="item-title">
        <a :href="item.url" :title="item.title" @click="clickImg(item.idVideo)" target="_blank">{{item.title}}</a>
        <p>description: {{item.description}}</p>
        <el-tag>author: {{item.author}}</el-tag>

      </div>
    </div>
    <div class="pages">
      <el-pagination
          background
          layout="prev, pager, next"
          @current-change="getVideoList"
          :current-page="current"
          :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {GET_VIDEO} from "@/utils/api/knowledgeDetail";

export default {
  name: "BilibiliListView",
  props: {
    knowledgeId: Number
  },
  data() {
    return {
      list:[],
      current: 0,
      total: 0,
      pageSize: 10
    }
  },
  created() {
    this.getVideoList(this.current)
  },
  methods: {
    async getVideoList(val) {
      this.current = val
      const res = await GET_VIDEO(this.knowledgeId, {pageNum:this.current,pageSize:this.pageSize})
      //console.log(res)
      this.list = res.data.records
      this.current = res.data.current
      this.total = res.data.total
    },
    clickImg(id){
      this.$router.push(`/video-detail?id=${id}`)
    },
  }

}
</script>

<style scoped>
.item {
  height: 150px;
  display: flex;
  margin-top: 20px;
  padding-top: 30px;
  padding-left: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  cursor: pointer;
}
.item-title{
  padding-left: 30px;
  padding-right: 10px;
}
img{
  border-radius: 10px;
  cursor: pointer;
}
</style>
