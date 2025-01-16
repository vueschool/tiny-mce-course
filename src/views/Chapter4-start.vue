<script setup lang="ts">
import PageHeading from '@/components/PageHeading.vue'
import { ref } from 'vue'
import Editor from '@tinymce/tinymce-vue'
import page from '@/cms-pages/index.html?raw'
import css from '@/cms-pages/style.css?raw'
import { useLocalStorage } from '@vueuse/core'
import UserPicker from '@/components/UserPicker.vue'

const user = ref({ username: 'danielkellyio', name: 'Daniel Kelly', avatar: 'https://avatars.githubusercontent.com/u/7635209?v=4' });

const apiKey = import.meta.env.VITE_API_KEY
const value = useLocalStorage('tinymce-autosave-my-cms-id', page)
</script>
<template>
  <PageHeading class="flex justify-between w-[90%]">
    <span>Use TinyMCE as a CMS</span>
    <UserPicker v-model="user"></UserPicker>
  </PageHeading>

  <div :key="user.username">
    <Editor :api-key="apiKey" id="my-cms-id" :style="{
      height: 'calc(100vh - 100px)',
      width: '90%'
    }" :init="{
      plugins: 'lists link image table help anchor autosave save advcode tinycomments',
      autosave_interval: '10s',
      autosave_prefix: 'tinymce-autosave-{id}',
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
      save_onsavecallback: () => {
        console.log('Saved!')
      },
      advcode_inline: true,
      toolbar:
        'save styles anchor italic bold underline strikethrough | bullist numlist | link image table help code showcomments addcomment',
      tinycomments_mode: 'embedded',
      tinycomments_author: user.username,
      tinycomments_author_name: user.name,
      tinycomments_author_avatar: user.avatar,
      content_style: css,
      content_css: 'https://cdn.jsdelivr.net/npm/bootstrap@5.3.0/dist/css/bootstrap.min.css',
      editable_root: false,
      editable_class: 'tiny-editable',
    }" v-model="value" />
  </div>
</template>
