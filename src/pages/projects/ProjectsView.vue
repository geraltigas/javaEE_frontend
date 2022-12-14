<template>
  <div>
    <el-header>
      <HeaderView></HeaderView>
    </el-header>
        <el-card class="box-card container">
          <ProjectItem v-for="project in projects" :item="project" :key="project.idProject"></ProjectItem>
        </el-card>
        <el-pagination
            class="page"
            @current-change="handleCurrentChange"
            :current-page="current"
            :page-size="pageSize"
            layout="total, prev, pager, next, jumper"
            :total="total">
        </el-pagination>

      <FooterView class="footer"/>
  </div>

</template>

<script>
import ProjectItem from "@/pages/projects/ProjectItem";
import HeaderView from "@/components/layout/Header";
import FooterView from "@/components/layout/Footer";
import {GET_PROJECTS} from "@/utils/api/Resource";
export default {
  name: "ProjectView",
  components: {FooterView, HeaderView, ProjectItem},
  data(){
    return {
      current:0,
      pageSize: 20,
      total: 0,
      projects: [{id:1, title:"java", stars: 200, forks: 20, description: "322222", language: "python",updateTime:"21312"},
        {id:1, title:"java", stars: 200, forks: 20, description: "322222", language: "python",updateTime:"21312", knowledgeList: [{id:1, name: "1231"},{id:2, name: "qweqw"}]},
        {id:1, title:"java", stars: 200, forks: 20, description: "322222", language: "python",updateTime:"21312"}]
    }
  },
  methods: {
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.getProjects(val)
    },
    async getProjects(val) {
      this.current = val
      const res = await GET_PROJECTS({pageNum:this.current, pageSize:this.pageSize})
      console.log(res)
      this.projects = res.records
      this.total = res.total
      this.current = res.current
    }
  },
  created() {
    this.getProjects(this.current)
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
