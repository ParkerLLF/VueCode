<template>
  <div>
    <h1>这是 App 组件</h1>

    <!-- 为什么这里叫做 mt-button 的 button 直接就能用 -->
    <mt-button type="danger" icon="more" @click="show">default</mt-button>

    <mt-button type="danger" size="large" plain>default</mt-button>

    <mt-button type="danger" size="small" disabled>default</mt-button>


    <button type="button" class="mui-btn mui-btn-royal">
      紫色
    </button>


    <!-- <mybtn type="primary">12345</mybtn> -->

  
    <router-link to="/account">Account</router-link>
    <router-link to="/goodslist">Goodslist</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
// 按需导入 Toast 组件
import { Toast } from "mint-ui";

export default {
  data() {
    return {
      toastInstanse: null
    };
  },
  created() {
    this.getList();
  },
  methods: {
    getList() {
      // 模拟获取列表的 一个 AJax 方法
      // 在获取数据之前，立即 弹出 Toast 提示用户，正在加载数据
      this.show();
      setTimeout(() => {
        //  当 3 秒过后，数据获取回来了，要把 Toast 移除
        this.toastInstanse.close();
      }, 3000);
    },
    show() {
      // Toast("提示信息");
      this.toastInstanse = Toast({
        message: "这是消息",
        duration: -1, // 如果是 -1 则弹出之后不消失
        position: "top",
        iconClass: "glyphicon glyphicon-heart", // 设置 图标的类
        className: "mytoast" // 自定义Toast的样式，需要自己提供一个类名
      });
    }
  }
};
</script>


<style>

</style>
