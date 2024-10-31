<script setup lang="ts">
import PageHeading from '@/components/PageHeading.vue'
import { ref } from 'vue'
import Editor from '@tinymce/tinymce-vue'
import page from '@/cms-pages/index.html?raw'
import css from '@/cms-pages/style.css?raw'
import { useLocalStorage } from "@vueuse/core"
import UserPicker from '@/components/UserPicker.vue'

const apiKey = import.meta.env.VITE_API_KEY
const value = useLocalStorage('tinymce-autosave-my-cms-id', page)

const user = ref({ username: 'danielkellyio', name: 'Daniel Kelly', avatar: 'https://avatars.githubusercontent.com/u/7635209?v=4' });
</script>
<template>
  <PageHeading class="flex justify-between w-[90%]">
    <span>
      Use TinyMCE as a CMS
    </span>
    <UserPicker v-model="user" />
  </PageHeading>
  <div :key="user.username">
    <Editor :api-key="apiKey" :style="{
      height: 'calc(100vh - 100px)',
      width: '90%'
    }" id="my-cms-id" :init="{
      plugins: 'advcode autosave lists link image table help anchor tinycomments',
      advcode_inline: true,
      toolbar:
        'restoredraft styles italic bold underline strikethrough | bullist numlist | link image table code anchor help addcomment showcomments',
      content_style: css,
      content_css: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',

      editable_root: false,
      autosave_interval: '10s',
      autosave_prefix: 'tinymce-autosave-{id}',
      tinycomments_author: user.username,
      tinycomments_author_name: user.name,
      tinycomments_author_avatar: user.avatar,
      tinycomments_mode: 'embedded',

      editable_class: 'tiny-editable',
      style_formats: [
        { title: 'Paragraph', block: 'p' },
        { title: 'Heading 1', block: 'h1' },
        { title: 'Heading 2', block: 'h6' },
        { title: 'Button', format: 'button' },
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
      }
    }" v-model="value" />
  </div>
</template>
