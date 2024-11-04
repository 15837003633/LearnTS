import pageModal from '@/components/page-modal/page-modal.vue'
import { ref } from 'vue'

type CallBackFn = (data?: any) => void
function usePageModal(newCallBack?: CallBackFn, updateCallBack?: CallBackFn) {
  const modalRef = ref<InstanceType<typeof pageModal>>()
  function newDataAction() {
    if (newCallBack) newCallBack()
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
