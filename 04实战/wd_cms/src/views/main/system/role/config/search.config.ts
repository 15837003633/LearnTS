const searchConfig = {
  pageName: 'role',
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '角色名称',
      placeHolder: '请输入查询的角色名称'
    },
    {
      type: 'input',
      prop: 'intro',
      label: '权限介绍',
      placeHolder: '请输入查询的权限介绍'
    },
    {
      type: 'date',
      prop: 'createAt',
      label: '创建时间'
    }
  ]
}

export default searchConfig
