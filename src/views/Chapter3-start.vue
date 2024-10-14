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
</script>
<template>
  <PageHeading>Look at Me Managing Leads (CRM)</PageHeading>
  <div class="flex flex-col gap-2 p-3 bg-gray-100 rounded">
    <EmailClientInput label="From" v-model="emailData.from" />
    <EmailClientInput label="To" v-model="emailData.to" />
    <EmailClientInput label="Subject" v-model="emailData.subject" />
    <Editor
      :api-key="apiKey"
      :init="{
        plugins: 'lists link image table code help casechange',
        toolbar:
          'blocks fontfamily fontsize | bold italic underline strikethrough forecolor | align bullist numlist outdent indent blockquote'
      }"
      v-model="value"
    />
    <div class="flex justify-end">
      <AppButton>Send Email</AppButton>
    </div>
  </div>
</template>
