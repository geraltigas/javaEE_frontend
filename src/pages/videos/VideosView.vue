<template>
  <div>
    <HeaderView/>
    <el-card class="box-card container">
      <VideoItem v-for="video in videos" :item="video" :key="video.id"></VideoItem>
    </el-card>
    <el-pagination
        class="page"
        @current-change="getVideos"
        :current-page="current"
        :page-size="pageSize"
        layout="total, prev, pager, next, jumper"
        :total="total">
    </el-pagination>
    <FooterView class="footer"/>
  </div>
</template>

<script>
import FooterView from "@/components/layout/Footer";
import HeaderView from "@/components/layout/Header";
import VideoItem from "@/pages/videos/VideoItem";
import {GET_VIDEOS} from "@/utils/api/Resource";


export default {
  name: "VideosView",
  components:{FooterView, HeaderView, VideoItem},
  data() {
    return {
      current: 0,
      pageSize: 20,
      total: 0,
      videos: [
      ]
    }
  },
  created() {

    this.getVideos(this.current)
  },
  methods: {
    async getVideos(val) {
      const res = await GET_VIDEOS({pageNum: val, pageSize: this.pageSize})
      console.log(res)
      this.videos = res.records
      this.current = res.current
      this.total = res.total
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  margin-top: 20px;
  max-width: 60%;
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
  background-color: white;
}

.page {
  margin-top: 20px;
  text-align: center;
}
.addWidth {
  height: 100vh!important;
  right: 0px!important;
  width: 800px!important;
  min-width:800px!important;
  position: absolute;
  z-index: 11!important;
  top: 0px!important;
  bottom: 0px!important;
}
.m-slidebar{
  height: 100vh!important;
  transition: width 1s;
  right: -800px;    /* 侧边栏有多宽，就-多少，相当于先藏在视窗外边（从左边打开的话就换成left）,我这个侧边栏在右边 */
  width: 800px;
  min-width: 800px;
  position: absolute;
  z-index: 11;
  transition: all 0.2s;
  height: calc(100vh - 2.5rem);
  background: white;
  box-shadow: 0px 5px 5px rgba(11,2,5,0.1);
  top: 0px;
  bottom: 0px;

  .m-closeBtn{
    position: absolute;
    width: 60px;
    height: 40px;
    left: -60px;
    top: 700px;
    background-image: linear-gradient(135deg, #5e60eb 3%, #4282fa 100%),linear-gradient(#edf2fc, #edf2fc);
    box-shadow: 0px 5px 5px rgba(11,2,5,0.1);
    border-radius: 6px 0px 0px 6px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
	}
}
</style>
