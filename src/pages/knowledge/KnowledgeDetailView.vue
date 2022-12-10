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
            <div class="box-card">
              <div v-for="item in lessonlist" :key="item.title" class="item">
                <div class="list-img">
                <img :src=item.img style="height: 80%" @click="clickImg(item.link)">
                </div>
                <div class="item-title">
                  <a :href="item.link" :title="item.title" target="_blank">{{item.title}}</a>
                  <p>{{item.summary}}</p>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="项目" style="border-radius: 10px">
            <div class="box-card">
              <div v-for="item in projectlist" :key="item.name" class="projectitem" >
                <div class="item-title">
                  <p class="el-icon-dog"></p>
                  <a :href="item.link" :title="item.name" target="_blank">{{item.name}}</a>
                  <p>{{item.description}}</p>
                  <div style="display: flex">
                    <el-tag>stars: {{item.stars}}</el-tag>
                    <el-tag style="margin-left: 10px">fork: {{item.stars}}</el-tag>
                  </div>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="书籍">
            <div class="box-card">
              <div v-for="item in booklist" :key="item.title" class="item">
                <div class="list-img">
                  <img :src=item.coverlink style="height: 80%" @click="clickImg(item.url)">
                </div>
                <div class="item-title">
                  <a :href="item.url" :title="item.name" target="_blank">{{item.name}}</a>
                  <p><el-tag>Author: {{item.author}}</el-tag></p>
                  <p><el-tag>Publisher: {{item.publisher}}</el-tag></p>
                </div>
              </div>
            </div>
          </el-tab-pane>
          <el-tab-pane label="B站">
            <div class="box-card">
              <div v-for="item in videolist" :key="item.name" class="item">
                <div class="list-img">
                  <img :src=item.coverlink style="height: 80%" @click="clickImg(item.url)">
                </div>
                <div class="item-title">
                  <a :href="item.url" :title="item.title" target="_blank">{{item.name}}</a>
                  <p>description: {{item.description}}</p>
                  <el-tag>author: {{item.author}}</el-tag>

                </div>
              </div>
            </div>
          </el-tab-pane>
        </el-tabs>
        <div class="table">
          <el-table
          :data="tableData"
          style="width: 100%"
          :header-cell-style="{
            'background-color': '#1989fa',
            'color': '#fff'}">
            <el-table-column
            prop="date"
            label="技术"
            width="100">
        </el-table-column>
        <el-table-column
            prop="name"
            label="教程名"
            width="270">
        </el-table-column>

      </el-table>
        </div>
      </div>
      <div class="pages">
        <el-pagination
            background
            layout="prev, pager, next"
            @current-change="changePage"
            :current-page="this.pageNum"
            :total="this.pagesTotal">
        </el-pagination>
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
import {GET_BOOK,GET_VIDEO,GET_LESSON,GET_PROJECT,GET_TUTORIAL,GET_KNOWLEDGE} from "@/utils/api/knowledgeDetail";

export default {
  mounted() {
    this.loadingData(this.currentTab);
  },
  name: "KnowledgeDetailView",
  id: 123,
  components: {
    Header,
    Footer
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
      currentTab:0,
      pageNum: 1,
      pageSize: 10,
      pagesTotal: 500,
      knowledgeName: this.$route.params.knowledge_name,
      knowledgeDetail: GET_KNOWLEDGE(this.id,{pageNum:this.pageNum,pageSize:this.pageSize}),
      summary: "Java是一门面向对象的编程语言，不仅吸收了C++语言的各种优点，还摒弃了C++里难以理解的多继承、指针等概念，因此Java语言具有功能强大和简单易用两个特征。Java语言作为静态面向对象编程语言的代表，极好地实现了面向对象理论，允许程序员以优雅的思维方式进行复杂的编程",
      lessonlist1: GET_LESSON(this.id,{pageNum:this.pageNum,pageSize:this.pageSize}),
      lessonlist: [
        {
          title: "Java基础语法",
          summary: "这是Java语法",
          img: "http://yun.itheima.com/Upload/./Images/20220906/6316a12be142b.jpg",
          link: "http://www.baidu.com"
        },
        {
          title: "Java基础语法",
          summary: "这是Java语法",
          img: "http://yun.itheima.com/Upload/./Images/20220906/6316a12be142b.jpg",
          link: "http://www.baidu.com"
        }
      ],
      projectlist1: GET_PROJECT(this.id,{pageNum:this.pageNum,pageSize:this.pageSize}),
      projectlist: [
        {
          name: "Javaee项目",
          link: "http://www.baidu.com",
          description: "这是一个项目",
          stars: 15

        },
        {
          name: "Javaee项目",
          link: "http://www.baidu.com",
          description: "这是一个项目",
          stars: 15

        }
      ],
      booklist1: GET_BOOK(this.id,{pageNum:this.pageNum,pageSize:this.pageSize}),
      booklist:[
        {
          name: "Java从入门到如土",
          coverlink: "http://yun.itheima.com/Upload/./Images/20220906/6316a12be142b.jpg",
          url: "http://www.baidu.com",
          author: "lzy",
          publisher: "出版社"
        }
      ],
      videolist1: GET_VIDEO(this.id,{pageNum:this.pageNum,pageSize:this.pageSize}),
      videolist:[
        {
          name: "Java从入门到如土",
          coverlink: "http://yun.itheima.com/Upload/./Images/20220906/6316a12be142b.jpg",
          url: "http://www.baidu.com",
          author: "lzy",
          description: "Java"
        }
      ],
      tutoriallist: GET_TUTORIAL(this.id),
      tableData: [{
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      }, {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      }]
    }
},
  methods: {
    clickImg(link){
      window.open(link)
      console.log(link)
    },
    changePage(val){
      this.pageNum=val;
      console.log(this.pageNum)
    },
    tabClick(tab){
      this.currentTab = tab._data.index
      this.loadingData(this.currentTab)
      console.log(tab._data.index)
    },
    loadingData(currentTab){
      switch (currentTab){
        case 0: this.lessonlist1=GET_LESSON(this.id,{pageNum:this.pageNum,pageSize:this.pageSize})
          break;
        case 1:this.projectlist1=GET_PROJECT(this.id,{pageNum:this.pageNum,pageSize:this.pageSize})
          break;
        case 2:this.booklist1=GET_BOOK(this.id,{pageNum:this.pageNum,pageSize:this.pageSize})
          break;
        case 3:this.videolist1=GET_VIDEO(this.id,{pageNum:this.pageNum,pageSize:this.pageSize})
          break;
      }
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
.el-table{
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, .12), 0 0 6px rgba(0, 0, 0, .04)
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
