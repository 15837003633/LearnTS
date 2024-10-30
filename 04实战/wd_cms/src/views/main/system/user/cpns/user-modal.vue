<template>
  <div class="modal">
    <el-dialog
      v-model="dialogVisible"
      :title="isNewModal ? '新建用户' : '编辑用户'"
      width="35%"
      center
    >
      <el-form :model="form" label-width="80px">
        <el-form-item label="用户名" prop="name" required>
          <el-input v-model="form.name" placeholder="请输入用户名" />
        </el-form-item>
        <el-form-item label="真实姓名" prop="realname">
          <el-input v-model="form.realname" placeholder="请输入真实姓名" />
        </el-form-item>
        <el-form-item v-if="isNewModal" label="密码" prop="password">
          <el-input
            v-model="form.password"
            placeholder="请输入密码"
            type="password"
            show-password
          />
        </el-form-item>
        <el-form-item label="手机号码" prop="cellphone">
          <el-input v-model="form.cellphone" placeholder="请输入手机号码" />
        </el-form-item>
        <el-form-item label="角色" prop="roleId">
          <el-select v-model="form.roleId" placeholder="请选择角色">
            <template v-for="item in mainStore.entireRools" :key="item.id">
              <el-option :label="item.name" :value="item.id" />
            </template>
          </el-select>
        </el-form-item>
        <el-form-item label="部门" prop="departmentId">
          <el-select v-model="form.departmentId" placeholder="请选择部门">
            <template v-for="item in mainStore.entireDepartments" :key="item.id">
              <el-option :label="item.name" :value="item.id" />
            </template>
          </el-select>
        </el-form-item>
      </el-form>
      <template #footer>
        <div class="footer">
          <el-button @click="dialogVisible = false">取 消</el-button>
          <el-button type="primary" @click="onConfirm">确 定</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import useMainStore from '@/store/main/main'
import useSystemStore from '@/store/main/system/system'

const dialogVisible = ref(false)
const isNewModal = ref(true)
const editUserInfo = ref()

const mainStore = useMainStore()

const form = reactive<any>({
  name: '',
  realname: '',
  password: '',
  cellphone: '',
  roleId: '',
  departmentId: ''
})

//点击确定，
async function onConfirm() {
  console.log('form:', form)
  const useStore = useSystemStore()
  if (!isNewModal.value) {
    await useStore.updateUserDataRequest(editUserInfo.value.id, form)
  } else {
    await useStore.newUserDataRequest(form)
  }
  dialogVisible.value = false
}

// 显示弹窗，新增/编辑用户
function setDialogVisible(isNew = true, userInfo?: any) {
  if (!isNew && userInfo) {
    isNewModal.value = false
    editUserInfo.value = userInfo
    for (const key in form) {
      form[key] = userInfo[key]
    }
  } else {
    isNewModal.value = true
    editUserInfo.value = null
    for (const key in form) {
      form[key] = ''
    }
  }
  dialogVisible.value = true
}

defineExpose({
  setDialogVisible
})
</script>

<style lang="less" scoped>
.modal {
  .footer {
    display: flex;
    justify-content: flex-end;
  }
}
</style>
