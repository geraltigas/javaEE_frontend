<template>
  <div class="main_container">
    <el-carousel indicator-position="outside">
      <el-carousel-item v-for="item in 4" :key="item">
        <CarouselItem
          :head="'1231'"
          :short="'Lerneur 是一个自主学习平台。我们正在构建一个知识平台。大家在这里自由学习，以平等 • 自由 • 奔放的价值观进行分享交流。最终，希望大家能够学习到自己需要的知识，丰富自己。最后请大家共同爱护这个自由的学习环境，相信这里一定是你注册过的所有平台中用户体验最好的 😍'"
          :tags="['#公告']"
          :time="'发布于一年前'"
        ></CarouselItem>
      </el-carousel-item>
    </el-carousel>
    <div class="artical_flow">
      <div v-for="(item,index) in articals" :key="index">
        <div class="artical_flow_item">
          <div class="artical_header">
            <el-link @click="showDetail(item.noteId)"
              style="color: black"
              type="primary"
              class="artical_true_head"
            >
              <h1>{{ item.noteTitle }}</h1>
            </el-link>

          </div>
          <div class="artical_short">
            {{ item.notePreviewContent }}
          </div>
          <div class="artical_user">
            <div class="artical_user_info">
              <div class="artical_user_head">
                <img
                  src="https://c-ssl.duitang.com/uploads/blog/202012/26/20201226223704_3f25a.jpg"
                  alt=""
                  class="artical_avatar"
                />
              </div>
              <div class="artical_user_right">
                <div class="artical_user_name">
                  {{ item.username }}
                </div>
                <div class="artical_time">
                  {{ item.createdTime }}
                </div>
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

axios.defaults.timeout = 100000
export default {
  name: "MainView",
  components: { CarouselItem},
  data() {
    return {
      articals: [],
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
      axios.get('/notes/get-notes-by-time').then((res) =>{
          this.articals = res.data.records
        console.log('123')
        console.log(res)
            }).catch(err => {
              // 报错
              console.log(err)
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
  width: 1200px;
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
