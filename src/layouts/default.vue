<script setup lang="ts">
  defineOptions({
    name: 'DefaultLayout'
  })
</script>

<template>
  <main
    px-4
    py-10
    text="center gray-700 dark:gray-200"
    flex
    flex-col
    flex-items-center
  >
    <RouterView />
    <div mx-auto mt-5 text-center text-sm opacity-50>[Default Layout]</div>
  </main>
</template>
