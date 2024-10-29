<template>
  <div class="bread">
    <el-breadcrumb separator-icon="ArrowRight">
      <template v-for="item in breadItems" :key="item.path">
        <el-breadcrumb-item :to="item.path">{{ item.name }}</el-breadcrumb-item>
      </template>
    </el-breadcrumb>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/store/login/login'
import { mapPathToBreadcrumbs } from '@/utils/map-route'
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const menu = useLoginStore().menuList
const route = useRoute()
const breadItems = computed(() => mapPathToBreadcrumbs(menu, route.path))
</script>

<style lang="less" scoped>
.bread {
  color: red;
}
</style>
