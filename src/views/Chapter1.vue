<script setup lang="ts">
import { ref } from 'vue'
import Editor from '@tinymce/tinymce-vue'
const apiKey = import.meta.env.VITE_API_KEY
const value = ref('Hello <strong>world</strong>')
</script>
<template>
  <main id="sample">
    <Editor
      :api-key="apiKey"
      :init="{
        plugins: 'lists link image table code help casechange',
        toolbar:
          'casechange italic bold underline strikethrough | bullist numlist | link image table code help'
      }"
      v-model="value"
    />
  </main>
</template>
