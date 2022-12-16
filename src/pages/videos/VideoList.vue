<template>
    <el-row class="wrapper">
        <el-col :xs="24" :sm="24" :xl="24" style="margin: 0 auto;">
          <el-col v-for="video in videos.records" :key="video.idVideo" style="padding-bottom: 1rem;">
            <video-item :item="video" @click.native="click(video.idVideo)"></video-item>
          </el-col>
          <el-col>
            <div class="vertical-container text-center">
              <el-pagination class="page"
                             :hide-on-single-page="true"
                             layout="total, prev, pager, next, jumper"
                             :page-size="videos.size"
                             :current-page="videos.current"
                             :total="videos.total"
                             prev-text="上一页"
                             next-text="下一页"
                             @current-change="currentChange">
              </el-pagination>
            </div>
          </el-col>
        </el-col>
      </el-row>
    </template>
    <script>
    import VideoItem from '@/pages/videos/VideoItem.vue'
    export default {
        name: 'VideoList',
        props: {
            videos: {
                type: Object
            }
        },
        methods: {
            currentChange(page) {
                console.log("videolist "+page);
                this.$emit('currentChange', page)
            },
          click(id){
              this.$router.push(`/video-detail?id=${id}`)
          }
        },
        components: {
            VideoItem
        }
    }
    </script>
    <style scoped>
    .wrapper {
      max-width: 980px;
      margin: 20px auto;
      display: block;
      padding-left: 1rem;
      padding-right: 1rem;
      box-sizing: border-box;
      float: none;
    }
    .page {
      margin-top: 20px;
      text-align: center;
    }
    </style>
