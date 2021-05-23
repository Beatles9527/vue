<template>
  <div>
    <h2 class="title">禾下乘凉</h2>
    <p>2021.05.22</p>
    <h2 class="title">{{ name }}</h2>
  </div>
</template>

<script>
export default {
  name: "Cpn",
  data() {
    return {
      name: '禾下乘凉梦！'
    }
  }
}
</script>

<style scoped>
.title {
  color: green;
}
</style>