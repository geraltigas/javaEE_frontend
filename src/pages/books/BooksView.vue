<template>
  <div>
    <HeaderView/>
    <el-container>
      <BookItem v-for="book in books" prop="book" :key="book.id"></BookItem>
    </el-container>
    <FooterView/>
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
        knowledge:[{id:1, name: 'java'}]}
      ]
    }
  }
}
</script>

<style scoped>

</style>
