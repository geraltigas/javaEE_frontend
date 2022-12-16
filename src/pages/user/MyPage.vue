<template>

    <el-container style="height: 100%">
      <el-header style="width:100%;margin: 0;padding: 0;top: 0;">
        <Header></Header>
      </el-header>
    <el-main style="height: 2000px;">
        <div style="">
          <div class="upper">
            <div class="backimg"></div>
            <div class="user-info">
            <div style="">
              <img src="https://c-ssl.duitang.com/uploads/blog/202012/26/20201226223704_3f25a.jpg" alt="" width="100px" height="100px" style="border-radius: 50%"/>
            </div>
            <div class="user-main">
              <div style="font-weight: bold" >
                用户名:<span >{{ userInfo.username }}</span>
              </div>
              <div style="font-weight: bold;margin-left: 10px">
                邮箱:<span>{{ userInfo.email }}</span>
                <el-button style="margin-left:20px" size="small" type="primary" icon="el-icon-edit" round @click="showEditDialog()"></el-button>
              </div>
            </div>
          </div>
          </div>
          <div class="note">
              <el-row :gutter="10" class="notice ">
    <el-col :span="10">
      <div class="notice_left">
        <div class="notice_title">
          <div class="title_left">
            <span>我的笔记</span>
          </div>
          <div class="title_right">
            <el-link href="/notes">查看更多 ></el-link>
          </div>
        </div>
        <div class="no_left_massage">
          <ul>
            <li v-for="(item,index) in noteList" :key="index">
              <p class="com-hover" @click="showDetail(item.noteId)" >{{item.noteTitle}}</p>
              <span class="time">{{item.createdTime}}</span>
            </li>
          </ul>
        </div>
      </div>
    </el-col>
  </el-row>
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
  import axios from 'axios'
  import Header from "@/components/layout/Header";
  import Footer from "@/components/layout/Footer";
  import {GET_USER, GET_USER_NOTE} from "@/utils/api/user";
  export default {
    name: 'mypage',
    components: {
    Header,
    Footer
  },
    data() {
      return {
        noteList: [

      ],
        userInfo:{
          username:'',
          email:''
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
      async getNoteList() {
        const res = await GET_USER_NOTE({id:this.$store.getters.getUserid});
        this.noteList = res.data.records;
        console.log(res)
    },
    showDetail(id)
    {
      this.$router.push("/notedetail/" + id);
    },
        editUserInfo()
        {
          if (!this.email) {
            return false
          }
          let data = {
            email: this.email
          };
          axios.patch('/users/change-email', {
            params: data
          }).then(function (res) {
            console.log(res)
          })
        },
        showEditDialog()
        {
            this.editDialogVisible = true
        },
        async getUser()
        {
          const res = await GET_USER(this.$store.getters.getEmail)
          this.userInfo.username = res.data.realName;
          this.userInfo.email = res.data.email;
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
    width: 1000px;
    height: 200px;
  margin-top: 10px;
  margin-left: 50%;
  transform: translate(-60%,0%);
  }
.upper {
  width: 100%;
  .backimg{
    height: 200px;
    background: linear-gradient(#ffffff 50%, rgba(255,255,255,0) 0) 0 0,
    radial-gradient(circle closest-side, #FFFFFF 53%, rgba(255,255,255,0) 0) 0 0,
    radial-gradient(circle closest-side, #FFFFFF 50%, rgba(255,255,255,0) 0) 55px 0 #48B;
    background-size: 110px 200px;
    background-repeat: repeat-x;
  }
  .user-info {
    margin-left: 50%;
    transform: translate(-50%, -30%);
    text-align: center;
    width: auto;
    height: 150px;

  }
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
        border: 1px;
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
    width: 1200px;
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
            width: 500px;
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
    border: 1px;
    border-bottom: 1px solid #f2f2f5 !important;
}

  </style>
