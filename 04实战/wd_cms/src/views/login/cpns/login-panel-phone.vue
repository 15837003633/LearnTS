<template>
  <div class="phone">
    <el-form ref="formRef" :model="form" label-width="auto">
      <!-- 表单的item -->
      <el-form-item label="手机号" prop="name" required>
        <el-input v-model="form.phone" />
      </el-form-item>
      <!-- 表单的item -->
      <div class="code">
        <el-form-item label="验证码" prop="password" required>
          <el-input v-model="form.code" type="password" />
        </el-form-item>
        <el-button type="primary">获取验证码</el-button>
      </div>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({ phone: '', code: '' })
</script>

<style lang="less" scoped>
.code {
  display: flex;
}

.el-button {
  margin-left: 20px;
}
</style>
