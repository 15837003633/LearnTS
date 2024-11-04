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

export function mapMenuListToPermissions(menuList: any[]) {
  const permissionList: any[] = []
  function getPermissonPath(menus: any[]) {
    for (const menu of menus) {
      if (menu.type == 3) {
        //system:users:create
        permissionList.push(menu.permission)
      } else {
        getPermissonPath(menu.children ?? [])
      }
    }
  }
  getPermissonPath(menuList)
  return permissionList
}
