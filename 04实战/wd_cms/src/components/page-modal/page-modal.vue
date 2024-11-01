<template>
  <div class="modal">
    <el-dialog
      v-model="dialogVisible"
      :title="isNewModal ? modalConfig.header.newTitle : modalConfig.header.editTitle"
      width="30%"
      center
    >
      <el-form :model="form" label-width="80px">
        <template v-for="item in props.modalConfig.formItems" :key="item.prop">
          <el-form-item v-bind="item">
            <template v-if="item.type === 'input'">
              <el-input v-model="form[item.prop]" :placeholder="item.placeHolder" />
            </template>
            <template v-else-if="item.type === 'select'">
              <el-select v-model="form[item.prop]" :placeholder="item.placeHolder">
                <template v-for="op in item.options" :key="op.id">
                  <el-option :label="op.name" :value="op.id" />
                </template>
              </el-select>
            </template>
          </el-form-item>
        </template>
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
import useSystemStore from '@/store/main/system/system'

export interface IProps {
  modalConfig: {
    pageName: string
    header: {
      newTitle: string
      editTitle: string
    }
    formItems: any[]
  }
}
// 使用泛型的方式定义属性
const props = defineProps<IProps>()

const dialogVisible = ref(false)
const isNewModal = ref(true)
const editPageInfo = ref()

const form = reactive<any>({})
props.modalConfig.formItems.forEach(item => {
  form[item.prop] = ''
})

//点击确定，
async function onConfirm() {
  console.log('form:', form)
  const useStore = useSystemStore()
  if (!isNewModal.value) {
    await useStore.updatePageDataRequest(props.modalConfig.pageName, editPageInfo.value.id, form)
  } else {
    await useStore.newPageDataRequest(props.modalConfig.pageName, form)
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
