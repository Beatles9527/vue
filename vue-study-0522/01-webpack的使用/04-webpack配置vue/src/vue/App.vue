<template>
  <div>
    <Cpn/>
    <h2 class="title">{{ message }}</h2>
    <button @click="btnClick">按钮</button>
    <h2>{{ name }}</h2>
  </div>
</template>

<script>
import Cpn from "./Cpn.vue";

export default {
  name: "App",
  components: {Cpn},
  data() {
    return {
      message: 'Hello Webpack!',
      name: 'tiger'
    }
  },
  methods: {
    btnClick() {

    }
  }
}
</script>

<style scoped>
.title {
  color: green;
}
</style>