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

<style scoped>
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
</style>
