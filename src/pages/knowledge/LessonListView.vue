<template>
  <div class="box-card">
    <div v-for="item in list" :key="item.name" class="item">
      <div class="list-img">
        <img :src=item.coverUrl style="height: 80%" @click="clickImg(item.link)">
      </div>
      <div class="item-title">
        <a :href="item.link" :title="item.name" target="_blank">{{item.name}}</a>
        <p>{{item.description}}</p>
      </div>
    </div>
    <div class="pages">
      <el-pagination
          background
          layout="prev, pager, next"
          @current-change="getLessonList"
          :current-page="current"
          :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {GET_LESSON} from "@/utils/api/knowledgeDetail";

export default {
  name: "LessonListView",
  data() {
    return {
      list: [],
      current: 0,
      total: 0,
      pageSize: 10
    }
  },
  props: {
    knowledgeId: Number
  },
  created() {
    this.getLessonList(this.current)
  },
  methods: {
    async getLessonList(val) {
      this.current = val
      const res = await GET_LESSON(this.knowledgeId, {pageNum:this.current,pageSize:this.pageSize})
     // console.log(res);
      this.list = res.records
      this.current = res.current
      this.total = res.total
    },
    clickImg(link){
      window.open(link)
      console.log(link)
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
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.item-title{
  padding-left: 30px;
  padding-right: 10px;
}
img{
  border-radius: 10px;
  cursor: pointer;
}

a{
  text-decoration: none;
  color: black;
}
.pages{
  margin-top: 20px;
  text-align: center;
}
</style>
