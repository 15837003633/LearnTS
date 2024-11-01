const searchConfig = {
  formItems: [
    {
      type: 'input',
      label: '部门名称',
      placeHolder: '请输入部门名称',
      prop: 'name',
      initialValue: ''
    },
    {
      type: 'input',
      label: '部门领导',
      placeHolder: '请输入部门领导',
      prop: 'leader',
      initialValue: ''
    },
    {
      type: 'date',
      label: '创建时间',
      prop: 'createAt',
      initialValue: ''
    }
  ]
}

export default searchConfig
