<script setup>
import { computed } from "vue";
import { RouterView, useRoute } from "vue-router";

import SideNav from "./components/side-nav/SideNav.vue";
import HeaderView from "./components/header/HeaderView.vue";

const showSideNav = computed(() => {
  const route = useRoute();
  return Boolean(route.meta.showSideNav);
});
</script>

<template>
  <div class="common-layout" v-if="showSideNav">
    <el-container>
      <el-header><HeaderView /></el-header>
      <el-container>
        <SideNav />
        <el-container class="main-wrap">
          <el-main>
            <RouterView />
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
  <RouterView v-else />
</template>

<style scoped>
.main-wrap {
  height: calc(100vh - 60px);
}
</style>
