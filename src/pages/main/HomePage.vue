<template>
  <el-container>
    <el-header style="width:100%;margin: 0;padding: 0;top: 0;">
      <Header></Header>
    </el-header>
    <el-main style="width:100%;height:100%">
      <div class="upper">
      <div style="width: 70%;display: flex;margin-left: 30px">
        <div v-for="item in knowledgelist" :key="item.name" class="knoledge-item">
          <div class="list-img">
            <img :src='require(`@/assets/images/cover`+Math.floor((Math.random()*9)+1)+`.png`)' style="width:150px;border-radius: 10px" @click="currentKnowledge(item.knowledgeName)">
          </div>
          <div class="item-title">
            <p @click="currentKnowledge(item.knowledgeName)">{{item.knowledgeName}}</p>
          </div>
        </div>
      </div>
      <div style="background-color:aqua;width: 30%;margin-left: 20px">  <div class="block">

        <el-carousel height="200px">
          <el-carousel-item v-for="item in this.videolist" :key="item">
            <h3 class="small"><img :src="item.pic" style="width: 100%"></h3>
          </el-carousel-item>
        </el-carousel>
      </div></div>
      </div>
      <div class="bottom">
      <div class = "bootom-left" style="width:70%;">
          <div class="project-title">
            <p style="padding-top: 10px;padding-left: 20px;font-size: 27px">优秀项目</p>
            <div style="padding-right: 10px">
            <i class="el-icon-arrow-right"></i>
            <el-button type="text" @click="moreProjects">更多</el-button>
            </div>
          </div>
        <div v-for="item in projectlist" :key="item.name" class="projectitem" @click="clickProject(item.idProject)" >
          <div class="item-title">
            <p class="el-icon-dog"></p>
            <a :href="item.link" :title="item.name" target="_blank">{{item.name}}</a>
            <p style="padding-top: 20px;padding-left: 5px;">{{item.description}}</p>
            <div style="display: flex;padding-top: 30px;">
              <div>
                <el-tag v-for="knowledgeItem in item.knowledge" :key="knowledgeItem.knowledgeName" style="padding-left: 10px">
                  {{knowledgeItem.knowledgeName}}
                </el-tag>
              </div>
              <div>
              <el-tag>stars: {{item.starGazers}}</el-tag>
              <el-tag style="margin-left: 10px">fork: {{item.forks}}</el-tag>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="bottom-right">
        <div class="project-title">
          <div style="display: flex">
          <i class="el-icon-sunny" style="margin-top: 20px;margin-left: 10px"></i>
          <p style="padding-top: 10px;font-size: 27px">热门笔记</p>
          </div>
          <div style="padding-right: 10px">
            <i class="el-icon-arrow-right"></i>
            <el-button type="text" @click="moreNotes">更多</el-button>
          </div>
        </div>
        <div v-for="item in projectlist" :key="item.name" class="projectitem" >
          <div class="item-title">
            <p class="el-icon-dog"></p>
            <a :href="item.link" :title="item.name" target="_blank">{{item.name}}</a>
            <p>{{item.description}}</p>

            <div style="display: flex;">
              <el-tag><i class="el-icon-view"></i>{{item.stars}}</el-tag>
              <el-tag style="margin-left: 10px"><i class="el-icon-thumb"></i>{{item.stars}}</el-tag>
            </div>
          </div>
        </div>
      </div>
      </div>
    </el-main>
    <el-footer class="footer">
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import {GET_KNOWLEDGE, GET_VIDEO, GET_PROJECT, GET_NOTE} from "@/utils/api/homepage";
import KnowledgeDetailView from "@/pages/knowledge/KnowledgeDetailView"
import Login from "@/pages/user/Login";
export default {
  name: 'HomePage',
  components: {
    Header,
    Footer
  },

  mounted() {
    this.getVideoData();
    this.getKnowledgeData();
    this.getProjectData();


  },
  props: {
    msg: String
  },
  methods: {
    async getVideoData(){
      this.videoPageSize=5;
      const res =  await GET_VIDEO({pageNum:0,pageSize: this.videoPageSize});
      this.videolist = res.data.records;
    },
    async getKnowledgeData(){
      const res = await GET_KNOWLEDGE({pageNum: this.knowledgePageNum});
      this.knowledgePages = res.data.pages;
      this.knowledgelist = res.data.records;
    },
    currentKnowledge(name){
      this.$router.push(Login);
    },
    async getProjectData(){
      const res = await GET_PROJECT();
      console.log(res);
      this.projectlist = res.data.records;
    },
    async getNoteData(){
      const res = await GET_NOTE();
      this.notelist = res.data.records;
    },
    clickProject(id){
      this.$router.push(`/project-detail?id=${id}`);
    },
    moreProjects(){
      this.$router.push('/projects');
    },
    moreNotes(){
      this.$router.push('/notes');
    }

    },

  data(){
    return{
      notelist:[],
      videolist:[],
      knowledgelist: [],
      total: 0,
      videoPageSize: 0,
      knowledgePageNum: 0,
      knowledgePages: 0,
      randomNum: [],
      projectlist: [],

    }
  }
  }



</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.upper{
  display: flex;
  width: 80%;
  margin-left: 13%;
  height:200px;
}
.item-title{

  margin-top: 0px;
}
.bottom-right{
  width: 30%;
  margin-left: 20px;
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.bottom{
  display: flex;
  width: 80%;
  margin-left: 13%;
  height:80%;
  margin-top: 20px;
}
.bootom-left{
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.knoledge-item{
  padding-top: 10px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04);
  width: 200px;
  margin-right: 78px;
  text-align: center;
}
.el-icon-dog{
  background: url(@/assets/images/github.png) center no-repeat;  /*使用自己的图片来替换*/
  background-size: contain;
}
.el-icon-dog:before{
  content: "dog";                                    /*before属性中的content文本是用来占位的,必须有*/
  font-size: 20px;                                   /*可以设置字体大小来确定图标大小*/
  visibility: hidden;                                /*使用visibility: hidden;来隐藏文字*/
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.note {
  position: absolute;
  right: -300px;
  bottom: 0;
  margin-right: 0;
  width: 600px;
  height: 600px;
  margin-bottom: 0;
}
.projectitem {

  display: flex;
  padding-top: 30px;
  padding-bottom: 30px;
  padding-right: 30px;



  padding-left: 30px;
  border-left: none;
  border-right: none;
  border-bottom: none;
  border-top:solid;
  border-top-color:#E6E6E6;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 200px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n+1) {
  background-color: #d3dce6;
}
.project-title{
  justify-content: space-between;
  display: flex;

}
</style>
