<template>
  <div class="overview">
    <template v-for="item in technologyStacks" :key="title">
      <div class="item">
        <span>{{ item.title }}</span>
        <span> - </span>
        <span>{{ item.desp }}</span>
      </div>
    </template>
  </div>
</template>

<script setup lang="ts">
import { technologyStacks } from './config/technology-stacks'
</script>

<style lang="less" scoped>
.overview {
  color: #333;

  .item {
    margin: 20px 0;
  }
}
</style>
