<template>
  <div class="card">
    <div class="title">
      <span>{{ cardData.title }}</span>
      <el-tooltip :content="cardData.tips" effect="light">
        <el-icon>
          <question-filled />
        </el-icon>
      </el-tooltip>
    </div>
    <div class="amount" ref="amountRef">{{ cardData.number1 }}</div>
    <div class="subtitle">{{ cardData.subtitle }} {{ unit_prefix }}{{ cardData.number1 }}</div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import type { IAmountItem } from '@/store/main/analysis/dashboard/type'
import { CountUp } from 'countup.js'

const props = defineProps<{
  cardData: IAmountItem
}>()

const amountRef = ref<HTMLElement>()

const unit_prefix = props.cardData.amount === 'saleroom' ? '￥' : ''

onMounted(() => {
  const countUp = new CountUp(amountRef.value!, props.cardData.number1, {
    prefix: unit_prefix
  })
  if (!countUp.error) {
    countUp.start()
  } else {
    console.error(countUp.error)
  }
})
</script>

<style lang="less" scoped>
.card {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #fff;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);

  .title {
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 20px;
    font-size: 14px;
    color: #aaa;
  }

  .amount {
    margin: 10px 0;
    font-size: 30px;
  }
  .subtitle {
    height: 20px;
    font-size: 14px;
    color: #333;
    padding-top: 10px;
    border-top: #eee 1px solid;
  }
}
</style>
