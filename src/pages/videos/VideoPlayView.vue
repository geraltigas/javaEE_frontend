<template>
  <div id="video_detail" style="padding-right: 40px; padding-left: 40px; padding-bottom: 50px;">
    <HeaderView/>
    <el-card>
      <div>


      <div id="video_player" style="padding-right: 200px; padding-left: 200px; padding-bottom: 50px;">

        <iframe
            :src="videoLink"
                scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"
                controls width="1080" height="720" ref="videoPlay">
        </iframe>
        <div>
          <el-button @click="before">上一集</el-button>
          <el-button @click="next">下一集</el-button>
        </div>
      </div>
      </div>
      <div id="video_descriptiom">
        <el-descriptions class="margin-top" :column="3" border :content-style="CS" :label-style="LS" >
          <el-descriptions-item>
            <template slot="label"><i class="el-icon-notebook-1"></i>标题</template>
            {{this.currentVideo.title}}
          </el-descriptions-item>
          <el-descriptions-item>
            <template slot="label"><i class="el-icon-notebook-1"></i>作者</template>
            {{this.currentVideo.author}}
          </el-descriptions-item>
        </el-descriptions>
        <el-descriptions class="margin-top" :column="3" border :content-style="CS" :label-style="LS" >
          <el-descriptions-item>
            <template slot="label"><i class="el-icon-notebook-1"></i>详情描述</template>
            {{this.currentVideo.description}}
          </el-descriptions-item>
        </el-descriptions>
        <el-descriptions class="margin-top" :column="3" border :content-style="CS" :label-style="LS" >
          <el-descriptions-item>
            <template slot="label"><i class="el-icon-notebook-1"></i>知识点</template>
            <el-tag
                v-for="(knowledege, index) in this.currentVideo.knowledeges"
                :key="index"
                :type="tagRowClassName(index)">
              {{knowledege.knowledgeName}}
            </el-tag>
          </el-descriptions-item>
        </el-descriptions>
      </div>
    </el-card>
    <div class="m-slidebar" >
      <span class="m-closeBtn" id='m-closeBtn' @click="dianji" style="color:white">写笔记<Icon color="white" icon="ant-design:right-circle-outlined"></Icon></span>
      <div >
        <NoteEdit></NoteEdit>
      </div>
    </div>
    <Footer/>
  </div>
</template>

<script>
import axios from 'axios'
import NoteEdit from "@/components/layout/Article";
import HeaderView from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
export default {
  name: "VideoPlayView",
  components: {Footer, HeaderView, NoteEdit},
  el: "#book_detail",
  data() {
    return {
      current: 1,
      page: {},
      currentVideo: {
        id: 0,           // 视频id
        title: '',        // 标题
        bvid: '',     // 视频链接
        author: '',       // 作者
        description: '',
        knowledge: [],
        key: Date.now()
      },
      CS: {
        'text-align': 'left',  //文本居中
        'min-width': '250px',   //最小宽度
        'word-break': 'break-all',  //过长时自动换行
      },
      CS2: {
        'text-align': 'center',  //文本居中
        'min-width': '250px',   //最小宽度
        'word-break': 'break-all',  //过长时自动换行
      },
      LS: {
        'color': '#000',
        'text-align': 'left',
        'font-weight': '600',
        'height': '40px',
        'min-width': '110px',
        'word-break': 'keep-all',
        'width': '150px'
      }
    }
  },
  created() {
    this.init(this.$route.query.id)
  },
  computed: {
    videoLink() {
      return `https://player.bilibili.com/player.html?aid=861181459&bvid=${this.currentVideo.bvid}&cid=921346910&page=${this.current}`
    },
  },
  methods: {
    before() {
      if(this.current > 1){
        this.current--;
      }
      else{
        this.$message.error("到第一集了")
      }
    },
    next() {
      this.current++;
    },
    init(id_video) {
      axios.get('/videos/' + id_video)
          .then(response => {
            this.currentVideo = Object.assign({}, response.data)
            this.getPages(this.currentVideo.bvid)
          })
          .catch(e => self.$message.error(e.response.data));
    },
    getPages(bvid) {
      axios.get(`https://api.bilibili.com/x/web-interface/view?bvid=${bvid}`)
          .then((response) => {

              this.page = response.data.data
              console.log(this.page)
          })
    },
    tagRowClassName(index) {
      if (index % 5 === 0) {
        return '';
      } else if (index % 5 === 1) {
        return 'success'
      } else if (index % 5 === 2) {
        return 'info'
      } else if (index % 5 === 3) {
        return 'warning'
      } else if (index % 5 === 4) {
        return 'danger'
      }
      return '';
    },
    dianji() {
      var sideBar = document.getElementsByClassName('m-slidebar')[0];
      console.log(sideBar.classList);
      if (!sideBar.classList.contains('addWidth')) {
        console.log(sideBar.classList.contains('addWidth'));
        console.log(sideBar.classList);
        sideBar.classList.add("addWidth")

      } else {
        sideBar.classList.remove("addWidth");
      }
    }
  }
}
</script>

<style scoped lang="scss">
.el-tag + .el-tag {
  margin-left: 10px;
}
.button-new-tag {
  margin-left: 10px;
  height: 32px;
  line-height: 30px;
  padding-top: 0;
  padding-bottom: 0;
}
.input-new-tag {
  width: 90px;
  margin-left: 10px;
  vertical-align: bottom;
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
.m-slidebar {
  height: 100vh !important;
  transition: width 1s;
  right: -800px; /* 侧边栏有多宽，就-多少，相当于先藏在视窗外边（从左边打开的话就换成left）,我这个侧边栏在右边 */
  width: 800px;
  min-width: 800px;
  position: absolute;
  z-index: 11;
  transition: all 0.2s;
  height: calc(100vh - 2.5rem);
  background: white;
  box-shadow: 0px 5px 5px rgba(11, 2, 5, 0.1);
  top: 0px;
  bottom: 0px;

  .m-closeBtn {
    position: absolute;
    width: 60px;
    height: 40px;
    left: -60px;
    top: 700px;
    background-image: linear-gradient(135deg, #5e60eb 3%, #4282fa 100%), linear-gradient(#edf2fc, #edf2fc);
    box-shadow: 0px 5px 5px rgba(11, 2, 5, 0.1);
    border-radius: 6px 0px 0px 6px;
    text-align: center;
    line-height: 40px;
    cursor: pointer;
  }
}
</style>
