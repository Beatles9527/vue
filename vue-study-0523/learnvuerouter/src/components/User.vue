<template>
  <div>
    <h2>我是用户界面</h2>
    <p>我是用户界面，嘿嘿嘿</p>
    <h2>{{ userId }}</h2>
    <button @click="btnClick">按钮</button>
  </div>
</template>

<script>
export default {
  name: "User",
  computed: {
    userId() {
      return this.$route.params.userId
    }
  },
  methods: {
    btnClick() {
      console.log(this.$router);
      console.log("route" + this.$route);
    }
  },
  // created() {
  //   document.title = '用户'
  // }
}
</script>

<style scoped>

</style>
