<template>
  <div class="department">
    <page-search @query-action="searchQueryAction" @reset-action="searchResetAction"></page-search>
    <page-content
      ref="contentRef"
      @new-user="newUserAction"
      @update-user="updateUserAction"
    ></page-content>
    <page-modal ref="modalRef"></page-modal>
  </div>
</template>

<script setup lang="ts">
import pageContent from './cpns/page-content.vue'
import pageSearch from './cpns/page-search.vue'
import pageModal from './cpns/page-modal.vue'

import { ref } from 'vue'

const contentRef = ref<InstanceType<typeof pageContent>>()

function searchResetAction() {
  contentRef.value?.handleResetSearch()
}
function searchQueryAction(queryInfo: any) {
  contentRef.value?.handleQuerySearch(queryInfo)
}

const modalRef = ref<InstanceType<typeof pageModal>>()
function newUserAction() {
  modalRef.value?.setDialogVisible()
}

function updateUserAction(userInfo: any) {
  modalRef.value?.setDialogVisible(false, userInfo)
}
</script>

<style lang="less" scoped></style>
