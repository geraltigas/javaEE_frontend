<template>
  <el-container className="main_main_container">
    <el-header>
      <Header></Header>
    </el-header>
    <el-main class="main_main">
      <el-container class="knowledge-box">
        <div class="knowledge-content">
          <div class="title">
            <div class="title_img">
            <img src="@/assets/images/Java.png" width="80">
            <p style="margin-top: 10px">{{knowledgeName}}</p>
            </div>
            <el-button style="margin-right: 10px" type="primary" @click="back">返回</el-button>
          </div>
          <p style="padding-top: 5px">{{summary}}</p>
        </div>
      </el-container>
      <div class="content">
        <el-tabs type="border-card" class="resource-box" style="border-radius: 10px" @tab-click="tabClick">
          <el-tab-pane label="网课">
              <LessonListView :knowledge-id="id"/>
          </el-tab-pane>
          <el-tab-pane label="项目" style="border-radius: 10px">
            <ProjectListView :knowledge-id="id"/>
          </el-tab-pane>
          <el-tab-pane label="书籍">
            <BookListView :knowledge-id="id"/>
          </el-tab-pane>
          <el-tab-pane label="B站">
            <BilibiliListView :knowledge-id="id"/>
          </el-tab-pane>
        </el-tabs>
        <TutorialListView :knowledge-id="id"/>
      </div>

    </el-main>
    <el-footer>
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
import Header from "@/components/layout/Header.vue";
import Footer from "@/components/layout/Footer.vue";
import {GET_KNOWLEDGE} from "@/utils/api/knowledgeDetail";
import LessonListView from "@/pages/knowledge/LessonListView";
import ProjectListView from "@/pages/knowledge/ProjectListView";
import BookListView from "@/pages/knowledge/BookListView";
import TutorialListView from "@/pages/knowledge/TutorialListView";
import BilibiliListView from "@/pages/knowledge/BilibiliListView";

export default {

  name: "KnowledgeDetailView",

  components: {
    BilibiliListView,
    ProjectListView,
    LessonListView,
    TutorialListView,
    BookListView,
    Header,
    Footer
  },
  created() {
    const res = GET_KNOWLEDGE(this.id);
    this.knowledgeName = res.name
    this.summary = res.description

  },
  watch: {
    $route :{
      handler: function () {

        console.log("router_param" ,this.$route.params.knowledge_name)
      },
      immediate: true
    }
  },
data(){
  return{
      id: 4,
      currentTab:0,
      knowledgeName: this.$route.params.knowledge_name,
      summary: ''

    }
},
  methods: {
    tabClick(tab){
      this.currentTab = tab._data.index
      this.loadingData(this.currentTab)
      console.log(tab._data.index)
    },
    back(){
      window.history.back();
    },

  },


}
</script>

<style scoped>
.title_img{
  display: flex;
}
.knowledge-box{
  width: 50%;
  margin-left: 50%;
  transform: translate(-50%,0%);
  display: inline-block;
  height :250px;

  background-image: linear-gradient(to bottom,white,#58ACFA);
  border-radius: 10px;
  padding-left: 30px;
  padding-top: 20px;
  padding-right: 30px;
}

.title{
  justify-content: space-between;
  display: flex;
  align-items: center;
  font-size: 20px;
}

.el-tab-pane{
  border-radius: 10px;

}

.item {
  height: 150px;
  display: flex;
  margin-top: 20px;
  padding-top: 30px;
  padding-left: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
.projectitem {
  height: 150px;
  display: flex;
  margin-top: 20px;
  padding-top: 0px;
  padding-left: 30px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
}
img{
  border-radius: 10px;
  cursor: pointer;
}
.resource-box{
  width: 32%;
  margin-left: 50%;
  transform: translate(-80%,0%);
  background-color: white;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)

}
::v-deep .el-tabs__nav-scroll{
  padding: 4px 0;
}
a{
  text-decoration: none;
  color: black;
}
.item-title{
  padding-left: 30px;
  padding-right: 10px;
}
.knowledge-content{

}
.content{
  margin-top: 10px;
  width: 100%;
  display: flex;

}
.table{
  width: 19%;
  transform: translate(-134%);
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
.pages{
  margin-top: 20px;
  text-align: center;
}
.main_main{

}
</style>
