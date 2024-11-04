const contentConfig = {
  pageName: 'goods',
  header: {
    title: '商品列表',
    btn: '新建商品'
  },
  props: [
    { type: 'index', label: '序号', width: '80px' },
    { label: '名称', prop: 'name', width: '150px' },
    { label: '原价', prop: 'oldPrice', width: '50px' },
    { label: '现价', prop: 'newPrice', width: '50px' },
    { label: '描述', prop: 'desc', width: '150px' },
    { type: 'image', label: '图片', prop: 'imgUrl', width: '80px' },
    { label: '库存', prop: 'inventoryCount', width: '100px' },
    { label: '已售', prop: 'saleCount', width: '50px' },
    { label: '收藏', prop: 'favorCount', width: '50px' },
    { label: '类目', prop: 'categoryId', width: '50px' },
    { label: '地址', prop: 'address' },
    { type: 'date', label: '创建时间', prop: 'createAt' },
    { type: 'date', label: '更新时间', prop: 'updateAt' },
    { type: 'handler', label: '操作', width: '150px' }
  ]
}

export default contentConfig
