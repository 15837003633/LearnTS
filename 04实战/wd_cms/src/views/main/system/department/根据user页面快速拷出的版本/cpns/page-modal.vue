<template>
  <div class="modal">
    <el-dialog
      v-model="dialogVisible"
      :title="isNewModal ? '新建部门' : '编辑部门'"
      width="30%"
      center
    >
      <el-form :model="form" label-width="80px">
        <el-form-item label="部门名" prop="name" required>
          <el-input v-model="form.name" placeholder="请输入部门名" />
        </el-form-item>
        <el-form-item label="部门领导" prop="leader">
          <el-input v-model="form.leader" placeholder="请输入部门领导" />
        </el-form-item>

        <el-form-item label="上级部门" prop="parentId">
          <el-select v-model="form.parentId" placeholder="请选择上级部门">
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
const editPageInfo = ref()

const mainStore = useMainStore()

const form = reactive<any>({
  name: '',
  leader: '',
  parentId: ''
})

//点击确定，
async function onConfirm() {
  console.log('form:', form)
  const useStore = useSystemStore()
  if (!isNewModal.value) {
    await useStore.updatePageDataRequest('department', editPageInfo.value.id, form)
  } else {
    await useStore.newPageDataRequest('department', form)
  }
  dialogVisible.value = false
}

// 显示弹窗，新增/编辑用户
function setDialogVisible(isNew = true, userInfo?: any) {
  if (!isNew && userInfo) {
    isNewModal.value = false
    editPageInfo.value = userInfo
    for (const key in form) {
      form[key] = userInfo[key]
    }
  } else {
    isNewModal.value = true
    editPageInfo.value = null
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
