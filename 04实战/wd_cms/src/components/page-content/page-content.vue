<template>
  <div class="content">
    <div class="head">
      <h2>{{ contentConfig.header.title }}</h2>
      <el-button type="primary" @click="addData">{{ contentConfig.header.btn }}</el-button>
    </div>
    <div class="table">
      <el-table :data="pageList" border>
        <template v-for="item in contentConfig.props" :key="item.prop">
          <!-- 选择 -->
          <el-table-column v-if="item.type === 'selection'" v-bind="item"></el-table-column>
          <!-- 序号 -->
          <el-table-column
            v-else-if="item.type === 'index'"
            type="index"
            :label="item.label"
            :width="item.width"
          ></el-table-column>
          <!-- 日期 -->
          <el-table-column v-else-if="item.type == 'date'" v-bind="item">
            <template #default="scope">
              {{ formatUTCDate(scope.row[item.prop]) }}
            </template>
          </el-table-column>
          <!-- 操作 -->
          <el-table-column v-else-if="item.type === 'handler'" v-bind="item">
            <template #default="scope">
              <div class="opration">
                <el-button
                  icon="Edit"
                  type="primary"
                  size="small"
                  text
                  @click="updateData(scope.row)"
                  >编辑</el-button
                >
                <el-button
                  icon="Delete"
                  type="danger"
                  size="small"
                  text
                  @click="deleteData(scope.row.id)"
                  >删除</el-button
                >
              </div>
            </template>
          </el-table-column>
          <!-- 普通 -->
          <el-table-column v-else v-bind="item" />
        </template>
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
import useSystemStore from '@/store/main/system/system'
import { storeToRefs } from 'pinia'
import { formatUTCDate } from '@/utils/format'
import { ref } from 'vue'

export interface IProps {
  contentConfig: {
    pageName: string
    header: {
      title: string
      btn: string
    }
    props: any[]
  }
}

const props = defineProps<IProps>()

const emits = defineEmits(['newData', 'updateData'])

const pageStore = useSystemStore()

const { pageList } = storeToRefs(pageStore)

// pagination 分页器
const currentPage = ref(1)
const pageSize = ref(10)
const { pageTotalCount } = storeToRefs(pageStore)

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
  pageStore.fetchPageList(props.contentConfig.pageName, { ...pageInfo, ...queryInfo })
}

// *******************************删除********************************
async function deleteData(uid: number) {
  console.log('删除 uid:', uid)
  await pageStore.deletePageById(props.contentConfig.pageName, uid)
}
// *******************************新增********************************
function addData() {
  emits('newData')
}
// *******************************更新********************************
function updateData(dataInfo: any) {
  emits('updateData', dataInfo)
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
