<template>
  <div>
    <h1>这是 注册 页面</h1>

    <div class="userinfo">
      <p>用户名：<input type="text" v-model="username"></p>
      <p>密码啊：<input type="password" v-model="password"></p>
      <p>昵称啊：<input type="text" v-model="nickname"></p>
      <input type="button" value="注册新用户" @click="register">
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      nickname: "",
      username: "",
      password: ""
    };
  },
  methods: {
    register() {
      this.$http
        .post(
          "http://127.0.0.1:5000/api/register",
          {
            username: this.username,
            password: this.password,
            nickname: this.nickname
          },
          { emulateJSON: true }
        )
        .then(result => {
          console.log(result);
        });
    }
  }
};
</script>


<style lang="scss" scoped>

</style>
