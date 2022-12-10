<template>
  <div class="project-item">
    <div class="item-info">
      <div class="item-title">
        {{ item.title }}
        <el-tag>{{item.language}}</el-tag>
      </div>
      <div class="item-desc">{{ item.description }}</div>
      <div></div>
      <div class="info-bottom">
        <div class="left-buttom">


        <div class="item-stars">
          <i class="el-icon-star-off"></i>
          {{ item.stars }}
        </div>
        <div class="item-forks" >
          <i class="el-icon-share"></i>
          {{ item.forks }}
        </div>
        </div>
        <div class="update-time">
          asdas{{item.updateTime}}
        </div>
      </div>
      <div class="knowledge">
        <el-tag v-for="knowledge in item.knowledgelist" :key="knowledge.id">{{knowledge.name}}</el-tag>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CartListItem',
  props:{
    item:{
      type:Object,
      default(){
        return {}
      }
    }
  },
  methods:{
    checkClick(){
      //this.item.checked=!this.item.checked;
    }
  }
};
</script>

<style scoped>
.project-item {
  border-radius: 0;
  box-shadow: none;
  min-height: 0;
  transition: box-shadow 0.1s ease 0s;
  width: 100%;
  border-top: none;
  border-left: none;
  border-right: none;
  display: flex;
}

.item-title {
  display: inline;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  position: relative;
  vertical-align: middle;
  margin-top: 0;
}
.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #cccccc;
  word-break: break-all;
  color: rgba(0,0,0,0.5);
  font-size: 14px;
  line-height: 1.4285em;
  margin-top: 0.6em;

}

.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  position: relative;
  overflow: hidden;
}

.item-info .item-desc {
  font-size: 14px;
  color: #666;
  margin-top: 15px;
}

.info-bottom {
  margin-top: 10px;
  bottom: 10px;
  display: flex;
  justify-content: space-between;
}
.left-buttom {
  display: flex;
  justify-content: space-around;
}
.item-forks{
  margin-left: 100px;
}

.update-time{
  float: right!important;
}
.knowledge {
  display: flex;
}
</style>




<!--<template>-->
<!--  <div class="project-item">-->
<!--    <div class="item-info">-->
<!--      <div class="title">{{ item.title }}</div>-->
<!--      <div class="desc">{{ item.desc }}</div>-->
<!--      <div class="bottom">-->
<!--        <i class="el-icon-star-off"></i>-->
<!--        <div class="left">{{ item.stars }}</div>-->
<!--        <i class="el-icon-share"></i>-->
<!--        <div class="right">{{ item.forks }}</div>-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--  name: "ProjectItem",-->
<!--  props:{-->
<!--    item:{-->
<!--      type: Object,-->
<!--      default() { return {} }-->
<!--    }-->
<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->
<!--.project-item {-->
<!--  width: 100%;-->
<!--  display: flex;-->
<!--  font-size: 0;-->
<!--  padding: 5px;-->
<!--  border-bottom: 1px solid #ccc;-->
<!--}-->

<!--.item-info {-->
<!--  font-size: 17px;-->
<!--  color: #333;-->
<!--  padding: 5px 10px;-->
<!--  position: relative;-->
<!--  overflow: hidden;-->
<!--}-->

<!--.bottom{-->
<!--  margin-top: 10px;-->
<!--  position: absolute;-->
<!--  bottom: 10px;-->
<!--  left: 10px;-->
<!--  right: 10px;-->
<!--}-->
<!--.title,-->
<!--.desc{-->
<!--  overflow: hidden;-->
<!--  white-space: nowrap;-->
<!--  text-overflow: ellipsis;-->
<!--}-->


<!--</style>-->
