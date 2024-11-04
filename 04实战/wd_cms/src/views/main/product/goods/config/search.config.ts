const searchConfig = {
  pageName: 'goods',
  formItems: [
    {
      type: 'input',
      prop: 'name',
      label: '商品名称',
      placeHolder: '请输入查询的商品名称'
    },
    // {
    //   type: 'input',
    //   prop: 'newPrice',
    //   label: '最新价格',
    //   placeHolder: '请输入查询的商品价格'
    // },
    // {
    //   type: 'input',
    //   prop: 'desc',
    //   label: '商品描述',
    //   placeHolder: '请输入查询的商品描述'
    // },
    // {
    //   type: 'input',
    //   prop: 'saleCount',
    //   label: '商品效率',
    //   placeHolder: '请输入查询的商品效率'
    // },
    // {
    //   type: 'input',
    //   prop: 'address',
    //   label: '商品地址',
    //   placeHolder: '请输入查询的商品地址'
    // },
    {
      type: 'date',
      prop: 'createAt',
      label: '创建时间'
    }
  ]
}

export default searchConfig
