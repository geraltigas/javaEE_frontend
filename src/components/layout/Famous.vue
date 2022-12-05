<template>
    <el-row :gutter="10" class="notice">
    <el-col :span="12">
      <div class="notice_left">
        <div class="notice_title">
          <div class="title_left">
            <span>最新笔记推荐</span>
          </div>
          <div class="title_right">
            <el-link href="/homeview">查看更多 ></el-link>
          </div>
        </div>
        <div class="no_left_massage">
          <ul>
            <li v-for="(item,index) in noteList" :key="index">
              <p class="com-hover" @click="showDetail(item)" >{{item.head}}</p>
              <span class="time">{{item.time}}</span>
            </li>
          </ul>
        </div>
      </div>
    </el-col>
  </el-row>

</template>

<script>
export default {
  name: 'DashboardAdmin',
  data() {
    return {
      noteList: [
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
    }
  },

  created(){
    this.initData()
  },
  methods: {
    initData()
    {
    },
  }
}
</script>


<style lang="scss" scoped>
.notice {
  padding-bottom: 20px;
  .notice_title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 60px;
    padding: 0 25px;
    .title_left {
      display: flex;
      align-items: center;
      span {
        font-size: 16px;
        font-weight: bold;
        color: #333;
      }
    }
    .title_right {
      font-size: 12px;
      color: #999;
      line-height: 30px;
    }
  }
  .notice_right {
    background: #fff;
    height: 462px;
    border-radius: 4px;
    overflow: hidden;
    .no_right_massage {
      li {
        display: flex;
        background: #fff;
        border: 1;
        height: 170px;
        border-top: 1px solid #f2f2f5;
        .right_item {
          width: 50%;
          padding: 16px 20px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          .right-top {
            font-size: 14px;
            display: flex;
            align-items: center;
            img {
              margin-right: 10px;
            }
          }
          p {
            cursor: pointer;
            font-size: 14px;
            line-height: 22px;
            padding: 20px 0;
            color: #999;
            display: -webkit-box;
            line-clamp: 3;
            -webkit-line-clamp: 3;
            overflow: hidden;
            text-overflow: ellipsis;
            /*! autoprefixer: off */
            -webkit-box-orient: vertical;
            /* autoprefixer: on */
          }
          .bt {
            display: flex;
            justify-content: space-between;
            font-size: 12px;
            color: #999;
          }
        }
        .linet {
          border-left: 1px solid #f2f2f5;
        }
      }
    }
  }
  .notice_left {
    background: #fff;
    height: 462px;
    border-radius: 4px;
    overflow: hidden;
    .no_left_massage {
      height: 340px;
      padding: 10px 20px;
      border-top: 1px solid #f2f2f5;
      ul {
        li {
          display: flex;
          justify-content: space-between;
          font-size: 14px;
          color: #303133;
          padding: 10px 0;
          cursor: pointer;
          p {
            width: calc(100% - 80px);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
          }
          .time {
            width: 80px;
            display: inline-block;
            text-align: right;
            color: #999999;
          }
        }
      }
    }
  }
}

.componey {
  font-size: 14px;
  text-align: center;
  color: #999;
  padding-bottom: 10px;
}

.dashboard-editor-container {
  background-color: #ebeef5;
  position: relative;
  width: 100%;
  overflow: hidden;

  .github-corner {
    position: absolute;
    top: 0px;
    border: 0;
    right: 0;
  }

  .chart-wrapper {
    background: #fff;
    padding: 16px 16px 0;
    margin-bottom: 20px;
  }
}
.dateSelect {
  position: absolute;
  right: 67px;
  top: 38px;
  z-index: 100;
  .el-date-editor {
    width: 160px;
  }
}
@media (max-width: 1024px) {
  .chart-wrapper {
    padding: 8px;
  }
}
.messageli{
    display: -webkit-box;
    display: -ms-flexbox;
    height: 60px !important;
    display: flex;
    background: #fff;
    border: 1;
    border-bottom: 1px solid #f2f2f5 !important;
}

</style>
