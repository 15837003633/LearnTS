<template>
  <div class="header">
    <span class="fold" @click="onCollapesClick">
      <el-icon size="20px">
        <component :is="isCollapsed ? 'fold' : 'expand'" />
      </el-icon>
    </span>
    <div class="bread">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>用户管理</el-breadcrumb-item>
        <el-breadcrumb-item>用户列表</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="info"><head-info></head-info></div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import headInfo from './cpns/head-info.vue'
const emits = defineEmits(['onCollapse'])
const isCollapsed = ref(false)
function onCollapesClick() {
  isCollapsed.value = !isCollapsed.value
  emits('onCollapse', isCollapsed.value)
}
</script>

<style lang="less" scoped>
.header {
  display: flex;
  align-items: center;
  height: 100%;
  .fold {
    .el-icon {
      vertical-align: top;
    }
  }
  .bread {
    flex: 1;
    margin-left: 10px;
  }
}
</style>
