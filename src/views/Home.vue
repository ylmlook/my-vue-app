<template>
  <div class="home">
    <h1>欢迎使用奇门遁甲排盘APP</h1>
    <router-link to="/chart">开始排盘</router-link>
  </div>
</template>

<script>
export default {
  name: 'Home',
};
</script>

<style scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}
</style>
