<template>
  <div class="text-center flex justify-center">
    <div class="rounded-lg flex items-center justify-center">
      <router-link
        class="cursor-pointer p-2 rounded-lg"
        :to="`/${currentLocale}/page-one`"
        >Page One</router-link
      >
      <span class="border border-gray-400 h-8"></span>
      <router-link
        class="cursor-pointer p-2 items-center justify-center rounded-lg"
        :to="`/${currentLocale}/page-two`"
        >Page Two</router-link
      >
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useLocaleStore } from "../store/locale";
import { storeToRefs } from "pinia";
const localeStore = useLocaleStore();
const { currentLocale } = storeToRefs(localeStore);
</script>

<style scoped>
.router-link-active {
  text-decoration: underline;
}
</style>
