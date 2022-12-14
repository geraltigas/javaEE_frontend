<template>
  <div class="box-card">
    <div v-for="item in list" :key="item.title" class="item">
      <div class="list-img">
        <img :src=item.coverUrl style="height: 80%" @click="clickImg(item.url)">
      </div>
      <div class="item-title">
        <a :href="item.url" :title="item.title" target="_blank">{{item.title}}</a>

        <p><el-tag>Author: {{item.author}}</el-tag></p>
        <p style="margin-top: 5px"><el-tag>Publisher: {{item.publisher}}</el-tag></p>

      </div>
    </div>
    <div class="pages">
      <el-pagination
          background
          layout="prev, pager, next"
          @current-change="getBookList"
          :current-page="current"
          :total="total">
      </el-pagination>
    </div>
  </div>
</template>

<script>
import {GET_BOOK} from "@/utils/api/knowledgeDetail";

export default {
  name: "BookListView",
  data() {
    return {
      list: [],
      current: 0,
      pages: 0,
      pageSize: 10,
      total: 0
    }
  },
  props: {
    knowledgeId: Number
  },
  created() {
    this.getBookList()
  },
  methods: {
    async getBookList(val) {
      const res = await GET_BOOK(this.knowledgeId, {pageNum:this.current,pageSize:this.pageSize})
      this.current = val
      console.log(res);
      this.list = res.records
      //this.current = res.current
      this.pages = res.pages
      this.total = res.total
    }
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
  padding-left: 10px;
}
.pages{
  text-align: center;
}
</style>
