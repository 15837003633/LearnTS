<template>
  <div class="role">
    <page-search
      :form-items="searchConfig.formItems"
      label-width="80"
      @query-action="searchQueryAction"
      @reset-action="searchResetAction"
    ></page-search>
    <page-content
      :content-config="contentConfig"
      ref="contentRef"
      @new-data="newDataAction"
      @update-data="updateDataAction"
    ></page-content>
    <page-modal ref="modalRef" :modal-config="modalConfig" :extra-info="checkedKeysRef">
      <template #menulist>
        <el-tree
          ref="treeRef"
          :data="menuList"
          node-key="id"
          :props="{ children: 'children', label: 'name' }"
          show-checkbox
          @check="onTreeChecked"
        />
      </template>
    </page-modal>
  </div>
</template>

<script setup lang="ts">
import pageContent from '@/components/page-content/page-content.vue'
import pageSearch from '@/components/page-search/page-search.vue'
import pageModal from '@/components/page-modal/page-modal.vue'
import searchConfig from './config/search.config'
import contentConfig from './config/content.config'
import modalConfig from './config/modal.config'
import useMainStore from '@/store/main/main'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'
import { storeToRefs } from 'pinia'
import { nextTick, ref } from 'vue'
import { mapRoleToPermission } from '@/utils/map-role'
import type { ElTree } from 'element-plus'

const mainStore = useMainStore()
const { menuList } = storeToRefs(mainStore)
const checkedKeysRef = ref()
const treeRef = ref<InstanceType<typeof ElTree>>()
// 共两个参数，依次为：传递给 data 属性的数组中该节点所对应的对象、树目前的选中状态对象，包含 checkedNodes、checkedKeys、halfCheckedNodes、halfCheckedKeys 四个属性
function onTreeChecked(chickedObj: any, allCheckedObj: any) {
  // console.log('onTreeChecked', chickedObj, allCheckedObj)
  const menuList = [...allCheckedObj.checkedKeys, ...allCheckedObj.halfCheckedKeys] as any[]
  checkedKeysRef.value = { menuList }
}

// hooks抽取逻辑
const { contentRef, searchResetAction, searchQueryAction } = usePageContent()
const { modalRef, newDataAction, updateDataAction } = usePageModal(userInfo => {
  checkedKeysRef.value = mapRoleToPermission(userInfo.menuList)
  // nextTick在vue中的意思是：当dom更新后，再执行回调函数
  nextTick(() => {
    treeRef.value?.setCheckedKeys(checkedKeysRef.value)
  })
})
</script>

<style lang="less" scoped></style>
