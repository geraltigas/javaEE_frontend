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
      <div v-for="item in articals" :key="item">
        <div class="artical_flow_item">
          <div class="artical_header">
            <el-link @click="showDetail(item.idNote)"
              style="color: black"
              type="primary"
              class="artical_true_head" 
            >
              <h1>{{ item.head }}</h1>
            </el-link>
            <div class="artical_tags">
              <div v-for="tag in item.tags" :key="tag">
                <el-tag type="primary">{{ tag }}</el-tag>
              </div>
            </div>
          </div>
          <div class="artical_short">
            {{ item.short }}
          </div>
          <div class="artical_user">
            <div class="artical_user_info">
              <div class="artical_user_head">
                <img
                  src="https://avatars.githubusercontent.com/u/20457624?v=4"
                  alt=""
                  class="artical_avatar"
                />
              </div>
              <div class="artical_user_right">
                <div class="artical_user_name">
                  {{ item.user.name }}
                </div>
                <div class="artical_time">
                  {{ item.time }}
                </div>
              </div>
            </div>
            <div class="artical_read">
              <img class="artical_read_img" src="src/assets/barchart.png" />
              <div class="artical_read_num">
                {{ item.read }}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CarouselItem from "@/components/main/CarouselItem";
export default {
  name: "MainView",
  components: { CarouselItem },
  data() {
    return {
      articals: [
        {
          head: "什么是嵌入式系统？",
          short:
            "什么是贪嗔痴？因外在人、事、物而引发内心情绪，因情绪的涌动而产生感受，感受好就喜欢，巴不得这样的感受不要消失，这就是贪；感受不好，就不喜欢，巴不得除之而后快，这就是嗔；而对自己的贪与嗔没有一点觉知，从而被内心的贪嗔好恶牵着鼻子走，就叫痴。一个人若不能对自己内心的贪嗔好恶有所觉知，则自然会被贪嗔好恶牵着鼻子走，它要我们快乐我们就快乐，它要我们烦恼痛苦我们就烦恼痛苦，内心不能自由，这也就是为什么佛教说",
          tags: ["#嵌入式", "#公告"],
          user: {
            name: "Geraltigas",
            avatar:
              "https://avatars2.githubusercontent.com/u/2276718?s=460&v=4",
          },
          time: "13天前",
          read: 123,
        },
        {
          head: "什么是嵌入式系统？",
          short:
            "什么是贪嗔痴？因外在人、事、物而引发内心情绪，因情绪的涌动而产生感受，感受好就喜欢，巴不得这样的感受不要消失，这就是贪；感受不好，就不喜欢，巴不得除之而后快，这就是嗔；而对自己的贪与嗔没有一点觉知，从而被内心的贪嗔好恶牵着鼻子走，就叫痴。一个人若不能对自己内心的贪嗔好恶有所觉知，则自然会被贪嗔好恶牵着鼻子走，它要我们快乐我们就快乐，它要我们烦恼痛苦我们就烦恼痛苦，内心不能自由，这也就是为什么佛教说",
          tags: ["#嵌入式", "#公告"],
          user: {
            name: "Geraltigas",
            avatar:
              "https://avatars2.githubusercontent.com/u/2276718?s=460&v=4",
          },
          time: "13天前",
          read: 123,
        },
        {
          head: "什么是嵌入式系统？",
          short:
            "什么是贪嗔痴？因外在人、事、物而引发内心情绪，因情绪的涌动而产生感受，感受好就喜欢，巴不得这样的感受不要消失，这就是贪；感受不好，就不喜欢，巴不得除之而后快，这就是嗔；而对自己的贪与嗔没有一点觉知，从而被内心的贪嗔好恶牵着鼻子走，就叫痴。一个人若不能对自己内心的贪嗔好恶有所觉知，则自然会被贪嗔好恶牵着鼻子走，它要我们快乐我们就快乐，它要我们烦恼痛苦我们就烦恼痛苦，内心不能自由，这也就是为什么佛教说",
          tags: ["#嵌入式", "#公告"],
          user: {
            name: "Geraltigas",
            avatar:
              "https://avatars2.githubusercontent.com/u/2276718?s=460&v=4",
          },
          time: "13天前",
          read: 123,
        },
      ],
    };
  },
  created(){
    this.initData()
  },
  methods: {
    initData()
    {
      this.getNoteList()
    },
    getNoteList() {
      axios.get('/notes/get-notes-by-time', {
      }).then(function (res) {
        this.articals = res.data
      })
    },
    showDetail(id)
    {
      this.$router.push("/notedetail/" + id);
    }
  }
};
</script>

<style scoped>
.artical_read {
  display: flex;
  flex-direction: row;
  margin-top: 25px;
}
.artical_read_num {
  margin-left: 8px;
  font-size: 12px;
  color: #999;
}
.artical_user_info {
  display: flex;
  flex-direction: row;
  left: 10px;
}
.artical_user_right {
  margin-top: 16px;
  margin-left: 10px;
}
.artical_flow_item {
  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.24) 0px 3px 8px;
  border-radius: 10px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;
}

.artical_read_img {
  width: 20px;
  height: 20px;
}

.artical_avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-top: 20px;
}

.artical_user {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
}

.artical_short {
  margin-top: 15px;
  font-size: 18px;

  overflow: hidden;
  height: 200px;
}

.artical_header {
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 5px;
}

.artical_tags {
  display: flex;
  flex-direction: row;
  left: 2px;
}
.artical_tags > div {
  margin-right: 3px;
}

.artical_flow_item {
  width: 100%;
  height: 300px;
  border: 1px solid #ebeef5;
  border-radius: 4px;
  padding: 10px;
  margin-bottom: 20px;
}
.el-carousel {
  height: 250px;
}

.artical_flow {
  width: 100%;
  height: 100%;
  background-color: #f6f7f8;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.main_container {
  width:80%;
  padding: 0;
  margin: auto;
  background-color: #f6f7f8;
}
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}
.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
