<template>
  <form class="flex flex-col max-w-sm mx-auto mt-24 gap-4" @submit.prevent>
    <h1 class="text-center text-blue-900 text-3xl font-bold">
      Minecraft Library <br />
      <span class="text-slate-800">Authenticate</span>
    </h1>

    <input
      v-model="email"
      type="email"
      class="border border-gray-400 p-2 rounded"
      placeholder="E-mail"
    />
    <input
      v-model="password"
      type="password"
      class="border p-2 rounded border-gray-400"
      placeholder="Password"
    />
    <button
      type="submit"
      class="bg-blue-600 rounded p-2 font-medium text-white uppercase"
      @click.prevent="handleUserAuthentication"
    >
      {{ authButtonText }}
    </button>
    <button class="text-center text-blue-900 underline underline-offset-4" @click="toggleAuth">
      {{ authTypeText }}
    </button>
  </form>
</template>
<script setup lang="ts">
import { computed, ref } from "vue"
import useFirebaseAuth from "@/composables/useFirebaseAuth"

const email = ref("")
const password = ref("")

const { user, registerUser, loginUser } = useFirebaseAuth()
async function handleUserAuthentication() {
  if (isLogin.value) {
    await loginUser(email.value, password.value)
    return
  }

  await registerUser(email.value, password.value)
}

const isLogin = ref<boolean>(true)

const authTypeText = computed(() =>
  isLogin.value
    ? "Don't have an account yet? Register instead."
    : "Already have an account? Login instead."
)

const authButtonText = computed(() => (isLogin.value ? "Login" : "Register"))

function toggleAuth() {
  isLogin.value = !isLogin.value
}
</script>
