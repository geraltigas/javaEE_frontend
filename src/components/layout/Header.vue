<template>
  <el-row justify="space-between" type="flex" style="background-color:white;width: 100%;left: 0;">

    <div>
      <a class="navbar-brand" href="/" rel="nofollow">
        <img alt="RYMCU" class="navbar-brand-img" src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png">
      </a>
    </div>

    <div style="max-height: 58px;overflow: hidden">
      <el-menu  mode="horizontal"
              style="margin-top: -2px;border: 0;">
        <el-menu-item index="index">
          <el-link type="success" href="/">首页</el-link>
        </el-menu-item>
        <el-menu-item index="topic">
          <router-link :to="{path:'/projects'}">项目</router-link>
          <!-- <el-link type="primary" href="/homeview">博客页面</el-link> -->
        </el-menu-item>
        <el-menu-item index="portfolios">
          <el-link type="primary" href="/videos">视频</el-link>
        </el-menu-item>
        <el-menu-item index="topic">
          <router-link :to="{path:'/books'}">电子书</router-link>
        </el-menu-item>
        <el-menu-item index="topic">
          <router-link :to="{path:'/homeview'}">笔记</router-link>
        </el-menu-item>
      </el-menu>
    </div>

    <el-col :md="10" :span="10" :xs="16" style="line-height: 60px">
        <el-col style="text-align: right;" v-if="loggedIn">
          <el-link :underline="false" rel="nofollow" style="margin-left: 10px;">
            <el-dropdown   @command="handleCommand" trigger="click">
              <el-avatar size="small" src="https://static.rymcu.com/article/1578475481946.png"></el-avatar>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item style="align-items: center;">
                  <el-avatar class="mr-3" size="small" src="https://static.rymcu.com/article/1578475481946.png"
                            style="margin-top: 1rem;"></el-avatar>
                  <el-link :underline="false" rel="nofollow" style="margin-left: 10px;margin-bottom: 1rem;">
                    {{ user.nickname }}
                  </el-link>
                </el-dropdown-item>
                <el-dropdown-item command="mypage" divided>我的主页</el-dropdown-item>
                <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-link>
        </el-col>
        <el-col style="text-align: right;" v-else>
          <el-popover
            placement="bottom"
            trigger="click"
            v-model="showPopover"
            width="400">
            <el-input @keyup.enter.native="querySearchAsync" name="searchInput" placeholder="搜索"
                      v-model="queryString">
              <el-button @click="querySearchAsync" slot="append">
                <svg height="24" style="fill: rgba(0, 0, 0, 1);" viewBox="0 0 24 24" width="24"
                    xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                  <path
                    d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"></path>
                </svg>
              </el-button>
            </el-input>
            <el-button circle size="small" slot="reference">
              <svg height="14" style="fill: rgba(0, 0, 0, 1);" viewBox="0 0 24 24" width="14"
                  xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M10 18a7.952 7.952 0 0 0 4.897-1.688l4.396 4.396 1.414-1.414-4.396-4.396A7.952 7.952 0 0 0 18 10c0-4.411-3.589-8-8-8s-8 3.589-8 8 3.589 8 8 8zm0-14c3.309 0 6 2.691 6 6s-2.691 6-6 6-6-2.691-6-6 2.691-6 6-6z"></path>
                <path
                  d="M11.412 8.586c.379.38.588.882.588 1.414h2a3.977 3.977 0 0 0-1.174-2.828c-1.514-1.512-4.139-1.512-5.652 0l1.412 1.416c.76-.758 2.07-.756 2.826-.002z"></path>
              </svg>
            </el-button>
          </el-popover>
          <!-- <el-link :underline="false" @click="login" rel="nofollow" style="margin-left: 10px;">登录</el-link> -->
          <el-link href="/login" style="margin-left: 10px;">登录</el-link>
          <el-link href="/register" style="margin-left: 10px;">注册</el-link>
          <!-- <el-link :underline="false" href="/register" rel="nofollow" style="margin-left: 10px;">注册</el-link> -->
        </el-col>
    </el-col>
  </el-row>
</template>

<script>
import axios from 'axios'
export default {
  name: "HeaderView",
  data() {
    return {
      queryString: '',
      timeout: null,
      show: false,
      notifications: [],
      notificationNumbers: "",
      showPopover: false,
      autofocus: false,
      loggedIn:true,
      user:{},
    };
  },
  created(){
    if(localStorage.getItem('username'))
    {
      this.getUser()
    }
    else{
      this.loggedIn = true
    }
  },
  methods:{
    querySearchAsync()
    {

    },
    handleCommand(item) {
      let _ts = this;
      switch (item) {
        case 'mypage':
          _ts.$router.push({
            path: '/mypage'
          })
          break;
        case 'logout':
          this.loggedIn = false
          break;
        default:
          _ts.$router.push({
            name: item
          })
      }
    },
    getUser()
    {
      axios.post('/get-user/'+localStorage.getItem('username'), {
      }).then(function (res) {
        this.user = res.data
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

<style scoped>

.navbar-brand {
  color: inherit;
  margin-right: 1rem;
  font-size: 1.25rem;
  white-space: nowrap;
  font-weight: 600;
  padding: 0;
  transition: .3s opacity;
  line-height: 3rem;
}

.navbar-brand-img {
  height: 3rem;
  line-height: 3rem;
  vertical-align: top;
  width: auto;
}

.search-result-box {
  min-width: 20vw !important;
}

.search-result-type {
  padding-right: 5px;
}

</style>
