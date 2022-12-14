<template>
  <el-row class="footer">
    <el-col>
      <el-col style="text-align: right;margin-bottom: 0.5rem;">
        <el-col>
          <span>{{ slogan }}</span>
        </el-col>
      </el-col>
      <el-col :span="12" style="text-align: left;">
        <el-link class="footer-link" rel="nofollow" :underline="false" :href="knowledge" target="_blank"
                 style="vertical-align: baseline;"><span>知识点</span></el-link>
        <el-link class="footer-link" rel="nofollow" :underline="false" :href="projects" target="_blank" style="vertical-align: baseline;">
          <span>项目</span></el-link>
        <el-link class="footer-link" rel="nofollow" :underline="false" :href="books" target="_blank"
                 style="vertical-align: baseline;"><span>书籍</span></el-link>
        <el-link class="footer-link" rel="nofollow" :underline="false" :href="videos" style="vertical-align: baseline;">
          <span>网课</span></el-link>
        <el-link class="footer-link" rel="nofollow" :underline="false" :href="notes" target="_blank"
                 style="vertical-align: baseline;"><span>笔记</span></el-link>
      </el-col>
      <el-col :span="12" style="text-align: right;">
        <el-col>
          <el-col class="row align-items-center">
            <el-col class="col-auto">
                <span v-for="(v,k) in members" :key="k">
                  {{v}}
                </span>
            </el-col>
          </el-col>
        </el-col>
      </el-col>
    </el-col>
  </el-row>
</template>

<script>

export default {
  name: "Footer",
  data() {
    return {
      members:['杨恒仪', '刘星宇','罗致远','蒋博','蒋礼为','王嘉融'],
      systemUrl: 'https://rymcu.com',
      slogan: 'Learneur · 知识分享交流平台',
      knowledge:'/projects',
      projects: '/projects',
      notes: '/notes',
      books: '/books',
      videos: '/videos'

    }
  }
}
</script>

<style scoped>
.footer {
  font-size: 14px;
  align-items: center;
  display: flex;
}

.footer .footer-link {
  margin-left: 32px;
}
</style>
