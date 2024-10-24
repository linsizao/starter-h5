<script setup lang="ts">
  const router = useRouter()
  const route = useRoute('/hi/[name]')

  console.log('route.params.name', route.params.name)
  // const user = useUserStore()

  // watchEffect(() => {
  //   user.setNewName(route.params.name)
  // })
</script>

<template>hi: {{ route.params.name }}</template>

<route lang="yaml">
meta:
  layout: user
</route>
