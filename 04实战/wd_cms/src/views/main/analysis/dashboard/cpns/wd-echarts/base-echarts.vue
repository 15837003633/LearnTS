<template>
  <div class="content"><div ref="echatRef" class="echat"></div></div>
</template>

<script setup lang="ts">
import * as echarts from 'echarts'
import { onMounted, ref } from 'vue'

const props = defineProps<{
  option: any
}>()

const echatRef = ref<HTMLElement>()

onMounted(() => {
  const myChart = echarts.init(echatRef.value!)

  myChart.setOption(props.option)
})
</script>

<style lang="less" scoped>
.content {
  display: flex;
  justify-content: center;
  align-items: center;
  .echat {
    width: 100%;
    height: 400px;
  }
}
</style>
