<template>
  <div class="home">home</div>
</template>

<script setup lang="ts">
import wdRequest from '@/service'
wdRequest
  .get({
    url: '/home/multidata'
  })
  .then(res => {
    console.log(res)
  })
</script>

<style lang="less" scoped>
.home {
  color: red;
}
</style>
