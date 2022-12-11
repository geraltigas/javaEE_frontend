<template>
    <el-container>
      <el-header style="width:100%;margin: 0;padding: 0;top: 0;">
        <Header></Header>
      </el-header>
      <el-main style="width:100%;height:100%">
        <div style="width:1200px;height:200px;background-color:aquamarine;">知识点</div>
        <div style="width:300px;height:200px;background-color:aqua;margin-right: 0;right: 0;position: absolute;top: 80px;">网课资源</div>
        <div style="width:1200px;height:500px;background-color:bisque;">优秀项目推荐</div>
        <Famous class="note"></Famous>
      </el-main>
      <el-footer class="footer">
        <Footer></Footer>
      </el-footer>
    </el-container>
  </template>
  
  <script>
  import Header from "@/components/layout/Header";
  import Famous from "@/components/layout/Famous";
  import Footer from "@/components/layout/Footer";
  export default {
    name: 'HomePage',
    components: {
      Header,
      Famous,
      Footer
    },
    props: {
      msg: String
    }
  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  .note {
    position: absolute;
    right: -300px;
    bottom: 0;
    margin-right: 0;
    width: 600px;
    height: 600px;
    margin-bottom: 0;
  }

  </style>
  