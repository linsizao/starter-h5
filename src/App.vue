<script setup lang="ts">
  import { onMounted, ref, shallowRef } from 'vue'
  import ChooseSeat from './components/ChooseSeat.vue'
  import request from './utils/axiosInstance'
  import { showToast } from 'vant'

  const baseInfo = ref({})

  const seatList = shallowRef([])

  const disabledList = shallowRef([])

  const paidList = shallowRef([])

  const selectList = ref([])

  const getDate = () => {
    request({
      url: '/getData',
      method: 'get'
    }).then((res) => {
      const {
        baseInfo: info,
        seatList: sList,
        disabledList: dList,
        paidList: pList
      } = res.data.data
      console.log('info', info)

      baseInfo.value = info
      seatList.value = sList
      disabledList.value = dList
      paidList.value = pList
    })
  }

  const test = () => {
    request.get('/api/todos/1').then((res) => {
      console.log(res)
    })
  }

  const getSelected = () => {
    console.log('selectList', selectList.value)
    showToast(`选中了：${selectList.value.toString()}`)
  }

  onMounted(() => {
    getDate()
    // test()
  })
</script>

<template>
  <main>
    <div class="choose-seat-box">
      <ChooseSeat
        v-model="selectList"
        :base-info="baseInfo"
        :seat-list="seatList"
        :disabled-list="disabledList"
        :paid-list="paidList"
      />
    </div>

    <van-button
      type="primary"
      block
      color="#fb6a66"
      class="btn"
      @click="getSelected"
    >
      Continue
    </van-button>
  </main>
</template>

<style lang="scss" scoped>
  .choose-seat-box {
    width: 80%;
    height: 60%;
  }
  .btn {
    margin-top: 20px;
  }
</style>
