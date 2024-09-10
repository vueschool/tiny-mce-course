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

const mergetags_list = [
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
      {
        value: 'Contact.Email',
        title: 'Contact Email'
      }
    ]
  },
  {
    title: 'Sender',
    menu: [
      {
        value: 'Sender.FirstName',
        title: 'Sender First Name'
      },
      {
        value: 'Sender.LastName',
        title: 'Sender Last name'
      },
      {
        value: 'Sender.Email',
        title: 'Sender Email'
      }
    ]
  },
  {
    title: 'Subscription',
    menu: [
      {
        value: 'Subscription.UnsubscribeLink',
        title: 'Unsubscribe Link'
      },
      {
        value: 'Subscription.Preferences',
        title: 'Subscription Preferences'
      }
    ]
  }
]

const link_list = [
  { title: 'Features', value: 'https://www.tiny.cloud/tinymce/features/' },
  { title: 'Docs', value: 'https://www.tiny.cloud/pricing/' },
  { title: 'Pricing', value: 'https://www.tiny.cloud/docs/tinymce/latest/' }
]

const advtemplate_templates = [
  {
    title: 'Article',
    content: articleFragment
  }
]
</script>
<template>
  <PageHeading>One Freakin' Sweet Newsletter Editor</PageHeading>
  <div>
    <Editor
      :api-key="apiKey"
      :style="{
        height: 'calc(100vh - 100px)'
      }"
      :init="{
        plugins: 'lists link image table code help casechange mergetags advtemplate_templates',
        editable_root: false,
        editable_class: 'tiny-editable',
        visual: false,
        link_target_list: false,
        object_resizing: false,
        toolbar:
          'mergetags advtemplate_templates | casechange italic bold underline strikethrough | bullist numlist | link image table code help',
        content_style: emailTemplateCSS,
        mergetags_list,
        link_list,
        advtemplate_templates
      }"
      v-model="value"
    />
  </div>
</template>
