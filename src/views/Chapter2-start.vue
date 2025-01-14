<script setup lang="ts">
import PageHeading from '@/components/PageHeading.vue'
import { ref } from 'vue'
import Editor from '@tinymce/tinymce-vue'
// email template from colorlib.com
// https://colorlib.com/wp/responsive-html-email-templates/
import emailTemplate from '@/emails/NewsletterTemplate/index.html?raw'
import emailTemplateCSS from '@/emails/NewsletterTemplate/style.css?raw'
import articleFragment from '@/emails/NewsletterTemplate/fragments/article.html?raw'

const apiKey = import.meta.env.VITE_API_KEY
const value = ref(emailTemplate)

const editorComp = ref()
const output = ref();

async function save() {
  const editor = editorComp.value.getEditor();
  const result = await editor.plugins.inlinecss.getContent()
  output.value = result;
}
</script>
<template>
  <PageHeading>One Freakin' Sweet Newsletter Editor</PageHeading>
  <button @click="save">Save</button>
  <div>
    <Editor ref="editorComp" :api-key="apiKey" :style="{
      height: 'calc(100vh - 100px)'
    }" :init="{
      plugins: 'lists link image table code help mergetags inlinecss',
      editable_root: false,
      editable_class: 'tiny-editable',
      link_list: [
        { title: 'Features', value: 'https://www.tiny.cloud/tinymce/features/' },
        { title: 'Docs', value: 'https://www.tiny.cloud/pricing/' },
        { title: 'Pricing', value: 'https://www.tiny.cloud/docs/tinymce/latest/' }
      ],
      visual: false,
      link_target_list: false,
      object_resizing: false,
      content_style: emailTemplateCSS,
      mergetags_list: [
        {
          title: 'Contact',
          menu: [
            {
              value: 'Contact.FirstName',
              title: 'Contact First Name'
            },
            {
              value: 'Contact.LastName',
              title: 'Contact Last Name'
            },
          ]
        },
        {
          title: 'Downloads',
          menu: [
            {
              value: 'Downloads.WhitePaper',
              title: 'Whitepaper Download'
            },
            {
              value: 'Downloads.Ebook',
              title: 'Ebook Download'
            },
          ]
        }
      ],
      toolbar:
        'mergetags italic bold underline strikethrough | bullist numlist | link image table code help'
    }" v-model="value" />

    {{ output }}
  </div>
</template>
