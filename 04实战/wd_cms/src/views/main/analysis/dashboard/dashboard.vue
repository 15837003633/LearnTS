<template>
  <div class="dashboard">
    <div class="header">
      <el-row :gutter="20">
        <template v-for="item in dashboardStore.amountList" :key="item.amount">
          <el-col :span="6">
            <wd-card :card-data="item" />
          </el-col>
        </template>
      </el-row>
    </div>
  </div>
  <div class="main">
    <el-row :gutter="100">
      <el-col :span="12">
        <bar-echarts></bar-echarts>
      </el-col>
      <el-col :span="12">
        <pie-echarts></pie-echarts>
      </el-col>
      <el-col :span="8">
        <RoseEcharts></RoseEcharts>
      </el-col>
      <el-col :span="8">
        <LineEcharts></LineEcharts>
      </el-col>
      <el-col :span="8">
        <SpeedEcharts></SpeedEcharts>
      </el-col>
    </el-row>
  </div>
</template>

<script setup lang="ts">
import useDashboardStore from '@/store/main/analysis/dashboard/dashboard'
import wdCard from './cpns/wd-card/wd-card.vue'
import barEcharts from './cpns/wd-echarts/bar-echarts.vue'
import PieEcharts from './cpns/wd-echarts/pie-echarts.vue'
import RoseEcharts from './cpns/wd-echarts/rose-echarts.vue'
import LineEcharts from './cpns/wd-echarts/line-echarts.vue'
import SpeedEcharts from './cpns/wd-echarts/speed-echarts.vue'
const dashboardStore = useDashboardStore()
dashboardStore.getAmountList()
</script>

<style lang="less" scoped>
.main {
  margin: 20px 0;
}
</style>
