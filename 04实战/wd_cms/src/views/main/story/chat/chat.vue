<template>
  <div class="chat">
    <el-input v-model="titleModel" placeholder="请输入故事标题" />
    <div class="editor" style="border: 1px solid #ccc">
      <Toolbar
        style="border-bottom: 1px solid #ccc"
        :editor="editorRef"
        :defaultConfig="toolbarConfig"
        :mode="mode"
      />
      <Editor
        style="height: 500px; overflow-y: hidden"
        v-model="valueHtml"
        :defaultConfig="editorConfig"
        :mode="mode"
        @onCreated="handleCreated"
      />
    </div>
    <div class="submit"><el-button type="primary" @click="handleSubmit">提交</el-button></div>
  </div>
</template>

<script setup lang="ts">
import '@wangeditor/editor/dist/css/style.css' // 引入 css

import { onBeforeUnmount, ref, shallowRef, onMounted } from 'vue'
import { Editor, Toolbar } from '@wangeditor/editor-for-vue'
import { ElMessage } from 'element-plus'
import { newStoryRequest } from '@/service/main/story/story'

const titleModel = ref('')

const mode = 'default' // 或 'simple'

// 编辑器实例，必须用 shallowRef
const editorRef = shallowRef()

// 内容 HTML
const valueHtml = ref('')

onMounted(() => {
  // setTimeout(() => {
  //   valueHtml.value = '<p>模拟 Ajax 异步设置内容</p>'
  // }, 1500)
})

const toolbarConfig = {}
const editorConfig = { placeholder: '请输入故事内容...' }

// 组件销毁时，也及时销毁编辑器
onBeforeUnmount(() => {
  const editor = editorRef.value
  if (editor == null) return
  editor.destroy()
})

const handleCreated = (editor: any) => {
  editorRef.value = editor // 记录 editor 实例，重要！
}

async function handleSubmit() {
  console.log('提交:', titleModel.value, valueHtml.value)
  const res = await newStoryRequest({
    title: titleModel.value,
    content: valueHtml.value
  })
  if (res.code === 0) {
    ElMessage.success('创建成功')
  } else {
    ElMessage.error('创建失败')
  }
}
</script>

<style lang="less" scoped>
.el-input {
  margin-bottom: 20px;
}

.submit {
  display: flex;
  justify-content: center;
  margin-top: 20px;
  .el-button {
    width: 120px;
  }
}
</style>
