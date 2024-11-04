import { useLoginStore } from '@/store/login/login'

function usePermission(permissionID: string) {
  const loginStore = useLoginStore()

  const hasPermission = !!loginStore.userPermissionList.find(item => item.includes(permissionID))
  return hasPermission
}

export default usePermission
