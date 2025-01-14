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
</script>
<template>
  <PageHeading>One Freakin' Sweet Newsletter Editor</PageHeading>
  <div>
    <Editor :api-key="apiKey" :style="{
      height: 'calc(100vh - 100px)'
    }" :init="{
      plugins: 'lists link image table code help mergetags',
      editable_root: false,
      editable_class: 'tiny-editable',
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
  </div>
</template>
