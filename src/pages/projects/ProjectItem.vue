<template>
  <div>
    <div class="project item-info">
      <div class="item-header">
        <div class="item-title">
          <span>{{ item.name }}</span>
          <el-tag style="margin-left: 5px">{{item.language}}</el-tag>
        </div>
        <div class="knowledge" v-if="item.knowledge.length !== 0">
          <el-tag style="margin-left: 5px"  v-for="i in item.knowledge" :key="i.idKnowledge">
            {{i.knowledgeName}}
          </el-tag>
        </div>
      </div>
      <div class="item-desc">{{ item.description }}</div>
      <div class="item-bottom">
        <div class="left-bottom">
          <div class="item-stars">
            <i class="el-icon-star-off"></i>
            {{ item.starGazers }}
          </div>
          <div class="item-forks" >
            <i class="el-icon-share"></i>
            {{ item.forks }}
          </div>
        </div>
        <div class="update-time">
          {{item.updateTime}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProjectItem',
  props:{
    item:{
      type:Object,
      default(){
        return {}
      }
    }
  },
}
</script>

<style scoped>
.project {
  width: 100%;
  font-size: 0;
  padding: 5px;
  border-bottom: 1px solid #ccc;
}
.item-info {
  font-size: 17px;
  color: #333;
  padding: 5px 10px;
  overflow: hidden;
}
.item-header {
  display: flex;
  justify-content: space-between;
}
.item-title {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  font-weight: bold;
  margin-bottom: 10px;

}

.item-desc {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: #666666;
  font-size: 14px;
}

.item-bottom {
  margin-top: 10px;
  font-size: 15px;
  bottom: 10px;
  left: 10px;
  right: 10px;
  display: flex;
  justify-content: space-between;
}
.left-bottom {
  display: flex;
}
.item-forks {
  margin-left: 50px;
}
.update-time {

  color: #cccccc;
}

</style>
