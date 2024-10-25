<script setup lang="ts">
  import { getTodos } from '@/request/apis/user'
  defineOptions({
    name: 'IndexPage'
  })

  const formatted = useDateFormat(useNow(), 'YYYY-MM-DD HH:mm:ss')
  console.log('formatted', formatted.value)

  const fetchData = async () => {
    const data = await getTodos()
    console.log('data', data)
  }

  fetchData()
</script>

<template>
  <div class="i-logos-vue w-50px h-50px"></div>

  <div>index</div>

  <div>
    <router-link to="/about">about</router-link>
  </div>
  <div>
    <router-link to="/hi/lin">hi</router-link>
  </div>
</template>
