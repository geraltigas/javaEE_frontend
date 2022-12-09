<template>
  <div id="app">
<!--    <nav>-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </nav>-->
<!--    TODO: nav and router link can be used for navigatation-->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<style lang="scss">
#app {
  width: 100% !important;
  height: 100% !important;
  margin: 0;
}
.el-link--inner {
  width: 100%!important;
}
.el-carousel__container {
  height: 200px!important;
  background-color: white;
}
body {
  background-color: #f6f7f8;
  height: 100% !important;
}
html {
  height: 100% !important;
}
* {
  margin: 0;
  padding: 0;
}
</style>
