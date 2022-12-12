<template>
    
    <el-container>
        <el-header style="width:100%;margin: 0;padding: 0;top: 0;">
      <Header></Header>
    </el-header>
    <el-main>
        <div style="display: contents;">
            <div class="note">
              <el-row :gutter="10" class="notice ">
    <el-col :span="12">
      <div class="notice_left">
        <div class="notice_title">
          <div class="title_left">
            <span>我的笔记</span>
          </div>
          <div class="title_right">
            <el-link href="/homeview">查看更多 ></el-link>
          </div>
        </div>
        <div class="no_left_massage">
          <ul>
            <li v-for="(item,index) in noteList" :key="index">
              <p class="com-hover" @click="showDetail(item.idNote)" >{{item.head}}</p>
              <span class="time">{{item.time}}</span>
            </li>
          </ul>
        </div>
      </div>
    </el-col>
  </el-row>
            </div>
        <div class="user-info">
      <div style="margin-left:120px">
        <img src="https://static.rymcu.com/article/1578475481946.png" alt="" width="50px" height="50px" />
      </div>
      <div class="user-main">
        <div style="color: #999;margin-left: 50px;" >
          用户名:<span>{{ userInfo.username }}</span>
        </div>
        <div style="color: #999;margin-left: 50px;">
          邮箱:<span>{{ userInfo.email }}</span>
          <el-button style="margin-left:20px" size="small" type="primary" icon="el-icon-edit" round @click="showEditDialog()"></el-button>
        </div>
      </div>
    </div>
        </div>
        <el-dialog
  title="修改邮箱"
  :visible.sync="editDialogVisible"
  width="50%" @close="editDialogClosed">
  <el-form :model="editForm" :rules="editFormRules" ref="editFormRef" label-width="70px" >
    <el-form-item label="新的邮箱" prop="email">
      <el-input v-model="email"></el-input>
    </el-form-item>
  </el-form>
  <span slot="footer" class="dialog-footer">
      <el-button @click="editDialogVisible = false">取 消</el-button>
      <el-button type="primary" @click="editUserInfo()">确 定</el-button>
  </span>
</el-dialog>
    </el-main>
    <el-footer class="footer">
      <Footer></Footer>
    </el-footer>
    </el-container>
    
  </template>
  
  <script>
  import Header from "@/components/layout/Header";
  import Footer from "@/components/layout/Footer";
  export default {
    name: 'mypage',
    components: {
    Header,
    Footer
  },
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
        userInfo:{
          username:'aaaa',
          email:'1111111@qq.com'
        },
        editDialogVisible: false,
        email:'',
      }
    },
  
    created(){
        this.getUser()
        this.getNoteList()
    },
    methods: {
      getNoteList() {
      let _ts = this;
      _ts.loading = true;
      _ts.$axios.$get('/notes/get-user/'+localStorage.getItem('username'), {
      }).then(function (res) {
        _ts.loading = false;
        this.noteList = res.data
      })
    },
    showDetail(id)
    {
      this.$router.push("/notedetail/" + id);
    },
        editUserInfo()
        {
          let _ts = this;
          _ts.loading = true;
          if (!this.email) {
            return false
          }
          let data = {
            email: this.email
          };
          _ts.$axios.$patch('/users/change-email', {
            params: data
          }).then(function (res) {
            _ts.loading = false;
            console.log(res)
          })
        },
        showEditDialog()
        {
            this.editDialogVisible = true
        },
        getUser()
    {
      let _ts = this;
      _ts.loading = true;
      _ts.$axios.$post('/get-user/'+localStorage.getItem('username'), {
      }).then(function (res) {
        _ts.loading = false;
        this.userInfo = res.data
        if(this.user == {})
        {
          this.loggedIn = false;
        }else{
          this.loggedIn = true
        }
      })
    }
    }
  }
  </script>
  
  <style lang="scss" scoped>
  
  .footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
.note {
    position: absolute;
    top: 200px;
    left: 200px;
    width: 1000px;
    height: 1200px;
  }
  .user-info{
    position: absolute;
    top: 300px;
    right: 300px;
    margin-left: 20px;
    width: 300px;
    height: 150px;
    background-color: white;
  }
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
  