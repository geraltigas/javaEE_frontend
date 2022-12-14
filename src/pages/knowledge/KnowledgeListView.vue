<template>
  <div>
    <HeaderView/>
    <div class="com">
      <div class="list_container">
        <div @click="naviTo(item)" v-bind:key="index" v-for="(item,index) in knowledgeList" class="knowledge_item" :style="{backgroundColor:COLOR_LIST()[RANDOMINT(0,COLOR_LIST().length-1)]}">
          <div class="font">
            {{item.name}}
          </div>
        </div>
      </div>
    </div>
    <Footer/>
  </div>

</template>

<script>
import {GET_FIRST25} from "@/utils/api/graph/graph";
import {COLOR_LIST} from "@/utils/config";
import {RANDOMINT} from "@/utils/utils";
import HeaderView from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";

export default {
  name: "KnowledgeView",
  components: {Footer, HeaderView},
  methods: {
    RANDOMINT(min,max){
      return RANDOMINT(min,max);
    },
    COLOR_LIST() {
      return COLOR_LIST
    },
    naviTo(item) {
      this.$router.push({path: '/graph/' + item.name})
    }
  },
  data() {
    return {
      knowledgeList:[],
    }
  },
  mounted() {
    console.log("KnowledgeView mounted");
    GET_FIRST25().then(res => {
      console.log(res);
      this.knowledgeList = res.data;
    })
  },
}
</script>

<style scoped lang="scss">

.com {
  width:100%;
  overflow-x: hidden;
}

.knowledge_item{
  width: 15vw;
  height: 15vw;
  margin: 2vw 2vw;
  padding: 2vw;
  border-radius: 2vw;
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
}
.font{
  -moz-user-select: none;
  -webkit-user-select: none;
  -ms-user-select: none;
  -khtml-user-select: none;
  user-select: none;
  table-layout: fixed;
  word-wrap: break-word;
  word-break: normal;
  font-size: 3vw;
  width: 15vw;
  text-align: center;
}

.list_container{
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: 100%;
  padding: 0;
  margin: 0 0 0 3vw;
}
</style>
