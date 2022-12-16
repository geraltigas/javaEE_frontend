<template>
  <el-row justify="space-between" type="flex" style="background-color:white;width: 100%;left: 0;">

    <div>
      <a class="navbar-brand" href="/" rel="nofollow">
        <img alt="Learneur" class="navbar-brand-img" src="@/assets/images/L.png">
      </a>
    </div>

    <div style="max-height: 58px;overflow: hidden">
      <el-menu  mode="horizontal"
                :default-active="this.$route.path"
              style="margin-top: -2px;border: 0;">
        <el-menu-item index="/">
          <el-link type="success" href="/">首页</el-link>
        </el-menu-item>
        <el-menu-item index="/knowledges">
          <el-link type="success" href="/knowledges">学习</el-link>
        </el-menu-item>
        <el-menu-item index="/projects">
          <el-link type="success" href="/projects">项目</el-link>
        </el-menu-item>
        <el-menu-item index="/videos">
          <el-link type="success" href="/videos">视频</el-link>
        </el-menu-item>
        <el-menu-item index="/books">
          <el-link type="success" href="/books">电子书</el-link>
        </el-menu-item>
        <el-menu-item index="/notes">
          <el-link type="success" href="/notes">笔记</el-link>
        </el-menu-item>
      </el-menu>
    </div>

    <el-col :md="10" :span="10" :xs="16" style="line-height: 60px">
        <el-col style="text-align: right;" v-if="loggedIn">
          <search-box placeholder="搜索" @search="onSearch"></search-box>
          <el-link :underline="false" rel="nofollow" style="margin-left: 10px;">
            <el-dropdown   @command="handleCommand" trigger="click">
              <el-avatar size="small" src="https://c-ssl.duitang.com/uploads/blog/202012/26/20201226223704_3f25a.jpg"></el-avatar>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item style="align-items: center;">
                  <el-avatar class="mr-3" size="small" src="https://c-ssl.duitang.com/uploads/blog/202012/26/20201226223704_3f25a.jpg"
                            style="margin-top: 1rem;"></el-avatar>
                  <el-link :underline="false" rel="nofollow" style="margin-left: 10px;margin-bottom: 1rem;">
                    {{ user.username }}
                  </el-link>
                </el-dropdown-item>
                <el-dropdown-item command="mypage" divided>我的主页</el-dropdown-item>
                <el-dropdown-item command="logout" divided>退出登录</el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </el-link>
        </el-col>
        <el-col style="text-align: right;" v-else>
          <search-box placeholder="搜索" @search="onSearch"></search-box>
          <!-- <el-link :underline="false" @click="login" rel="nofollow" style="margin-left: 10px;">登录</el-link> -->
          <el-link href="/login" style="margin-left: 10px;">登录</el-link>
          <el-link href="/register" style="margin-left: 10px;">注册</el-link>
          <!-- <el-link :underline="false" href="/register" rel="nofollow" style="margin-left: 10px;">注册</el-link> -->
        </el-col>
    </el-col>
  </el-row>
</template>

<script>
import SearchBox from "@/components/widget/SearchBox.vue"
import axios from 'axios'
import {GET_USER} from "@/utils/api/user";
export default {
  name: "HeaderView",
  components:{
    SearchBox
  },
  data() {
    return {
      queryString: '',
      timeout: null,
      show: false,
      notifications: [],
      notificationNumbers: "",
      showPopover: false,
      autofocus: false,
      loggedIn:false,
      user:{},
    };
  },
  created(){
    console.log(this.$route.path)
    if(this.$store.getters.getEmail!=="")
    {
      this.loggedIn=true
      this.getUser()
    }
    else{
      this.loggedIn = false
    }
  },
  methods:{
    onSearch(keyword) {
      this.$router.push({
        path: `/search`,
        query: {
          q: keyword
        }
      })
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
          _ts.$router.push('/')
          this.loggedIn = false
            localStorage.clear()
          window.sessionStorage.clear();
          break;
        default:
          _ts.$router.push({
            name: item
          })
      }
    },
    getUser()
    {
      console.log(this.$store.getters.getEmail)
      const res = GET_USER(this.$store.getters.getEmail);
      console.log(res)
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
