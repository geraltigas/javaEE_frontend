<template>
  <div class="com">
    <div class="list_container">
      <div @click="naviTo(item)" v-bind:key="index" v-for="(item,index) in knowledgeList" class="knowledge_item effect-2 sub-b" :style="{backgroundColor:COLOR_LIST()[RANDOMINT(0,COLOR_LIST().length-1)]}">
        <div class="font">
          {{item.name}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {GET_FIRST25} from "@/utils/api/graph/graph";
import {COLOR_LIST} from "@/utils/config";
import {RANDOMINT} from "@/utils/utils";

export default {
  name: "KnowledgeView",
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
      this.knowledgeList = res;
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
  width: 14vw;
  height: 14vw;
  margin: 2vw 2vw;
  border-radius: 2vw;
  backdrop-filter: blur(20px);
  display: flex;
  align-items: center;
  z-index: 1;
  cursor: pointer;
}

.knowledge_item:after {
  pointer-events: none;
  position: absolute;
  width: 100%;
  height: 100%;
  border-radius: 2vw;
  content:'';
  -webkit-box-sizing: content-box;
  -moz-box-sizing: content-box;
  box-sizing: content-box;
}

.knowledge_item.effect-2 {
  color: #eea303;
  box-shadow: 0 0 0 3px #fff;
  -webkit-transition: color 0.3s;
  -moz-transition: color 0.3s;
  transition: color 0.3s;
}
.knowledge_item.effect-2:after {
  top: -2px;
  left: -2px;
  padding: 2px;
  z-index: -1;
  background: #fff;
  -webkit-transition: -webkit-transform 0.2s, opacity 0.2s;
  -moz-transition: -moz-transform 0.2s, opacity 0.2s;
  transition: transform 0.2s, opacity 0.2s;
}

.knowledge_item.effect-2.sub-b:hover:after {
  -webkit-transform: scale(0);
  -moz-transform: scale(0);
  -ms-transform: scale(0);
  transform: scale(0);
  opacity: 0;
  -webkit-transition: -webkit-transform 0.4s, opacity 0.2s;
  -moz-transition: -moz-transform 0.4s, opacity 0.2s;
  transition: transform 0.4s, opacity 0.2s;
}
.knowledge_item.effect-2.sub-b:hover, .knowledge_item.effect-2.sub-b:hover i {
  color: #fff;
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
  position: relative;
  width: 80vw;
  left: 10vw;
  height: 100%;
  padding: 0;
  margin: 0 0 0 3vw;
}
</style>