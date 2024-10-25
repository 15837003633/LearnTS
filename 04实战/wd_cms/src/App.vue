<template>
  <div class="app">
    <h1>app</h1>
    <router-link to="/home">Home</router-link>
    <router-link to="/login">Login</router-link>
    <router-view />
  </div>
</template>

<script setup lang="ts"></script>

<style lang="less" scoped>
.app {
  color: red;
}
</style>
