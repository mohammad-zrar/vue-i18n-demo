<template>
  <div class="text-center flex justify-center">
    <div class="rounded-lg flex items-center justify-center">
      <router-link
        class="cursor-pointer p-2 rounded-lg"
        :to="{ name: 'page one' }"
        >Page One</router-link
      >
      <span class="border border-gray-400 h-8"></span>
      <router-link
        class="cursor-pointer p-2 items-center justify-center rounded-lg"
        :to="{ name: 'page two' }"
        >Page Two</router-link
      >
    </div>
  </div>
</template>

<style scoped>
.router-link-active {
  text-decoration: underline;
}
</style>
