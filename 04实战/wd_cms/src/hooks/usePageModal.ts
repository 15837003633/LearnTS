import pageModal from '@/components/page-modal/page-modal.vue'
import { ref } from 'vue'
function usePageModal() {
  const modalRef = ref<InstanceType<typeof pageModal>>()
  function newDataAction() {
    modalRef.value?.setDialogVisible()
  }

  function updateDataAction(dataInfo: any) {
    modalRef.value?.setDialogVisible(false, dataInfo)
  }
  return {
    modalRef,
    newDataAction,
    updateDataAction
  }
}
export default usePageModal
