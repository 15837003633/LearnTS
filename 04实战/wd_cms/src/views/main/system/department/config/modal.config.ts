const modalConfig = {
  pageName: 'department',
  header: {
    newTitle: '新建部门',
    editTitle: '编辑部门'
  },
  formItems: [
    { type: 'input', label: '部门名称', placeHolder: '请输入部门名称', prop: 'name' },
    { type: 'input', label: '部门领导', placeHolder: '请输入部门领导', prop: 'leader' },
    {
      type: 'select',
      label: '上级部门',
      placeHolder: '请选择上级部门',
      prop: 'parentId',
      options: [] as any[]
    }
  ]
}

export default modalConfig
