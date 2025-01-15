<script setup lang="ts">
import PageHeading from '@/components/PageHeading.vue'
import EmailClientInput from '@/components/EmailClientInput.vue'
import { ref } from 'vue'
import Editor from '@tinymce/tinymce-vue'
const apiKey = import.meta.env.VITE_API_KEY

const emailData = ref({
  from: 'katie@onesweetcrm.com',
  to: 'mymilliondollarclient@hopeful.com',
  subject: "We think you'll love this thing we're selling",
  body: ''
})

const value = ref('')
</script>
<template>
  <PageHeading>Look at Me Managing Leads (CRM)</PageHeading>
  <div class="flex flex-col gap-2 p-3 bg-gray-100 rounded">
    <EmailClientInput label="From" v-model="emailData.from" />
    <EmailClientInput label="To" v-model="emailData.to" />
    <EmailClientInput label="Subject" v-model="emailData.subject" />
    <Editor :api-key="apiKey" :init="{
      menubar: false,
      statusbar: false,
      toolbar_groups: {
        formatgroup: {
          items: 'fontfamily fontsize | bold italic underline strikethrough forecolor | align bullist numlist outdent indent blockquote',
          icon: 'format',
          tooltip: 'Formatting'
        }
      },
      toolbar:
        'formatgroup link image table code help mergetags',
      toolbar_location: 'bottom',
      plugins: 'lists link image table code help casechange autoresize mergetags',
      min_height: 300,
      max_height: 500,
      autoresize_bottom_margin: 20,
      mergetags_list: [
        {
          title: 'Contact',
          menu: [
            {
              value: 'Contact.FirstName',
              title: 'First Name'
            },
            {
              value: 'Contact.LastName',
              title: 'Last Name'
            },
            {
              value: 'Contact.Company',
              title: 'Company'
            },
            {
              value: 'Contact.JobTitle',
              title: 'Job Title'
            },
          ]
        },
        {
          title: 'Account Service Rep',
          menu: [
            {
              value: 'Rep.FirstName',
              title: 'First Name'
            },
            {
              value: 'Rep.LastName',
              title: 'Last Name'
            },
            {
              value: 'Rep.Email',
              title: 'Email'
            }
          ]
        }
      ],
      link_list: [
        { title: 'Documentation', value: 'https://docs.mysite.com' },
        { title: 'Customer Support', value: 'https://support.mysite.com' },
      ],
    }" v-model="value" />
    <div class="flex justify-end">
      <AppButton>Send Email</AppButton>
    </div>
  </div>
</template>
