<template>
  <div>
    <div class="video">
      <div class="item-img">
        <img :src="item.pic" alt="电子书图片" />
      </div>
      <div class="item-info">
        <div class="item-header">
          <div class="item-title">
            <span>{{ item.title }}</span>
          </div>
          <div class="knowledge">
            <el-tag style="margin-left: 5px" v-for="i in item.knowledge" :key="i.idKnowledge" effect="plain">
              # {{i.knowledgeName}}
            </el-tag>
          </div>
        </div>
        <div class="item-desc" style="color: #666666;font-size: 14px;">
          {{ item.description }}
        </div>
        <div class="item-bottom">
          <div>
            <i class="el-icon-user-solid"></i>
            {{ item.author }}
          </div>
          <div class="item-forks" >
            <i class="el-icon-notebook-2"></i>
            {{ item.length }}
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'VideoItem',
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
.video {
  width: 100%;
  font-size: 0;
  padding: 5px;
  display: flex;
  border-bottom: 1px solid #ccc;
}
.item-info {
  width: 100%;
  margin-left: 25px;
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
  cursor: pointer;
}
.item-img img {
  width: 80px;
  height: 100px;
  display: block;
  border-radius: 5px;
}

.item-bottom,
.item-desc {
  margin-top: 10px;
  font-size: 15px;
  bottom: 10px;
  left: 10px;
  right: 10px;
  display: flex;

}
.left-bottom {
  display: flex;
}
.item-forks {
  margin-left: 50px;
}
.update-time {
  margin-left: 50px;
  color: #cccccc;
}

</style>
