<template>
  <div>
    <HeaderView/>
    <el-card class="box-card container">
      <VideoItem v-for="video in videos" :item="video" :key="video.id"></VideoItem>
    </el-card>
    <el-pagination
        class="page"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="currentPage"
        :page-size="15"
        layout="total, prev, pager, next, jumper"
        :total="400">
    </el-pagination>
    <FooterView class="footer"/>
  </div>
</template>

<script>
import FooterView from "@/components/layout/Footer";
import HeaderView from "@/components/layout/Header";
import VideoItem from "@/pages/videos/VideoItem";


export default {
  name: "VideosView",
  components:{FooterView, HeaderView, VideoItem},
  data() {
    return {
      videos: [
        {id:1, title:"jva", coverUrl:'https://z-lib.is/uploads/covers/2022/8afc45931500aab31d03c8db9e85a03e-g.jpg',
          author:'qweweqq', language: 'Enaglish',fileSize:23,
          knowledgeList:[{id:1, name: 'java'}]}
      ]
    }
  },
  
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
