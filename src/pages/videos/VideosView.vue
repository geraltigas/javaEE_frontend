<template>
<div>
<HeaderView/>
  <div class="" id="box">
    <ul>
<!--      <li v-for="v in json.list">-->
<!--        <img v-bind:src="v.src" alt="">-->
<!--        <h4>{{v.des}}</h4>-->
<!--        <p>{{v.price}}</p>-->
<!--      </li>-->
    </ul>
  </div>
<FooterView/>
</div>
</template>

<script>
import HeaderView from "@/components/layout/Header";
import FooterView from "@/components/layout/Footer";
export default {
  name: "VideoVue",
  components: {FooterView, HeaderView}
}
</script>

<style scoped>
#box ul{
  display: flex;
  flex-wrap: wrap;
}
#box li{
  padding: 3px;
  list-style: none;
  margin-right: 15px;
  border: 1px solid #eee;
}
#box img{
  width: 200px;
  height: 150px;
}
</style>
