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
          <el-tab-pane :label="'知识点('+total(knowledges)+')'">
            <knowledge-list :knowledges="knowledges" @currentChange="fetchKnowledge"></knowledge-list>
          </el-tab-pane>
          <el-tab-pane :label="'项目('+total(projects)+')'">
            <project-list :projects="projects" @currentChange="fetchProject"></project-list>
          </el-tab-pane>
          <el-tab-pane :label="'书籍('+total(books)+')'">
            <book-list :books="books" @currentChange="fetchBook"></book-list>
          </el-tab-pane>
          <el-tab-pane :label="'网课('+total(videos)+')'">
            <video-list :videos="videos" @currentChange="fetchVideo"></video-list>
          </el-tab-pane>
          <!-- <el-tab-pane :label="'笔记('+notes.total+')'">
              <book-list :notes="books" @currentChange="fetchNote"></book-list>
          </el-tab-pane> -->
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
import BookList from "@/pages/books/BooksView";
import ProjectList from "@/pages/projects/ProjectList";
import VideoList from "@/pages/videos/VideoList";
import KnowledgeList from "@/pages/knowledge/KnowledgeList";
import { SEARCH_KNOWLEDGE, SEARCH_BOOK, SEARCH_PROJECT, SEARCH_VIDEO, SEARCH_NOTE } from "@/utils/api/search/search.js";
export default {
  name: "SearchView",
  data() {
    return {
      keyword: "",
      knowledges: {},
      books: {},
      projects: {},
      videos: {},
      notes: {}
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
    },
    total(pagination) {
      if (pagination.total) {
        return pagination.total;
      } else {
        return 0;
      }
    },
    fetchBook(current) {
      SEARCH_BOOK({keyword:this.keyword, current: current}).then(res => {
        this.books = res
      })
    },
    fetchProject(current) {
      SEARCH_PROJECT({keyword:this.keyword, current: current}).then(res => {
        this.projects = res
      })
    },
    fetchVideo(current) {
      SEARCH_VIDEO({keyword:this.keyword, current: current}).then(res => {
        this.videos = res
      })
    },
    fetchKnowledge(current) {
      SEARCH_KNOWLEDGE({keyword:this.keyword, current: current}).then(res => {
        this.knowledges = res
      })
    },
    fetchNote(current) {
      SEARCH_NOTE({keyword:this.keyword, current: current}).then(res => {
        this.notes = res
      })
    },
  },
  components: {
    SearchBox,
    Header,
    Footer,
    BookList,
    ProjectList,
    VideoList,
    KnowledgeList
  },
  watch: {
    "$route.query": {
      handler: function() {
        this.keyword = this.$route.query.q;
        this.fetchBook();
        this.fetchKnowledge();
        this.fetchProject();
        this.fetchVideo();
        this.fetchNote();
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
