<template>
  <div class="w-full flex justify-center items-center bg-slate-200 h-14">
    <select
      v-model="currentLocale"
      @change="changeLang"
      class="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6 h-8"
    >
      <option value="en">English</option>
      <option value="ar">Arabic</option>
      <option value="kr">Kurdish</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { useLocaleStore } from "../../store/locale/index"; // adjust the path as necessary
import { useRouter, useRoute } from "vue-router";
import { useI18n } from "vue-i18n";
import { storeToRefs } from "pinia";

// COMPOSABLES
const route = useRoute();
const router = useRouter();
const localeStore = useLocaleStore();

// REFS
const { currentLocale } = storeToRefs(localeStore);
const { locale } = useI18n();

// ACTIONS
const changeLang = () => {
  localeStore.setLocale(currentLocale.value);
  locale.value = localeStore.currentLocale;
  router.replace({
    name: route.name as string,
    params: { lang: currentLocale.value },
  });
};
</script>
