<template>
  <h1>{{ data?.title }}</h1>
  <div>
    <div>{{ data?.type }}</div>
    <div v-for="tag in data?.tags" :key="tag">{{ tag }}</div>
  </div>
  <div>Minecraft Version: {{ data?.minecraftVersion }}</div>
  <p>{{ data?.description }}</p>
  <youtube-player :youtubeLink="data?.youtubeLink" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";

import YoutubePlayer from "@/components/youtube-player.vue";

const route = useRoute();

const slug = computed(() => route.params.slug);

const { data } = await useFetch(`/api/blueprints/${slug.value}`);
</script>
