<template>
    <el-container>
    <el-header style="width:100%;margin: 0;padding: 0;top: 0;">
      <Header></Header>
    </el-header>
    <el-main style="width:100%;height:100%">
    <el-row class="wrapper">
        <search-box @search="onSearch" :directlyShow="true" :input="keyword"></search-box>
    </el-row>
    <el-row class="wrapper">
        <el-tabs>
            <el-tab-pane :label="'知识('+1+')'"></el-tab-pane>
            <el-tab-pane :label="'电子书('+books.total+')'">
                <book-list :books="books"></book-list>
            </el-tab-pane>
        </el-tabs>
    </el-row>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
import SearchBox from "@/components/widget/SearchBox.vue"
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BookList from "@/pages/books/BookList";
import { SEARCH_BOOK } from "@/utils/api/search/search.js";
export default {
    name: "SearchView",
    data() {
        return {
            keyword: "",
            books: {}
        };
    },
    methods: {
        onSearch(keyword) {
            this.$router.push({
                path: `/search`,
                query: {
                    q: keyword
                }
            })
        }
    }, 
    components: {
        SearchBox,
        Header,
        Footer,
        BookList
    },
    watch: {
        "$route.query": {
            handler: function() {
                this.keyword = this.$route.query.q;
                SEARCH_BOOK({keyword:this.$route.query.q}).then(res => {
                    this.books = res
                })
            },
            immediate: true,
            deep: true
        }
    }
};
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