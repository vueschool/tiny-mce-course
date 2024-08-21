<script setup lang="ts">
defineProps<{
  label: string
}>()

const value = defineModel()
</script>

<template>
  <label class="grid grid-cols-9 items-center">
    <span class="text-gray-700 col-span-1">{{ label }}</span>
    <input
      v-model="value"
      class="col-span-8 px-2 py-1 mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
    />
  </label>
</template>
