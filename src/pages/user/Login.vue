<template>
  <el-container>
  <el-header style="width:100%;margin: 0;padding: 0;top: 0;">
      <Header></Header>
    </el-header>
  <el-row class="wrapper verify" style="background-color: #F6F7F8;padding-top: 10%;">
    <el-col :xs="24" :sm="12" :xl="12" class="verify-wrap flex-inline">
      <el-form :model="user" ref="user" status-icon label-width="100px" style="width: 375px;">
        <el-form-item>
          <img src="https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png" alt="RYMCU" class="icon-rymcu">
        </el-form-item>
        <el-form-item label="账号" prop="account" :rules="[{ required: true, message: '请输入账号', trigger: 'blur' }]">
          <el-input v-model="user.account" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
          <el-input type="password" v-model="user.password" autocomplete="off" show-password></el-input>
        </el-form-item>
        <el-form-item>
          <el-link rel="nofollow" style="float: right;" :underline="false" @click="forgetPassword">忘记密码</el-link>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 60%;" type="primary" @click="login" :loading="loginLoading" plain>立即登录</el-button>
          <el-button style="width: 32%;" @click="register" plain>注册</el-button>
        </el-form-item>
      </el-form>
    </el-col>
    <el-col :xs="24" :sm="12" :xl="12" class="intro vditor-reset verify__sign">
      <div>
        <h2>欢迎来到 Learneur</h2>
        <p><a rel="nofollow" href="/">Lerneur</a> 是一个自主学习平台。</p>
        <p>我们正在构建一个知识平台。大家在这里<strong>自由学习</strong>，以<em>平等 • 自由 • 奔放</em>的价值观进行分享交流。最终，希望大家能够学习到自己需要的知识，丰富自己。</p>
        <p>最后请大家共同爱护这个<i>自由</i>的学习环境，相信这里一定是你注册过的所有平台中用户体验最好的 😍</p>
      </div>
    </el-col>
    <el-dialog
      title="找回密码"
      :visible.sync="forget"
      width="475px"
      :before-close="hideForgetPasswordDialog"
      center>
      <el-form :model="forgetForm" ref="forgetForm" status-icon label-width="100px"
               style="align-items: center;max-width: 375px;">
        <el-form-item label="邮箱" prop="email"
                      :rules="[
                  { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                  { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]">
          <el-input v-model="forgetForm.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="验证码" :rules="[{ required: true, message: '请输入验证码',}]">
          <el-input v-model="authcode"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password" :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
          <el-input type="password" v-model="user.password" autocomplete="off" show-password></el-input>
        </el-form-item>
        <el-form-item style="text-align: center;">
          <el-button :loading="loading" @click.native="sendEmailCode" type="success" plain>发送</el-button>
          <el-button :loading="loading" @click.native="hideForgetPasswordDialog" plain>取消</el-button>
          <el-button :loading="loading" @click.native="changePassword" plain>确定</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
  </el-row>
  <el-footer class="footer">
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
import {mapState} from 'vuex';
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toast } from 'mint-ui';
import 'mint-ui/lib/style.css';
import axios from 'axios'
export default {
  name: "login",
  components: {
    Header,
    Footer
  },
  middleware: 'auth',
  auth: 'guest',
  data() {
    return {
      user: {
        account: '',
        password: ''
      },
      forgetForm: {
        email: ''
      },
      forget: false,
      loading: false,
      loginLoading: false,
      historyUrl: '',
      authcode:''
    }
  },
  computed: {
    ...mapState({
      article: state => state.article.detail.data
    })
  },
  methods: {
    login() {
      let _ts = this;
      _ts.$refs.user.validate(async (valid) => {
        if (valid) {
          _ts.$set(_ts, 'loginLoading', true);
          axios.post('/authenticate/login',
            {
              email:_ts.user.account,
              password: _ts.user.password
            }).then((res) =>{
              if(res.data.status == 200){
                var userInfo = res.data.data;
                this.$store.commit('Token', userInfo.token);
                this.$store.commit('username', this.user.account);
                Toast({ message: '登录成功', type: 'success',duration: 1500});   // ui弹窗提示
                if (_ts.historyUrl) {
                  window.location.href = _ts.historyUrl
                } // 跳转到原来页面
              } else {
              Toast({ message: res.data.message, duration: 1500});   // ui弹窗提示
            }
            }).catch(err => {
              // 报错
              console.log(err)
            })
          }
      });
    },
    register() {
      this.$router.push(
        {
          name: 'register'
        }
      )
    },
    forgetPassword() {
      this.forget = true;
    },
    hideForgetPasswordDialog() {
      this.forget = false;
    },
    sendEmailCode() {
      let _ts = this;
      _ts.loading = true;
      let email = _ts.forgetForm.email;
      if (!email) {
        return false
      }
      let data = {
        email: email
      };
      _ts.$axios.$post('/authenticate/get-forget-password-code', {
        params: data
      }).then(function (res) {
        _ts.loading = false;
        // _ts.forget = false;
        if (res) {
          Toast({ message: res.data.message, duration: 1500});
          _ts.$message(res.message)
        }
      })
    },
    changePassword(){
      let _ts = this;
      _ts.loading = true;
      let email = _ts.forgetForm.email;
      if (!email&&_ts.authcode) {
        return false
      }
      let data = {
        password: _ts.user.password,
        code:_ts.authcode,
      };
      _ts.$axios.$post('/authenticate/forget-password', {
        params: data
      }).then(function (res) {
        console.log(res)
        _ts.loading = false;
        _ts.forget = false;
      })
    }
  },
  mounted() {
    let _ts = this
    _ts.$store.commit('setActiveMenu', 'login');
    _ts.$set(_ts, 'historyUrl', _ts.$route.query.historyUrl || '');
    // if (_ts.$auth.loggedIn) {
    //   _ts.$router.push({
    //     name: 'index'
    //   })
    // }
  }
}
</script>

<style scoped>
.icon-rymcu {
  margin: 0 auto;
  display: block;
  height: 4rem;
}

.verify .verify-wrap {
  /*width: 60%;*/
}

.flex-inline {
  display: flex;
  align-items: center;
}

.verify .intro {
  padding: 50px;
  background-color: #f1f7fe;
  /*width: 40%;*/
  color: #616161;
}

.verify__sign {
  background-color: transparent !important;
}

.vditor-reset {
  font-variant-ligatures: no-common-ligatures;
  font-family: Helvetica Neue, Luxi Sans, DejaVu Sans, Tahoma, Hiragino Sans GB, Microsoft Yahei, sans-serif, Apple Color Emoji, Segoe UI Emoji, Noto Color Emoji, Segoe UI Symbol, Android Emoji, EmojiSymbols;
  word-wrap: break-word;
  overflow: auto;
  line-height: 1.5;
  font-size: 16px;
  word-break: break-word;
}
.footer {
  position: fixed;
  bottom: 0;
  width: 100%;
}
</style>
