<template>
  <div class="login">
    <login-panel></login-panel>
    <span class="tips">账号:coderwhy 密码:123456</span>
  </div>
</template>

<script setup lang="ts">
import LoginPanel from './cpns/login-panel.vue'
</script>

<style lang="less" scoped>
.login {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url(@/assets/img/login-bg.svg);

  .login-panel {
    margin-top: -100px;
  }
  .tips {
    position: absolute;
    right: 0;
    bottom: 0;
    color: #aaa;
    font-size: 10px;
  }
}
</style>
