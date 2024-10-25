<script setup lang="ts">
  defineOptions({
    name: 'IndexPage'
  })
</script>

<template>
  <!-- i-logos-vue -->
  <!-- i-material-symbols-10k -->
  <div class="i-material-symbols-10k w-50px h-50px"></div>

  <div>index</div>

  <div>
    <router-link to="/about">about</router-link>
  </div>
  <div>
    <router-link to="/hi/lin">hi</router-link>
  </div>
</template>
