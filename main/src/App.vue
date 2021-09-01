<template>
  <div id="app">
    <router-link to="/app-vue/index">点击去子应用首页</router-link>
    <br />
    <router-link to="/app-vue/about">点击去子应用关于我们页</router-link>
    <div id="container"></div>
  </div>
</template>

<script>
import { start } from 'qiankun';

export default {
  name: 'App',
  mounted() {
    start()
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
