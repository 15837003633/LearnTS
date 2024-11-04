<template>
  <div class="department">
    <page-search
      :search-config="searchConfig"
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
    <page-modal ref="modalRef" :modal-config="modalConfig"></page-modal>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import pageContent from '@/components/page-content/page-content.vue'
import pageSearch from '@/components/page-search/page-search.vue'
import pageModal from '@/components/page-modal/page-modal.vue'
import searchConfig from './config/search.config'
import contentConfig from './config/content.config'
import defaultModalConfig from './config/modal.config'
import useMainStore from '@/store/main/main'
import usePageContent from '@/hooks/usePageContent'
import usePageModal from '@/hooks/usePageModal'

const mainStore = useMainStore()

const modalConfig = computed(() => {
  defaultModalConfig.formItems.forEach(item => {
    if (item.prop == 'parentId') {
      item.options?.push(...mainStore.entireDepartments)
    }
  })
  return defaultModalConfig
})

// hooks抽取逻辑
const { contentRef, searchResetAction, searchQueryAction } = usePageContent()
const { modalRef, newDataAction, updateDataAction } = usePageModal()
</script>

<style lang="less" scoped></style>
