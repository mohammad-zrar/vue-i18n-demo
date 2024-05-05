<template>
  <TheHeader />
  <HelloWorld />
  <div class="w-full sm:w-10/12 md:w-3/4 lg:w-7/12 mx-auto mb-6">
    <PageNavigator />
  </div>

  <div
    class="w-full sm:w-10/12 md:w-3/4 lg:w-7/12 mx-auto shadow-md border p-6"
  >
    <RouterView />
  </div>
</template>

<script setup lang="ts">
import HelloWorld from "./components/HelloWorld.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import PageNavigator from "./components/PageNavigator.vue";
</script>
