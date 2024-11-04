const contentConfig = {
  pageName: 'category',
  header: {
    title: '分类列表',
    btn: '新建分类'
  },
  props: [
    { type: 'selection', label: '选择', width: '80px' },
    { type: 'index', label: '序号', width: '80px' },
    { type: 'normal', label: '分类名称', prop: 'name', width: '150px' },
    { type: 'date', label: '创建时间', prop: 'createAt' },
    { type: 'date', label: '更新时间', prop: 'updateAt' },
    { type: 'handler', label: '操作', width: '150px' }
  ]
}

export default contentConfig
