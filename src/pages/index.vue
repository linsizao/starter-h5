<script setup lang="ts">
  defineOptions({
    name: 'IndexPage'
  })
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
