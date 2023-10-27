<script setup>
import { RouterLink, RouterView } from "vue-router";

import SideNav from "./components/SideNav.vue";
</script>

<template>
  <div class="common-layout">
    <el-container>
      <el-header>Header</el-header>
      <el-container>
        <SideNav />
        <el-container class="main-wrap">
          <el-main>
            <RouterView />
            Main</el-main
          >
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<style scoped>
.main-wrap {
  height: calc(100vh - 60px);
}
</style>
