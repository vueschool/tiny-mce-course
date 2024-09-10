<script setup lang="ts">
const links = [
  { name: 'Home', path: '/' },
  { name: 'Chapter 1 Start', path: '/chapter-1-start' },
  { name: 'Chapter 1 End', path: '/chapter-1-end' },
  { name: 'Chapter 2 Start', path: '/chapter-2-start' },
  { name: 'Chapter 2 End', path: '/chapter-2-end' },
  { name: 'Chapter 3 Start', path: '/chapter-3-start' },
  { name: 'Chapter 3 End', path: '/chapter-3-end' },
  { name: 'Chapter 4 Start', path: '/chapter-4-start' },
  { name: 'Chapter 4 End', path: '/chapter-4-end' }
]
</script>
<template>
  <nav class="h-screen border-r border-gray-200">
    <ul class="">
      <li v-for="link in links" :key="link.name">
        <RouterLink class="block px-6 py-2 hover:bg-gray-200" :to="link.path">{{
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
