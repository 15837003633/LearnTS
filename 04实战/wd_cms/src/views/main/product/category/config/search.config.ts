const searchConfig = {
  pageName: 'category',
  formItems: [
    {
      type: 'input',
      prop: 'id',
      label: '分类ID',
      placeHolder: '请输入查询的分类ID'
    },
    {
      type: 'input',
      prop: 'name',
      label: '分类名称',
      placeHolder: '请输入查询的分类名称'
    },
    {
      type: 'date',
      prop: 'createAt',
      label: '创建时间'
    }
  ]
}

export default searchConfig
