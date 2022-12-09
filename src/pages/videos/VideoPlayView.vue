<template>
    <div id="video_detail" style="padding-right: 40px; padding-left: 40px; padding-bottom: 50px;">
        <el-card>
          <div id="video_player" style="padding-right: 200px; padding-left: 200px; padding-bottom: 50px;">
            <iframe
            ref="videoPlay"
            :src="this.currentBook.url"
            controls width="1080" height="720"
          ></iframe>
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
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: "VideoPlayView",
  el: "#book_detail",
  data() {
    return {
        currentVideo: {
            id: '1',           // 视频id
            title: '黑马程序员新版Linux零基础快速入门到精通',        // 标题
            url: 'https://player.bilibili.com/player.html?aid=604566039&bvid=BV1n84y1i7td&cid=877088830&page=1',     // 视频链接
            author: '黑马程序员',       // 作者
            description: '本套课程设计为零基础快速入门Linux操作系统系列课程，服务零基础学员为设计基石。课程在基础的Linux系统知识之外，规划了《全方向》涉及到的Linux所需软件服务的部署实战，无论从事Java后端、大数据开发、测试、运维等方向，均可从中受益。课程以Shell脚本、Python脚本自动化为基点，设计了大规模大数据集群部署、运维、监控、自动化项目实战，一站式收获知识和经验。并且课程结合了当下最新的云平台技术，为大家带来了Linux操作系统云上实践环节。',    // 描述信息
            knowledeges: [{
              id: '1',                   // 知识点id
              knowledgeName: 'Java EE',        // 知识点
              knowledgeDescription: 'Java EE（Java Platform，Enterprise Edition）是sun公司（2009年4月20日甲骨文将其收购）推出的企业级应用程序版本。这个版本以前称为 J2EE。能够帮助我们开发和部署可移植、健壮、可伸缩且安全的服务器端 Java应用程序。Java EE 是在 Java SE 的基础上构建的，它提供Web 服务、组件模型、管理和通信 API，可以用来实现企业级的面向服务体系结构（service-oriented architecture，SOA）和 Web 3.0应用程序。' // 知识点描述
            },{
              id: '2',                   // 知识点id
              knowledgeName: 'Java SE',        // 知识点
              knowledgeDescription: 'Java EE（Java Platform，Enterprise Edition）是sun公司（2009年4月20日甲骨文将其收购）推出的企业级应用程序版本。这个版本以前称为 J2EE。能够帮助我们开发和部署可移植、健壮、可伸缩且安全的服务器端 Java应用程序。Java EE 是在 Java SE 的基础上构建的，它提供Web 服务、组件模型、管理和通信 API，可以用来实现企业级的面向服务体系结构（service-oriented architecture，SOA）和 Web 3.0应用程序。' // 知识点描述
            }],
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
  methods:  {
    init(id_video){
      axios.get('/videos/' + id_video)
      .then(response=>{this.currentVideo = Object.assign({}, response.data)})
      .catch(e => self.$message.error(e.response.data));
    },
    tagRowClassName(index) {
        if(index % 5 === 0) {
          return '';
        } else if(index % 5 === 1) {
          return 'success'
        } else if(index % 5 === 2) {
          return 'info'
        } else if(index % 5 === 3) {
          return 'warning'
        } else if(index % 5 === 4) {
          return 'danger'
        }
        return '';
      }
    }
}
</script>

<style scoped>
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
</style>