<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import MainNav from '@/components/MainNav.vue'
</script>

<template>
  <div class="flex">
    <MainNav class="w-[150px]" />
    <main class="p-5 w-full">
      <RouterView />
    </main>
  </div>
</template>
