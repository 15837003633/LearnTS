<template>
  <div class="search">
    <el-form ref="formRef" :model="formData" label-width="80px">
      <!-- el-row 一行是24份，col设置为8代表一行三个 -->
      <el-row :gutter="20">
        <el-col :span="8">
          <el-form-item prop="name" label="用户名" size="large">
            <el-input v-model="formData.name" placeholder="请输入用户名" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="realname" label="真实姓名" size="large">
            <el-input v-model="formData.realname" placeholder="请输入真实姓名" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="cellphone" label="手机号" size="large">
            <el-input v-model="formData.cellphone" placeholder="请输入手机号" />
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="enable" label="状态" size="large">
            <el-select placeholder="请选择状态" v-model="formData.enable">
              <el-option :value="1" label="启用" />
              <el-option :value="0" label="禁用" />
            </el-select>
          </el-form-item>
        </el-col>
        <el-col :span="8">
          <el-form-item prop="date" label="创建时间" size="large">
            <el-date-picker
              v-model="formData.date"
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

const formData = reactive({
  name: '',
  realname: '',
  cellphone: '',
  enable: 1,
  date: [] as any[]
  // tcreateA: '',
  // updateAt: ''
})

const formRef = ref<InstanceType<typeof ElForm>>()
function resetForm() {
  // 方法1
  // formData.name = ''
  // formData.realname = ''
  // formData.cellphone = ''
  // formData.enable = 1
  // formData.date = []

  // 方法2：使用form组件的expose
  // 需要设置FormItem的prop属性来找到需要重置的表单
  formRef.value?.resetFields()
}

function onSubmit() {}
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
