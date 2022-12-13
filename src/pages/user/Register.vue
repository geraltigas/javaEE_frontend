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
        <el-form-item label="邮箱" prop="email"
                      :rules="[
                  { required: true, message: '请输入邮箱地址', trigger: 'blur' },
                  { type: 'email', message: '请输入正确的邮箱地址', trigger: ['blur', 'change'] }]">
          <el-input v-model="user.email" autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password"
                      :rules="[{ required: true, message: '请输入密码', trigger: 'blur' }]">
          <el-input type="password" v-model="user.password" autocomplete="off" show-password></el-input>
        </el-form-item>
        <el-form-item label="确认密码" prop="confirmPassword"
                      :rules="[{ required: true, message: '请输入确认密码', trigger: 'blur' }]">
          <el-input type="password" v-model="user.confirmPassword" autocomplete="off" show-password></el-input>
        </el-form-item>
        <el-form-item label="验证码" prop="code"
                      :rules="[{ required: true, message: '请输入验证码', trigger: 'blur' }]">
          <el-input v-model="user.code" maxlength="6" autocomplete="off">
            <el-button type="email" size="small" slot="append" @click="sendCode" :loading="loading" plain>
              {{ loadText }}
            </el-button>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button style="width: 60%;" type="primary" @click="register" :loading="registerLoading" plain>立即注册
          </el-button>
          <el-button style="width: 32%;" @click="login" plain>登录</el-button>
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
  </el-row>
  <el-footer class="footer">
      <Footer></Footer>
    </el-footer>
  </el-container>
</template>

<script>
import axios from 'axios'
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { Toast } from 'mint-ui';
import 'mint-ui/lib/style.css';
export default {
  name: "register",
  components: {
    Header,
    Footer
  },
  data() {
    return {
      user: {
        email: '',
        code: '',
        password: '',
        confirmPassword: ''
      },
      registerLoading: false,
      loading: false,
      loadText: '发送验证码',
      timeClock: null
    }
  },
  methods: {
    sendCode() {
      this.loading = true;
      let email = this.user.email;
      if (!email) {
        return false
      }
      let data = {
        email: email
      };
      axios.post('/authenticate/get-email-code', {
        params: data
      }).then(function (res) {
        this.loading = false;
        // _ts.forget = false;
        if (res) {
          Toast({ message: res.data.message, duration: 1500}); 
          this.$message(res.message)
        }
      })
    },
    timerHandler() {
      let _ts = this;
      _ts.$set(_ts, 'loading', true);
      let times = 30;
      _ts.timeClock = setInterval(function () {
        times--;
        _ts.$set(_ts, 'loadText', times + ' s');
        if (times == 0) {
          clearInterval(_ts.timeClock);
          _ts.$set(_ts, 'loading', false);
          _ts.$set(_ts, 'loadText', '发送验证码');
        }
      }, 1000)
    },
    register() {
      let _ts = this;
      _ts.$refs.user.validate((valid) => {
        if (valid) {
          _ts.$set(_ts, 'registerLoading', true);
          setTimeout(function () {
            _ts.$set(_ts, 'registerLoading', false);
          }, 10000);
          let data = {
            email: _ts.user.email,
            password: _ts.user.password,
            code: _ts.user.code
          }
          axios.post('/authenticate/register', data).then(function (res) {
            _ts.$set(_ts, 'registerLoading', false);
            if (res) {
              _ts.$message("注册成功！");
              _ts.$router.push(
                {
                  name: 'login'
                }
              )
            }
          })
        } else {
          return false;
        }
      });

    },
    login() {
      this.$router.push(
        {
          name: 'login'
        }
      )
    }
  },
  mounted() {
    this.$store.commit('setActiveMenu', 'register')
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
