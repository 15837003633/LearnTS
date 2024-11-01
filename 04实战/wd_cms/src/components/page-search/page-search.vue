<template>
  <div class="search">
    <el-form ref="formRef" :model="formData" :label-width="`${labelWidth ?? 80}px`">
      <!-- el-row 一行是24份，col设置为8代表一行三个 -->
      <el-row :gutter="20">
        <template v-for="item in props.formItems" :key="item.prop">
          <el-col :span="8">
            <el-form-item :prop="item.prop" :label="item.label" size="large">
              <el-input
                v-if="item.type === 'input'"
                v-model="formData[item.prop]"
                :placeholder="item.placeHolder"
              />
              <el-select
                v-else-if="item.type === 'select'"
                v-model="formData[item.prop]"
                :placeholder="item.placeHolder"
              >
                <el-option
                  v-for="op in item.options"
                  :key="op.value"
                  :label="op.label"
                  :value="op.value"
                />
              </el-select>

              <el-date-picker
                v-else-if="item.type === 'date'"
                v-model="formData[item.prop]"
                type="daterange"
                range-separator="到"
                start-placeholder="开始时间"
                end-placeholder="结束时间"
              />
            </el-form-item>
          </el-col>
        </template>
      </el-row>
    </el-form>
    <div class="opration">
      <el-button icon="Refresh" size="small" @click="resetForm">重置</el-button>
      <el-button icon="Search" type="primary" size="small" @click="onSubmit">查询</el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue'
import { ElForm } from 'element-plus'

interface IProps {
  labelWidth?: string
  formItems: any[]
}

const emits = defineEmits(['resetAction', 'queryAction'])

const props = defineProps<IProps>()

// 根据配置，初始化表单数据
const formData = reactive<any>({})
for (const item of props.formItems) {
  formData[item.prop] = item.initialValue ?? ''
}

const formRef = ref<InstanceType<typeof ElForm>>()
function resetForm() {
  formRef.value?.resetFields()
  emits('resetAction')
}

function onSubmit() {
  console.log('submit!', formData)
  emits('queryAction', formData)
}
</script>

<style lang="less" scoped>
.search {
  padding: 10px 20px;

  background-color: white;
}

.el-form-item {
  padding: 20px 30px;
  margin-bottom: 0px;
}

.opration {
  text-align: right;
  margin-bottom: 10px;
}
</style>
