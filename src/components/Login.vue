<template>
  <div>
    <h1>Login</h1>
    <form @submit.prevent="handleSubmit">
      <label for="username">Username:</label>
      <input type="text" id="username" name="username" v-model="username" />
      <label for="password">Password:</label>
      <input type="password" id="password" name="password" v-model="password" />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
import { data, methods } from './login';

export default {
  name: 'Login',
  data,
  methods
};
</script>

<style scoped>
/* 添加一些样式 */
</style>
