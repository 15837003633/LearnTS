<template>
  <div class="main">
    <el-container class="out-container">
      <el-aside :width="isCollapsed ? '60px' : '160px'">
        <main-menu :isCollapse="isCollapsed" />
      </el-aside>
      <el-container>
        <el-header height="40px"><main-header @onCollapse="handleCollapse" /></el-header>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import mainMenu from '@/components/main-menu/main-menu.vue'
import mainHeader from '@/components/main-header/main-header.vue'
import { ref } from 'vue'
const isCollapsed = ref(false)
function handleCollapse(flag: boolean) {
  isCollapsed.value = flag
  console.log(flag)
}

// const logout = () => {
//   localCache.remove(LOGIN_TOKEN)
//   router.push('/login')
// }
</script>

<style lang="less" scoped>
.main {
  height: 100%;

  .out-container {
    height: 100%;
  }

  .el-main {
    background-color: #fafafa;
  }
}

.el-aside {
  transition: width 300ms ease;
}
</style>
