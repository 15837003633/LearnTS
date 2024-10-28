<template>
  <div class="menu">
    <div class="title">
      <img class="logo" src="@/assets/img/logo.svg" alt="logo" />
      <span v-show="!isCollapse" class="name">内容管理系统</span>
    </div>
    <el-menu
      background-color="#001529"
      text-color="#b7bdc3"
      active-text-color="#ffffff"
      :collapse="isCollapse"
      :defaultActive="defaultActive"
    >
      <template v-for="sub_menu in menu" :key="sub_menu.id">
        <el-sub-menu :index="String(sub_menu.id)">
          <template #title>
            <el-icon>
              <component :is="sub_menu.icon.split('-icon-')[1]" />
            </el-icon>
            <span>{{ sub_menu.name }}</span>
          </template>
          <template v-for="item in sub_menu.children" :key="item.id">
            <el-menu-item :index="String(item.id)" @click="onMenuItemClick(item)">{{
              item.name
            }}</el-menu-item>
          </template>
        </el-sub-menu>
      </template>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/store/login'
import { mapMenuFromRoute } from '@/utils/map-route'
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
defineProps({
  isCollapse: {
    type: Boolean,
    default: false
  }
})

const loginStore = useLoginStore()
const menu = loginStore.menuList

const router = useRouter()
function onMenuItemClick(item: any) {
  router.push(item.url)
}

const route = useRoute()

// 根据当前的路由匹配到对应的menu，用于匹配menu的选中状态
const defaultActive = computed(() => {
  const m = mapMenuFromRoute(menu, route.path)
  //转为string
  return m?.id + ''
})
</script>

<style lang="less" scoped>
.menu {
  background-color: #001529;
  height: 100%;
  overflow-y: auto;

  .title {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-top: 20px;
    color: white;
    .logo {
      width: 20px;
    }
    .name {
      font-size: 15px;
      margin-left: 5px;
    }
  }
}

.el-menu {
  border-right: none;
}

.el-menu-item:hover {
  background-color: #0c2135;
}
.el-menu-item.is-active {
  background-color: #0a60bd;
}
</style>
