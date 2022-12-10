<template>
  <div>
    <el-header>
      <HeaderView></HeaderView>
    </el-header>
      <div class="container">
        <el-card class="box-card">
          <ProjectItem v-for="project in projects" :item="project" :key="project.id"></ProjectItem>
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
      </div>

      <FooterView class="footer"/>
  </div>

</template>

<script>
import ProjectItem from "@/pages/projects/ProjectItem";
import HeaderView from "@/components/layout/Header";
import FooterView from "@/components/layout/Footer";
export default {
  name: "GraphView",
  components: {FooterView, HeaderView, ProjectItem},
  data(){
    return {
      currentPage:1,
      projects: [{id:1, title:"java", stars: 200, forks: 20, description: "322222", language: "python",updateTime:"21312"},
        {id:1, title:"java", stars: 200, forks: 20, description: "322222", language: "python",updateTime:"21312", knowledgelist: [{id:1, name: "1231"}]},
        {id:1, title:"java", stars: 200, forks: 20, description: "322222", language: "python",updateTime:"21312"}]
    }
  },
  methods: {
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
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
