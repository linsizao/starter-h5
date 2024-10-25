<script setup lang="ts">
  const route = useRoute('/hi/[name]')

  console.log('route.params.name', route.params.name)

  const user = useUserStore()

  watchEffect(() => {
    user.setNewName(route.params.name as string)
  })
</script>

<template>
  <div>hi: {{ route.params.name }}</div>
</template>

<route lang="yaml">
meta:
  layout: user
</route>
