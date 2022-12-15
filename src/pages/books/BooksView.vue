<template>
  <div>
    <HeaderView/>
    <el-card class="box-card container">
      <BookItem v-for="book in books"
                :item="book" :key="book.idBook"
                @click.native="clickItem(book.idBook)"
      ></BookItem>
    </el-card>
    <el-pagination
        class="page"
        @current-change="getBooks"
        :current-page="current"
        :page-size="pageSize"
        layout="total, prev, pager, next, jumper"
        :total="total">
    </el-pagination>

    <FooterView class="footer"/>
  </div>
</template>

<script>
import FooterView from "@/components/layout/Footer";
import HeaderView from "@/components/layout/Header";
import BookItem from "@/pages/books/BookItem";
import {GET_BOOKS} from "@/utils/api/Resource";

export default {
  name: "BooksView",
  components:{FooterView, HeaderView, BookItem},
  data() {
    return {
      current: 0,
      total: 0,
      pageSize: 20,
      books: [
      ]
    }
  },
  created() {
    this.getBooks(this.current)
  },
  methods: {
    async getBooks(val) {
      const res = await GET_BOOKS({pageNum: val, pageSize: this.pageSize})
      this.books = res.data.records
      this.current = res.data.current
      this.total = res.data.total
    },
    clickItem(val) {
      this.$router.push({
        path:`/book-detail?id=${val}`
      })
    }
  },

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
