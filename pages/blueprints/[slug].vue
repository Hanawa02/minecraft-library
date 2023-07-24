<template>Blueprint Page: {{ slug }}</template>

<script setup lang="ts">
import { computed } from "vue";

const route = useRoute();
const slug = computed(() => route.params.slug);
</script>
