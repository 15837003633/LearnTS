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
        <el-table-column label="状态" align="center" width="100">
          <!-- 作用域插槽 -->
          <template #default="scope">
            <el-button v-if="scope.row.enable === 1" type="success" size="small" text
              >启用</el-button
            >
            <el-button v-else type="info" size="small" text>禁用</el-button>
          </template>
        </el-table-column>
        <el-table-column label="创建时间" align="center">
          <template #default="scope">
            {{ formatUTCDate(scope.row.createAt) }}
          </template>
        </el-table-column>
        <el-table-column label="更新时间" align="center">
          <template #default="scope">
            {{ formatUTCDate(scope.row.updateAt) }}
          </template>
        </el-table-column>
        <el-table-column label="操作" align="center" width="160">
          <template #default="scope">
            <div class="opration">
              <el-button icon="Edit" type="primary" size="small" text @click="updateUser(scope.row)"
                >编辑</el-button
              >
              <el-button
                icon="Delete"
                type="danger"
                size="small"
                text
                @click="deleteUser(scope.row.id)"
                >删除</el-button
              >
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <div class="foot">
      <el-pagination
        v-model:current-page="currentPage"
        v-model:page-size="pageSize"
        :page-sizes="[10, 20, 30]"
        size="large"
        layout="total, sizes, prev, pager, next, jumper"
        :total="totalCount"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
      />
    </div>
  </div>
</template>

<script setup lang="ts">
// import { reactive } from 'vue'
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'
import { formatUTCDate } from '@/utils/format'
import { ref } from 'vue'

const emits = defineEmits(['newUser', 'updateUser'])

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

// pagination 分页器
const currentPage = ref(1)
const pageSize = ref(10)
const { totalCount } = storeToRefs(userStore)

//记录查询条件
let queryInfo: any = null

// 进入页面先获取一次数据
requestUserList()
// *******************************查询********************************
// 分页器的回调函数
function handleSizeChange() {
  requestUserList()
}
// 页数改变
function handleCurrentChange() {
  requestUserList()
}
// 重置查询
function handleResetSearch() {
  queryInfo = null
  currentPage.value = 1
  requestUserList()
}
// 条件查询
function handleQuerySearch(qInfo: any) {
  currentPage.value = 1
  queryInfo = qInfo
  requestUserList()
}
// 根据当前页面状态，查询数据
function requestUserList() {
  const offset = (currentPage.value - 1) * pageSize.value
  const size = pageSize.value
  const pageInfo = { offset, size }
  userStore.fetchUserList({ ...pageInfo, ...queryInfo })
}

// *******************************删除********************************
async function deleteUser(uid: number) {
  console.log('删除 uid:', uid)
  await userStore.deleteUserById(uid)
}
// *******************************新增********************************
function addUser() {
  emits('newUser')
}
// *******************************更新********************************
function updateUser(userInfo: any) {
  emits('updateUser', userInfo)
}

// 暴露方法
defineExpose({
  requestUserList,
  handleResetSearch,
  handleQuerySearch
})
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

  .foot {
    display: flex;
    justify-content: end;
    padding: 20px 0;
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
