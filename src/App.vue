<template>
  <div>
    <Layout />
    <a-back-top />
  </div>
</template>

<script>
import Layout from './layout/Layout'
export default {
  // 组件页面刷新变量
  provide() {
    return {
      reload: this.reload
    }
  },
  components: {
    Layout
  }
  // created() {
  //   document.body.removeChild(document.getElementById('Loading')) // 加载页面完后移除加载动画
  // }
}
</script>

<style>
img {
    margin: auto;
    width: 100%;
}
/* 滚动条的宽度 */
  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }
  /* 滚动条滑块样式 */
  ::-webkit-scrollbar-thumb {
    border-radius: 5px;
    background-color: rgb(154, 158, 155);
  }
</style>
