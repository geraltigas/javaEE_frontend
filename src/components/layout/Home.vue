<template>
    <div class="main_container">
      <el-carousel indicator-position="outside">
        <el-carousel-item v-for="item in 4" :key="item">
          <CarouselItem
            :head="'1231'"
            :short="'RYMCU 的使命是让电子设计变得 so easy。本白皮书概述了我们努力打造一个新的嵌入式知识学习交流平台的计划，以期为嵌入式知识学习交流开创新的方式。了解 RYMCU问题描述互联网和移动宽带的诞生令全球数十亿人得以获得世界各地的知识与信息、享受高保真通信，以及各种各样成本更低、更便捷的服务。但是，现有的嵌入式知识社区或多或少的存在以下问题:界面风格老式，没有跟上时代发展的步伐缺乏创新、好玩的特'"
            :tags="['#公告', '#嵌入式']"
            :time="'发布于一年前'"
          ></CarouselItem>
        </el-carousel-item>
      </el-carousel>
      <div class="artical_flow">
        <div v-for="(item,index) in articals" :key="index">
          <div style="display:flex">
            <div class="artical_flow_item" >
            <div class="artical_header">
              <h1>{{ item.head }}</h1>
            </div>
            <div class="artical_lessons">
                <div v-for="lesson in item.lessons" :key="lesson">
                    <div class="artical_lesson">
                            <h4>{{ lesson }}</h4>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="(index<2)" style="margin-top:100px;margin-left:40px">
            <button style="width:50px;height:50px">=></button>
          </div> 
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import CarouselItem from "@/components/main/CarouselItem";

  export default {
    name: "MainView",
    components: { 
        CarouselItem ,
    },
    data() {
      return {
        articals: [
          {
            head: "java基础",
            lessons: ["java语法","java的面向对象","java的面向对象","java的面向对象","java的面向对象"],
          },
          {
            head: "javaWeb",
            lessons: ["数据库","HTML","Vue","HTML","Vue","HTML","Vue"],
          },
          {
            head: "java开发框架",
            lessons: ["spring","springMVC","Mybatis","SpringBoot","SpringBoot","SpringBoot","SpringBoot","SpringBoot","SpringBoot","SpringBoot",],
          },
        ],
      };
    },
  };
  </script>
  
  <style scoped>
  .artical_header {
    color: white;
    height: 50px;
    display: flex;
    /* background-color: rgb(0, 121,255); */
    background: -webkit-linear-gradient(left,rgb(0, 162,255),rgb(9, 98,255)) no-repeat;
    align-items: center;
    justify-content: center;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
  }
  .artical_flow_item {
    width: 200px;
    height: 400px;
    border-radius: 4px;
    margin-bottom: 20px;
    margin-top: 0px;
    margin-left: 50px;
  }
  
  .artical_flow {
    width: 100%;
    height: 100%;
    display:flex;
    flex-direction: row;
    justify-content: center;
    /* align-items: center; */
  }
  .main_container {
    width:80%;
    padding: 0;
    margin: auto;
    background-color: #f6f7f8;
  }
  .artical_lessons {
    height: 360px;
    width: 100%;
    overflow-y:visible;
    overflow-x: hidden;
    background-color: #f4f9ff;
  }
  .artical_lesson {
    height: 50px;
    width: 99%;
    border: 1px solid #a9cdff;
    background-color: #f6f7f8;
    display:flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
}
  </style>
  