import pageModal from '@/components/page-modal/page-modal.vue'
import { ref } from 'vue'

type UpdateCallBackFn = (data: any) => void
function usePageModal(updateCallBack?: UpdateCallBackFn) {
  const modalRef = ref<InstanceType<typeof pageModal>>()
  function newDataAction() {
    modalRef.value?.setDialogVisible()
  }

  function updateDataAction(dataInfo: any) {
    if (updateCallBack) updateCallBack(dataInfo)
    modalRef.value?.setDialogVisible(false, dataInfo)
  }
  return {
    modalRef,
    newDataAction,
    updateDataAction
  }
}
export default usePageModal
