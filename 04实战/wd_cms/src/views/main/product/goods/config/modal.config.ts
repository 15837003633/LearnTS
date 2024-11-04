const modalConfig = {
  pageName: 'goods',
  header: {
    newTitle: '新建商品',
    editTitle: '编辑商品'
  },
  formItems: [
    {
      type: 'input',
      label: '名称',
      prop: 'name',
      placeHolder: '请输入名称'
    },
    {
      type: 'input',
      label: '原价',
      prop: 'oldPrice',
      placeHolder: '请输入原价'
    },
    {
      type: 'input',
      label: '现价',
      prop: 'newPrice',
      placeHolder: '请输入现价'
    },
    {
      type: 'input',
      label: '描述',
      prop: 'desc',
      placeHolder: '请输入描述'
    },
    {
      type: 'select',
      label: '状态',
      prop: 'status',
      placeHolder: '请选择状态',
      options: [
        {
          name: '开启',
          id: 1
        },
        {
          name: '关闭',
          id: 0
        }
      ]
    },
    {
      type: 'input',
      label: '图片地址',
      prop: 'imgUrl',
      placeHolder: '请输入图片地址'
    },
    {
      type: 'input',
      label: '库存',
      prop: 'inventoryCount',
      placeHolder: '请输入库存'
    },
    {
      type: 'input',
      label: '已售',
      prop: 'saleCount',
      placeHolder: '请输入已售'
    },
    {
      type: 'input',
      label: '收藏数量',
      prop: 'favorCount',
      placeHolder: '请输入收藏数量'
    },
    {
      type: 'input',
      label: '地址',
      prop: 'address',
      placeHolder: '请输入地址'
    }
  ]
}

export default modalConfig
