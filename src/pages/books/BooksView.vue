<template>
  <div>
    <HeaderView/>
    <el-card class="box-card container">
      <BookItem v-for="book in books" :item="book" :key="book.id"></BookItem>
    </el-card>
    <el-pagination
        class="page"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="15"
        layout="total, prev, pager, next, jumper"
        :total="400">
    </el-pagination>

    <FooterView class="footer"/>
  </div>
</template>

<script>
import FooterView from "@/components/layout/Footer";
import HeaderView from "@/components/layout/Header";
import BookItem from "@/pages/books/BookItem";

export default {
  name: "BooksView",
  components:{FooterView, HeaderView, BookItem},
  data() {
    return {
      books: [
        {id:1, title:"jva", coverUrl:'https://z-lib.is/uploads/covers/2022/8afc45931500aab31d03c8db9e85a03e-g.jpg',
        author:'qweweqq', language: 'Enaglish',fileSize:23,
          knowledgeList:[{id:1, name: 'java'}]}
      ]
    }
  }
}
</script>

<style scoped>
.container {
  margin-top: 20px;
  max-width: 60%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  background-color: white;
}

.page {
  margin-top: 20px;
  text-align: center;
}
</style>
