<script setup lang="ts">
import { ref } from "vue"

const users = [
    { username: "mrinasugosh", name: "Mrinalini Sugosh", avatar: "https://avatars.githubusercontent.com/u/25342475?v=4" },
    { username: "cocopo-codes", name: "Coco Poley", avatar: "https://avatars.githubusercontent.com/u/48961373?v=4" },
    { username: "danielkellyio", name: "Daniel Kelly", avatar: "https://avatars.githubusercontent.com/u/7635209?v=4" }
]

const model = defineModel<typeof users[0]>({
    required: true
})
const isOpen = ref(false);
</script>
<template>
    <div class="relative inline-block text-left text-sm">
        <div @click="isOpen = !isOpen" class="flex items-center cursor-pointer p-2 border rounded-md">
            <img :src="model.avatar" :alt="model.username" class="w-8 h-8 rounded-full mr-2">
            <span>{{ model.name }}</span>
            <svg class="w-4 h-4 ml-2" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
        </div>
        <div v-if="isOpen"
            class="absolute mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-50">
            <div class="py-1">
                <div @click="model = user; isOpen = false" v-for="user in users" :key="user.username"
                    class="flex items-center p-2 cursor-pointer hover:bg-gray-100">
                    <img :src="user.avatar" :alt="user.username" class="w-8 h-8 rounded-full mr-2">
                    <span>{{ user.name }}</span>
                </div>
            </div>
        </div>
    </div>
</template>