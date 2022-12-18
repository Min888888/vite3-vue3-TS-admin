<script setup lang="ts">
import LoadingVue from '@/layout/Loading.vue';
import { useSystem } from '@/store/system'
const system = useSystem();

</script>

<template>
    <!-- 外层路由 -->
    <RouterView></RouterView>
    <!-- 全屏加载 -->
    <LoadingVue v-show="system.isLoading"></LoadingVue>
</template>

<style scoped>

</style>
