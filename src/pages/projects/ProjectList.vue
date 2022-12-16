<template>
<el-row class="wrapper">
    <el-col :xs="24" :sm="24" :xl="24" style="margin: 0 auto;">
      <el-col v-for="project in projects.records" :key="project.idProject" style="padding-bottom: 1rem;" >
        <project-item :item="project" @click.native="click(project.idProject)"></project-item>
      </el-col>
      <el-col>
        <div class="vertical-container text-center">
          <el-pagination class="page"
                         :hide-on-single-page="true"
                         layout="total, prev, pager, next, jumper"
                         :page-size="projects.size"
                         :current-page="projects.current"
                         :total="projects.total"
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
import ProjectItem from '@/pages/projects/ProjectItem.vue'
export default {
    name: 'ProjectList',
    props: {
        projects: {
            type: Object
        }
    },
    methods: {
        currentChange(page) {
            this.$emit('currentChange', page)
        },
      click(id) {
        this.$router.push(`/project-detail?id=${id}`)
      }
    },
    components: {
        ProjectItem
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
.page {
  margin-top: 20px;
  text-align: center;
}
</style>
