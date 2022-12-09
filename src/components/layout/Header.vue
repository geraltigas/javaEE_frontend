<template>
  <el-row :gutter="20" justify="space-between">

    <el-col :span="4">
      <a class="navbar-brand" href="/public" rel="nofollow">
        <img alt="vue" class="navbar-brand-img" src="src/assets/logo.svg">
      </a>
    </el-col>

    <el-col :span="10" style="max-height: 58px;overflow: hidden">
      <el-menu mode="horizontal"
               style="margin-top: -2px;border: 0;">
        <el-menu-item index="index1">1</el-menu-item>
        <el-menu-item index="index2">2</el-menu-item>
        <el-menu-item index="index3">3</el-menu-item>
        <el-menu-item index="index4">4</el-menu-item>
        <el-menu-item index="index5">5</el-menu-item>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "HeaderView",
}
</script>

<style scoped>

.navbar-brand-img {
  width: 50px;
}

</style>
