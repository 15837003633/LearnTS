<template>
  <div class="search">
    <el-form ref="formRef" :model="formData" label-width="80px">
      <!-- el-row 一行是24份，col设置为8代表一行三个 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item prop="name" label="部门名" size="large">
            <el-input v-model="formData.name" placeholder="请输入部门名" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="leader" label="部门领导" size="large">
            <el-input v-model="formData.leader" placeholder="请输入部门领导" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="date" label="创建时间" size="large">
            <el-date-picker
              v-model="formData.createAt"
              type="daterange"
              range-separator="到"
              start-placeholder="开始时间"
              end-placeholder="结束时间"
            />
          </el-form-item>
        </el-col>
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

const emits = defineEmits(['resetAction', 'queryAction'])

const formData = reactive({
  name: '',
  leader: '',
  createAt: ''
})

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
