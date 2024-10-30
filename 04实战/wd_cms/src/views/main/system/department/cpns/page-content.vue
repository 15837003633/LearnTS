<template>
  <div class="content">
    <div class="head">
      <h2>部门列表</h2>
      <el-button type="primary" @click="addUser">添加部门</el-button>
    </div>
    <div class="table">
      <el-table :data="pageList" border>
        <el-table-column type="selection"></el-table-column>
        <el-table-column type="index" label="序号" align="center" width="60"></el-table-column>
        <el-table-column prop="name" label="部门名" width="160" />
        <el-table-column prop="leader" label="部门领导" width="160" />
        <el-table-column prop="parentId" label="上级部门" width="160" />
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
        :total="pageTotalCount"
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

const { pageList } = storeToRefs(userStore)

// pagination 分页器
const currentPage = ref(1)
const pageSize = ref(10)
const { pageTotalCount } = storeToRefs(userStore)

//记录查询条件
let queryInfo: any = null

// 进入页面先获取一次数据
requestPageList()
// *******************************查询********************************
// 分页器的回调函数
function handleSizeChange() {
  requestPageList()
}
// 页数改变
function handleCurrentChange() {
  requestPageList()
}
// 重置查询
function handleResetSearch() {
  queryInfo = null
  currentPage.value = 1
  requestPageList()
}
// 条件查询
function handleQuerySearch(qInfo: any) {
  currentPage.value = 1
  queryInfo = qInfo
  requestPageList()
}
// 根据当前页面状态，查询数据
function requestPageList() {
  const offset = (currentPage.value - 1) * pageSize.value
  const size = pageSize.value
  const pageInfo = { offset, size }
  userStore.fetchPageList('department', { ...pageInfo, ...queryInfo })
}

// *******************************删除********************************
async function deleteUser(uid: number) {
  console.log('删除 uid:', uid)
  await userStore.deletePageById('department', uid)
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
  requestPageList,
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
