<template>
  <div>

  </div>

</template>

<script>
export default {
  name: "LoginView",
  data() {
    return {
      user: {
        account: '',
        password: ''
      },
      findPassword: {
        email: ''
      },
      loginLoading: false,
      loading: false,
      forget: false
    }
  },
  methods:{
    login() {

    },
    register() {

    },
    forgetPassword() {
      this.forget = true
    },
    cancelForgetPassword() {
      this.forget = false
    },
    sendCode() {
    }
  }
}
</script>

<style scoped>

</style>
