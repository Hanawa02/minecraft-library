<template>
  <iframe
    v-if="videoId"
    :src="videoLink"
    :width="width"
    :height="height"
    :allow="allow"
    allowfullscreen
  />
</template>

<script setup lang="ts">
import { computed } from "vue"

interface IProps {
  width?: number
  height?: number
  youtubeLink: string
}

const props = withDefaults(defineProps<IProps>(), {
  width: 1227,
  height: 690
})

const videoId = computed(() => {
  const url = new URL(props.youtubeLink)
  return url.searchParams.get("v")
})

const videoLink = computed(() => `https://www.youtube.com/embed/${videoId.value}`)

const allow = [
  "accelerometer",
  "autoplay",
  "clipboard-write",
  "encrypted-media",
  "gyroscope",
  "picture-in-picture",
  "web-share"
].join("; ")
</script>
