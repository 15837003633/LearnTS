<template>
  <div class="login">
    <div class="panel">
      <login-panel></login-panel>
    </div>
  </div>
</template>

<script setup lang="ts">
import LoginPanel from './cpns/login-panel.vue'
</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  background: url(@/assets/img/login-bg.svg);

  .panel {
    margin-top: -100px;
  }
}
</style>
