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
      data: [150, 230, 224, 218, 135, 147, 260],
      type: 'line'
    }
  ]
}
</script>

<style lang="less" scoped></style>
