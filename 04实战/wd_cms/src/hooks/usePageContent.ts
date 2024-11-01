import { ref } from 'vue'
import pageContent from '@/components/page-content/page-content.vue'
function usePageContent() {
  const contentRef = ref<InstanceType<typeof pageContent>>()

  function searchResetAction() {
    contentRef.value?.handleResetSearch()
  }
  function searchQueryAction(queryInfo: any) {
    contentRef.value?.handleQuerySearch(queryInfo)
  }
  return {
    contentRef,
    searchResetAction,
    searchQueryAction
  }
}

export default usePageContent
