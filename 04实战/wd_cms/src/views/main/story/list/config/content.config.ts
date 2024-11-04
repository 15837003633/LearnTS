const contentConfig = {
  pageName: 'story',
  header: {
    title: '故事列表'
  },
  props: [
    { type: 'index', label: '序号', width: '80px' },
    { label: '标题', prop: 'title', width: '150px' },
    { label: '内容', prop: 'content' },
    { type: 'date', label: '创建时间', prop: 'createAt', width: '200px' }
  ]
}
export default contentConfig
