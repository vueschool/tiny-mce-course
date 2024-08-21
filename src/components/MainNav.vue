<script setup lang="ts">
const links = [
  { name: 'Home', path: '/' },
  { name: 'Chapter 1', path: '/chapter-1' },
  { name: 'Chapter 2', path: '/chapter-2' },
  { name: 'Chapter 3', path: '/chapter-3' },
  { name: 'Chapter 4', path: '/chapter-4' }
]
</script>
<template>
  <nav class="border-r border-gray-200 h-screen">
    <ul class="">
      <li v-for="link in links" :key="link.name">
        <RouterLink class="hover:bg-gray-200 px-6 py-2 block" :to="link.path">{{
          link.name
        }}</RouterLink>
      </li>
    </ul>
  </nav>
</template>
<style scoped>
:deep(.router-link-active) {
  @apply bg-gray-200;
}
</style>
