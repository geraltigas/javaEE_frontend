<template>
  <el-container className="main_main_container">
    <el-header>
      <Header></Header>
    </el-header>
    <el-main className="main_main">
      <Main></Main>
    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Main from "@/components/layout/Main.vue";
import Footer from "@/components/layout/Footer.vue";
export default {
  name: 'HomeView',
  components: {
    Header,
    Main,
    Footer
  },
  props: {
    msg: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
