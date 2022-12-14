<template>
<el-row class="wrapper">
    <el-col :xs="24" :sm="24" :xl="24" style="margin: 0 auto;">
      <el-col v-for="book in books.records" :key="book.idBook" style="padding-bottom: 1rem;">
        <book-item :item="book"></book-item>
      </el-col>
      <el-col>
        <div class="vertical-container text-center">
          <el-pagination :hide-on-single-page="true"
                         layout="total, prev, pager, next, jumper"
                         :page-size="books.size"
                         :current-page="books.current"
                         :total="books.total"
                         prev-text="上一页"
                         next-text="下一页"
                         @current-change="currentChange">
          </el-pagination>
        </div>
      </el-col>
    </el-col>
  </el-row>
</template>
<script>
import BookItem from '@/pages/books/BookItem.vue'
export default {
    name: 'BookList',
    props: {
        books: {
            type: Object
        }
    },
    method: {
        currentChange(page) {
            this.$emit('currentChange', page)
        }
    },
    components: {
        BookItem
    }
}
</script>
<style scoped>
.wrapper {
  max-width: 980px;
  margin: 20px auto;
  display: block;
  padding-left: 1rem;
  padding-right: 1rem;
  box-sizing: border-box;
  float: none;
}
</style>