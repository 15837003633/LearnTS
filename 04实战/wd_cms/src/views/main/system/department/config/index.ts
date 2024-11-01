export const searchConfig = {
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
    // {
    //   type: 'select',
    //   label: '上级部门',
    //   placeHolder: '请选择上级部门',
    //   prop: 'parentId',
    //   initialValue: '',
    //   options: [
    //     { label: '研发部', value: '1' },
    //     { label: '销售部', value: '2' }
    //   ]
    // },
    {
      type: 'date',
      label: '创建时间',
      prop: 'createAt',
      initialValue: ''
    }
  ]
}
