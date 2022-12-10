<template>
  <el-row class="footer">
    <el-col>
      <el-col style="text-align: center;margin-bottom: 0.5rem;">
        <el-col>
          <span style="text-align: center">{{ slogan }}</span>
        </el-col>
      </el-col>
      <el-col :span="12" style="text-align: right;">
        this is a footer
      </el-col>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "FooterView",
  data(){
    return {
      slogan: '知识学习交流平台 ',
    }
  }
};
</script>

<style scoped>
.footer {
  background-color: white;
  position:absolute;
  bottom:0;
  width:100%;
  height:50px;
}
</style>
