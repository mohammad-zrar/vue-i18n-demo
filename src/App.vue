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
import { onMounted, watch } from "vue";
import { storeToRefs } from "pinia";
import { RouteRecordName, useRoute, useRouter } from "vue-router";
import { useLocaleStore } from "./store/locale";
import { useI18n } from "vue-i18n";
import HelloWorld from "./components/HelloWorld.vue";
import TheHeader from "./components/layout/TheHeader.vue";
import PageNavigator from "./components/PageNavigator.vue";

const localeStore = useLocaleStore();
const { currentLocale } = storeToRefs(localeStore);
const { locale } = useI18n();
const route = useRoute();
const router = useRouter();

// ROUTE WATCHER
watch(route, (newPath) => {
  if (newPath.params.lang !== currentLocale.value) {
    try {
      localeStore.setLocale(newPath.params.lang as string);
      locale.value = localeStore.currentLocale;
    } catch (err) {
      console.error(err);
      const params = route.params;
      params.lang = localeStore.currentLocale;
      router.push({
        name: "pageOne",
        params: params,
      });
    }
  }
});
</script>
