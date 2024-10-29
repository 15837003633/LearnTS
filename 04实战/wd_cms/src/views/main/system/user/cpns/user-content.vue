<template>
  <div class="content">
    <div class="head">
      <h2>用户列表</h2>
      <el-button type="primary" @click="addUser">添加用户</el-button>
    </div>
    <div class="table">
      <el-table :data="userList" border>
        <el-table-column type="selection"></el-table-column>
        <el-table-column type="index" label="序号" align="center" width="60"></el-table-column>
        <el-table-column prop="name" label="用户名" width="160" />
        <el-table-column prop="realname" label="真实姓名" width="160" />
        <el-table-column prop="cellphone" label="手机号码" width="160" />
        <el-table-column prop="enable" label="状态" align="center" width="60" />
        <el-table-column prop="createAt" label="创建时间" align="center"> </el-table-column>
        <el-table-column prop="updateAt" label="更新时间" align="center"> </el-table-column>
        <el-table-column label="操作" align="center" width="160">
          <div class="opration">
            <el-button icon="Edit" type="primary" size="small" text>编辑</el-button>
            <el-button icon="Delete" type="danger" size="small" text>删除</el-button>
          </div>
        </el-table-column>
      </el-table>
    </div>
    <div class="foot">foot</div>
  </div>
</template>

<script setup lang="ts">
// import { reactive } from 'vue'
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'

const userStore = useSystemStore()
/*
 * 直接将响应式数据(ref或者reactive)的属性赋值给另一个变量或者对响应式对象解构，新的变量不会保持响应性。
 * 要保持响应性，
 * 1:可以直接在模板中使用属性。
 * 2:使用计算属性。
 * 3:toRefs函数。可以将reactive对象中的属性都转成ref。例如 const {userList} = toRefs(xxx)。
 * 只希望转换reactive对象中的一个属性为ref。使用toRef函数, 例如 const userList = toRef(xxx,'userList')
 * 4:storeToRefs。类似于 toRefs，但专门针对 Pinia store 的使用场景
 */

/*栗子：
const { userList } = toRefs(userStore)
const userList = toRefs(userStore).userList
const { userList } = storeToRefs(userStore)
const userList = storeToRefs(userStore).userList
 */

const { userList } = storeToRefs(userStore)

function addUser() {}
</script>

<style lang="less" scoped>
.content {
  padding: 10px 20px;
  background-color: white;
  margin-top: 20px;

  .head {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 10px 0;
  }

  .table {
    .opration {
      .el-button {
        margin: 0;
        padding: 10px 5px;
      }
    }
  }
}

// cell的高度
// 可以访问组件的根元素，如果要访问组件的非根元素，要使用:deep
.el-table {
  :deep(.el-table__cell) {
    padding: 10px 0;
  }
}
</style>
