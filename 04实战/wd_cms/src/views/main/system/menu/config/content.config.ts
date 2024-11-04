export const contentConfig = {
  pageName: 'menu',
  header: {
    title: '菜单列表'
    // btn: '新建菜单'
  },
  props: [
    { type: 'selection', label: '选择', width: '50' },
    { type: 'index', label: '序号', width: '60' },
    { prop: 'name', label: '菜单名称', width: '150' },
    { prop: 'url', label: '路径', width: '150' },
    { prop: 'icon', label: '图标', width: '150' },
    { type: 'date', prop: 'createAt', label: '创建时间' },
    { type: 'date', prop: 'updateAt', label: '更新时间' }
  ],
  childrenTree: {
    rowKey: 'id',
    treeProps: {
      children: 'children'
    }
  }
}
