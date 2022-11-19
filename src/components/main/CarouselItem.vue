<template>
  <div class="carousel_item_container">
    <div class="item_container">
      <div >
        <el-link type="primary" class="header">
          <div class="header_container">
            <div class="header_" >
              <h1 style="color: black">{{head}}</h1>
            </div>
            <div class="tags">
              <div v-for="item in tags" :key="item.id">
                <el-tag>{{item}}</el-tag>
              </div>
            </div>
          </div>
        </el-link>
      </div>
      <div class="short">
        {{ short }}
      </div>
      <div class="time">
        {{ time }}
      </div>
    </div>
  </div>
</template>

<style scoped>
.header_container {
  display: flex;
  flex-direction: row;
}
.header_container > div {
  margin-left: 5px;
}
.tags {
  margin-left: 10px;
  display: flex;
  flex-direction: row;
  margin-top: 15px;
}
.tags > div {
  margin-left: 5px;
}
.item_container {
  height: 320px!important;
  margin: 10px;
}
.time {
  top: 7px;
}
.header {
  display: flex!important;
  flex-direction: row!important;
  justify-content: left!important;
  width: 200px;
  height: 20%;
  background-color: #f6f7f8;
  left: 5px;
}

.short {
  top: 10px;
  font-size: 18px;
  width: 100%;
  height: 110px;
  display: -webkit-box;
  overflow: hidden;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
}
.tags {
  align-items: center;
  width: 50%;
  height: 100%;
  background-color: #f6f7f8;
  left: 10px;
}
.tags > .el-link--inner {
  width: 200px;
  display: flex;
  flex-direction: row;
  margin: 0 2px;
}
.carousel_item_container {
  width: 100%;
  height: 100%;
  background-color: #f6f7f8;
  display: flex;
  flex-direction: column;
}
</style>

<script>
export default {
  name: "CarouselItem",
  props: {
    head: {
      type: String,
      required: true,
    },
    short: {
      type: String,
      required: true,
    },
    tags: {
      type: Array,
      required: true,
    },
    time: {
      type: String,
      required: true,
    },
  },
  data() {
    return {};
  },
};
</script>
