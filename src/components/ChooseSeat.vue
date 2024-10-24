<script setup lang="ts">
  import { computed } from 'vue'

  type TbaseInfo = {
    name?: string
  }

  const props = defineProps<{
    baseInfo: TbaseInfo // 基本信息
    seatList: string[] // 座位列表
    disabledList: string[] // 禁用座位列表
    paidList: string[] // 已购买座位列表
    modelValue: string[]
  }>()

  const emits = defineEmits(['update:modelValue'])

  // 转换布局
  const itemsLayout2D = computed(() => {
    const array1 = []
    const array2 = []
    for (let i = 0; i < props.seatList.length; i += 4) {
      // 第一组：第n+1, n+2
      array1.push(props.seatList[i])
      array1.push(props.seatList[i + 1])
      // 第二组：第n+3, n+4
      array2.push(props.seatList[i + 2])
      array2.push(props.seatList[i + 3])
    }
    return [array1, array2]
  })

  const selectList = computed<string[]>({
    get() {
      return props.modelValue
    },
    set(val) {
      emits('update:modelValue', val)
    }
  })

  const clickItem = (item: string) => {
    // 不可点击
    if (props.disabledList.includes(item) || props.paidList.includes(item))
      return

    // 切换选中状态
    if (selectList.value.includes(item)) {
      const index = selectList.value.findIndex((v) => v === item)
      selectList.value.splice(index, 1)
    } else {
      selectList.value.push(item)
    }
  }
</script>

<template>
  <div class="choose-seat" ref="ChooseSeat">
    <div class="header">
      <div class="wc wc1">WC</div>
      <div class="name">
        <span>
          {{ baseInfo.name }}
        </span>
      </div>
      <div class="wc wc2">WC</div>
    </div>

    <div class="seat-box">
      <div v-for="(row, index) in itemsLayout2D" :key="index" class="seat-list">
        <div
          v-for="(item, iIndex) in row"
          :key="iIndex"
          :class="{
            'seat-item': true,
            disabled: props.disabledList.includes(item),
            selected: selectList.includes(item),
            paid: props.paidList.includes(item)
          }"
          @click="clickItem(item)"
        >
          {{ item }}
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .choose-seat {
    width: 100%;
    height: 100%;
    background: #050110;
    border: 4px solid #fff;
    padding: 10px;
    border-radius: 30px;
    color: #7c7e93;
    overflow: scroll;
    .header {
      display: flex;
      justify-content: space-between;
      font-size: 16px;
      .name {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 20%;
        span {
          width: 30px;
          height: 30px;
          display: inline-block;
          text-align: center;
          line-height: 30px;
          background-color: #191524;
          border-radius: 4px;
        }
      }
      .wc {
        width: calc(40%);
        height: 50px;
        line-height: 50px;
        text-align: center;
        border: 1px solid #7c7e93;
        &.wc1 {
          border-radius: 20px 0 0 0;
        }
        &.wc2 {
          border-radius: 0 20px 0 0;
        }
      }
    }
    .seat-box {
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      .seat-list {
        display: flex;
        flex-wrap: wrap;
        width: 40%;
        .seat-item {
          width: calc((100% - 10px) / 2);
          aspect-ratio: 1;
          margin-right: 10px;
          margin-bottom: 10px;
          display: flex;
          justify-content: center;
          align-items: center;
          text-align: center;
          font-size: 16px;
          color: #fb6a66;
          border: 1px solid #fb6a66;
          border-radius: 8px;
          &:nth-child(2n) {
            margin-right: 0;
          }
          &.disabled {
            color: #565567;
            border-color: #565567;
          }
          &.selected {
            background-color: #fff;
          }
          &.paid {
            color: #fff;
            background-color: #fb6a66;
          }
        }
      }
    }
  }
</style>
