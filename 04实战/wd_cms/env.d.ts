/// <reference types="vite/client" />

declare module '*.vue' {
  import { DefineComponent } from 'vue'
  const component: DefineComponent
  export default component
}

declare module '@wangeditor/editor-for-vue' {
  const Editor: any
  const Toolbar: any
  type IEditorConfig = any
}
