<template>
  <div class="user">
    <user-search @reset-action="searchResetAction" @query-action="searchQueryAction" />
    <user-content ref="contentRef" @newUser="newUserAction" @updateUser="updateUserAction" />
    <user-modal ref="modalRef" />
  </div>
</template>

<script setup lang="ts">
import UserSearch from './cpns/user-search.vue'
import userContent from './cpns/user-content.vue'
import userModal from './cpns/user-modal.vue'
import { ref } from 'vue'

const contentRef = ref<InstanceType<typeof userContent>>()

function searchResetAction() {
  contentRef.value?.handleResetSearch()
}
function searchQueryAction(queryInfo: any) {
  contentRef.value?.handleQuerySearch(queryInfo)
}

const modalRef = ref<InstanceType<typeof userModal>>()
function newUserAction() {
  modalRef.value?.setDialogVisible()
}

function updateUserAction(userInfo: any) {
  modalRef.value?.setDialogVisible(false, userInfo)
}
</script>

<style lang="less" scoped>
.user {
  border-radius: 10px;
  overflow: hidden;
}
</style>
