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
  <PageHeading class="flex justify-between w-[90%]">
    <span>Use TinyMCE as a CMS</span>
  </PageHeading>

  <div>
    <Editor :api-key="apiKey" :style="{
      height: 'calc(100vh - 100px)',
      width: '90%'
    }" :init="{
      plugins: 'lists link image table help anchor',
      style_formats: [
        { title: 'Paragraph', block: 'p' },
        { title: 'Heading 1', block: 'h1' },
        { title: 'Heading 2', block: 'h2' },
        { title: 'Button', format: 'button' }
      ],
      formats: {
        button: {
          inline: 'a',
          classes: 'btn',
          styles: {
            backgroundColor: '#335dff',
            padding: '5px',
            color: '#ffffff',
            borderRadius: '4px',
            textDecoration: 'none',
            display: 'inline-block'
          }
        }
      },
      toolbar:
        'styles anchor italic bold underline strikethrough | bullist numlist | link image table code help',
      content_style: css,
      content_css: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
      editable_root: false,
      editable_class: 'tiny-editable',
    }" v-model="value" />
  </div>
</template>
