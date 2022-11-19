<template>
  <div id="app">
<!--    <nav>-->
<!--      <router-link to="/">Home</router-link> |-->
<!--      <router-link to="/about">About</router-link>-->
<!--    </nav>-->
<!--    TODO: nav and router link can be used for navigatation-->
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  width: 100% !important;
  height: 100% !important;
  margin: 0px;
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
}
</style>
