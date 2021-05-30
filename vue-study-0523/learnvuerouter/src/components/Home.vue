<template>
  <div>
    <h2>我是首页Home</h2>
    <p>我是首页内容，哈哈哈</p>
    <router-link to="/home/news">新闻</router-link>
    <router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "Home",
  data() {
    return {
      message: '你好啊'
    }
  },
  // created() {
  //   console.log('created');
  //   document.title = '首页'
  // },
  // mounted() {
  //   console.log('mounted');
  // },
  // updated() {
  //   console.log('updated');
  // }
}
</script>

<style scoped>

</style>
