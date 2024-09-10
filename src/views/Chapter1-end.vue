<script setup lang="ts">
import PageHeading from '@/components/PageHeading.vue'
import { ref } from 'vue'
import Editor from '@tinymce/tinymce-vue'
const apiKey = import.meta.env.VITE_API_KEY
const value = ref('Hello <strong>world</strong>')
</script>
<template>
  <PageHeading>Getting Started with Tiny MCE</PageHeading>
  <div>
    <Editor
      :api-key="apiKey"
      :init="{
        plugins: 'lists link image table code help casechange',
        toolbar:
          'casechange italic bold underline strikethrough | bullist numlist | link image table code help'
      }"
      v-model="value"
    />
  </div>
</template>
