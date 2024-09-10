<script setup lang="ts">
import PageHeading from '@/components/PageHeading.vue'
import { ref } from 'vue'
import Editor from '@tinymce/tinymce-vue'
import page from '@/cms-pages/index.html?raw'
import css from '@/cms-pages/style.css?raw'

const apiKey = import.meta.env.VITE_API_KEY
const value = ref(page)
</script>
<template>
  <PageHeading>Use TinyMCE as a CMS</PageHeading>
  <div>
    <Editor
      :api-key="apiKey"
      :style="{
        height: 'calc(100vh - 100px)'
      }"
      :init="{
        plugins: 'lists link image table code help advcode autosave anchor',
        advcode_inline: true,
        toolbar:
          'styles restoredraft italic bold underline strikethrough | bullist numlist | link image table code anchor help',
        content_style: css,
        content_css: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',

        editable_root: false,

        editable_class: 'tiny-editable',
        style_formats: [
          { title: 'Paragraph', format: 'p' },
          { title: 'Heading 1', format: 'h1' },
          { title: 'Heading 2', format: 'h2' },
          { title: 'Large text', format: 'largetext' },
          { title: 'Button styles' },
          { title: 'Call-to-action', format: 'calltoaction' }
        ],
        formats: {
          h1: { block: 'h1', styles: { fontSize: '24px', color: '#335dff' } },
          h2: { block: 'h2', styles: { fontSize: '20px' } },
          largetext: { block: 'p', styles: { fontSize: '20px' } },
          calltoaction: {
            selector: 'a',
            styles: {
              backgroundColor: '#335dff',
              padding: '5px',
              color: '#ffffff',
              borderRadius: '4px',
              textDecoration: 'none',
              display: 'inline-block'
            }
          }
        }
      }"
      v-model="value"
    />
  </div>
</template>
