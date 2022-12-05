<template>
    <el-container>
      <el-header style="width:100%;margin: 0;padding: 0;top: 0;">
        <Header></Header>
      </el-header>
      <el-main style="width:100%;height:100%">
        <NoteEdit></NoteEdit>
      </el-main>
      <el-footer class="footer">
        <Footer></Footer>
      </el-footer>
    </el-container>
</template>
<script>
  import Header from "@/components/layout/Header";
  import NoteEdit from "@/components/layout/Article";
  import Footer from "@/components/layout/Footer";
  export default {
    name: 'HomePage',
    components: {
      Header,
      NoteEdit,
      Footer
    },
    props: {
      msg: String
    }
  }
  </script>
  <style scoped lang="scss">
  .footer {
    position: fixed;
    bottom: 0;
    width: 100%;
  }
  </style>
  