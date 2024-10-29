<template>
  <div class="user">
    <user-search />
    <user-content />
  </div>
</template>

<script setup lang="ts">
import UserSearch from './cpns/user-search.vue'
import userContent from './cpns/user-content.vue'
import useUserStore from '@/store/main/system/system'

const userStore = useUserStore()
userStore.fetchUserList()
</script>

<style lang="less" scoped>
.user {
  border-radius: 10px;
  overflow: hidden;
}
</style>
