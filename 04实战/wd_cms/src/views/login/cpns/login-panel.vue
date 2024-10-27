<template>
  <div class="panel">
    <h2 class="title">内容管理系统</h2>

    <!-- tabs -->
    <div class="tabs">
      <el-tabs type="border-card" v-model="currentTab" stretch>
        <!-- 账号登录 -->
        <el-tab-pane name="account">
          <!-- 具名插槽 -->
          <template #label>
            <span>
              <el-icon><User /></el-icon>
              <span class="label">账号登录</span>
            </span>
          </template>
          <!-- 默认插槽 -->
          <login-panel-account ref="account_login_cpn"></login-panel-account>
        </el-tab-pane>
        <!-- 手机号登录 -->
        <el-tab-pane name="phone">
          <template #label>
            <span>
              <el-icon><Phone /></el-icon>
              <span class="label">手机号登录</span>
            </span>
          </template>
          <login-panel-phone></login-panel-phone
        ></el-tab-pane>
      </el-tabs>
    </div>
    <div class="pwd">
      <el-checkbox class="keep-pwd" v-model="keep_pwd" label="记住密码" />
      <div class="forget-pwd">忘记密码</div>
    </div>
    <el-button class="login_btn" type="primary" @click="handleLogin">立即登录</el-button>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import loginPanelAccount from './login-panel-account.vue'
import loginPanelPhone from './login-panel-phone.vue'
import { localCache } from '@/utils/cache'
import { KEEP_PWD } from '@/constants/login'
const currentTab = ref('account')
const keep_pwd = ref<boolean>(localCache.get(KEEP_PWD))

watch(keep_pwd, () => {
  localCache.set(KEEP_PWD, keep_pwd.value)
})

// 获取组件实例
const account_login_cpn = ref<InstanceType<typeof loginPanelAccount>>()
function handleLogin() {
  if (currentTab.value === 'account') {
    console.log('账号登录')
    account_login_cpn.value?.loginAction(keep_pwd.value)
  } else if (currentTab.value === 'phone') {
    console.log('手机号登录')
  }
}
</script>

<style lang="less" scoped>
.panel {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 300px;

  .title {
    margin-bottom: 10px;
  }
  .tabs {
    width: 100%;
    .el-icon {
      vertical-align: middle;
    }
    .label {
      vertical-align: middle;
      margin-left: 5px;
    }
  }

  .pwd {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    font-size: 12px;

    .keep-pwd {
      --el-checkbox-font-size: 12px;
    }
    .forget-pwd {
      color: var(--color-primary);
    }
  }

  .login_btn {
    width: 100%;
  }
}
</style>
