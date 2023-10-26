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
        <el-container>
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
.el-aside {
  /* height: 100%; */
}
</style>
