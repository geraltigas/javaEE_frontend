<template>
  <el-row :gutter="20" justify="space-between">

    <el-col :md="4" :span="4" :xs="8">
      <a class="navbar-brand" href="/" rel="nofollow">
        <img alt="Learneur" class="navbar-brand-img" src="@/assets/images/logo.png">
      </a>
    </el-col>

    <el-col :md="14" :span="10" :xs="0" style="max-height: 58px;overflow: hidden">
      <el-menu :default-active="activeMenu" @select="handleSelectMenu" mode="horizontal"
               style="margin-top: -2px;border: 0;">
        <el-menu-item index="index">首页</el-menu-item>
        <el-menu-item index="projects">项目</el-menu-item>
        <el-menu-item index="videos">视频</el-menu-item>
        <el-menu-item index="books">电子书</el-menu-item>
        <el-menu-item index="notes">笔记</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
import {mapState} from "vuex";

export default {
  name: "HeaderView",
  computed: {
    ...mapState({
      activeMenu: state => state.activeMenu
    }),
  },
  methods: {
    handleSelectMenu(item) {
      let _ts = this;
      switch (item) {
        case 'projects':
          _ts.$router.push({
            path: '/projects?page=1'
          })
          break;
        case 'videos':
          _ts.$router.push({
            path: '/videos?page=1'
          })
          break;
        case 'books':
          _ts.$router.push({
            path: '/books?page=1'
          })
          break;
        case 'notes':
          _ts.$router.push({
            path: '/notes?page=1'
          })
          break;
        default:
          _ts.$router.push(
              {
                path: '/'
              }
          )
      }
    },
  }
}
</script>

<style scoped>
.navbar-brand {
  color: inherit;
  margin-right: 16px;
  font-size: 20px;
  white-space: nowrap;
  font-weight: 600;
  padding: 0;
  transition: .3s opacity;
  line-height: 48px;
}
.navbar-brand-img {
  height: 48px;
  line-height: 48px;
  vertical-align: top;
  width: auto;
}

</style>
