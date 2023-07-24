<template>
  <h1 class="text-2xl font-bold mb-4">{{ data?.title }}</h1>
  <div class="flex gap-1 mb-2">
    <div class="bg-green-100 rounded-full px-2">{{ data?.type }}</div>
    <div v-for="tag in data?.tags" :key="tag" class="bg-blue-100 rounded-full px-2">{{ tag }}</div>
  </div>
  <div><strong>Minecraft Version:</strong> {{ data?.minecraftVersion }}</div>
  <p class="my-4">{{ data?.description }}</p>
  <youtube-player v-if="data?.youtubeLink" :youtubeLink="data?.youtubeLink" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import YoutubePlayer from "@/components/youtube-player.vue";

const route = useRoute();

const slug = computed(() => route.params.slug);

const { data } = await useFetch(`/api/blueprints/${slug.value}`);
</script>
