<template>
  <div class="account">
    <el-form ref="formRef" :model="form" :rules="rules" label-width="auto">
      <!-- 表单的item -->
      <el-form-item label="账号" prop="name" required>
        <el-input v-model="form.name" />
      </el-form-item>
      <!-- 表单的item -->
      <el-form-item label="密码" prop="password" required>
        <el-input v-model="form.password" type="password" />
      </el-form-item>
    </el-form>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue'
import { ElMessage, type FormInstance } from 'element-plus'
import { useLoginStore } from '@/store/login'
const form = reactive({
  name: '',
  password: ''
})

const rules = reactive({
  name: [{ require: true, message: '请输入账号', trigger: 'blur' }],
  password: [
    { require: true, message: '请输入密码', trigger: 'blur' },
    { require: true, type: 'string', min: 6, message: '密码长度不能少于6位', trigger: 'blur' }
  ]
})

const formRef = ref<FormInstance>()

function loginAction() {
  // 获取表单实例的验证结果
  formRef.value?.validate(validate => {
    if (validate) {
      console.log('验证通过')
      const loginStore = useLoginStore()
      loginStore.fetchAccountLogin({
        name: form.name,
        password: form.password
      })
    } else {
      console.log('验证失败')
      ElMessage.error('账号或密码格式错误')
    }
  })
}

defineExpose({
  loginAction
})
</script>

<style lang="less" scoped>
.account {
}
</style>
