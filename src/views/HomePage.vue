<template>
    <el-container>
      <el-header style="width:100%;margin: 0;padding: 0;top: 0;">
        <Header></Header>
      </el-header>
      <el-main style="width:100%;height:100%">
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
    right: 0;
    bottom: 0;
    padding-right: 0;
    width: 40%;
    height: 60%;
    margin-bottom: 0;
  }

  </style>
  