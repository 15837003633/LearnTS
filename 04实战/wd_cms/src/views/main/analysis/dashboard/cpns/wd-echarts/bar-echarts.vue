<template>
  <baseEcharts :option="option"></baseEcharts>
</template>

<script setup lang="ts">
import baseEcharts from './base-echarts.vue'
const option = {
  xAxis: {
    type: 'category',
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    type: 'value'
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar'
    }
  ]
}
</script>

<style lang="less" scoped></style>
