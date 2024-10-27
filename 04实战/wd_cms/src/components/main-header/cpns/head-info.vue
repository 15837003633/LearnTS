<template>
  <div class="header-info">
    <div class="opration">
      <span>
        <el-icon> <search /> </el-icon
      ></span>
      <span>
        <el-icon> <edit /> </el-icon
      ></span>
      <span>
        <div class="dot"></div>
        <span
          ><el-icon> <share /> </el-icon
        ></span>
      </span>
    </div>
    <div class="info">
      <el-avatar
        :size="20"
        src="https://upload.jianshu.io/users/upload_avatars/1102036/c3628b478f06.jpeg"
      >
      </el-avatar>
      <el-dropdown>
        <span class="name">{{ loginStore.userInfo.name }}</span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item>我的主页</el-dropdown-item>
            <el-dropdown-item>我的消息</el-dropdown-item>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useLoginStore } from '@/store/login'

const loginStore = useLoginStore()
function logout() {
  loginStore.logout()
}
</script>

<style lang="less" scoped>
.header-info {
  display: flex;
  align-items: center;
}
.opration {
  display: flex;
  align-items: center;
  span {
    position: relative;
  }
  .el-icon {
    margin: 0 5px;
  }
}

.info {
  display: flex;
  align-items: center;
  margin-left: 20px;

  .name {
    margin-left: 5px;
    cursor: pointer;
  }
}

.dot {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 5px;
  height: 5px;
  z-index: 1;
  background: #f00;
  border-radius: 100%;
}
</style>
