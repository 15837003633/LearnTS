export function mapRoleToPermission(roleList: any[]) {
  const permissionList: any[] = []

  function getPermissonID(menuList: any[]) {
    for (const menu of menuList) {
      if (menu.children && menu.children.length > 0) {
        getPermissonID(menu.children)
      } else {
        permissionList.push(menu.id)
      }
    }
  }

  getPermissonID(roleList)
  return permissionList
}
