const contentConfig = {
  pageName: 'department',
  header: {
    title: '部门列表',
    btn: '添加部门'
  },
  props: [
    { type: 'selection', label: '选择', width: '50px' },
    { type: 'index', label: '序号', width: '50px' },
    { prop: 'name', label: '部门名称', width: '180px' },
    { prop: 'leader', label: '部门领导', width: '180px' },
    { prop: 'parentId', label: '上级部门', width: '180px' },
    { type: 'date', prop: 'createAt', label: '创建时间' },
    { type: 'date', prop: 'updateAt', label: '更新时间' },
    { type: 'handler', label: '操作', width: '160px' }
  ]
}

export default contentConfig
