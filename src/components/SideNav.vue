<template>
  <el-aside width="auto">
    <div class="collapse-switch">
      <el-switch v-model="isCollapse" />
    </div>
    <el-menu
      default-active="0-0"
      class="el-menu-vertical-demo"
      :collapse="!isCollapse"
      @open="handleOpen"
      @close="handleClose"
      background-color="#f2f2f2"
      router
    >
      <template v-for="navItem in sideNavList" :key="navItem.key">
        <template v-if="navItem.children && navItem.children.length">
          <el-sub-menu :index="navItem.path">
            <template #title>
              <span>{{ navItem.label }}</span>
            </template>
            <template v-if="navItem.children">
              <el-menu-item
                v-for="cItem in navItem.children"
                :key="cItem.key"
                :index="cItem.path"
              >
                {{ cItem.label }}
              </el-menu-item>
            </template>
          </el-sub-menu>
        </template>
        <el-menu-item :index="navItem.path" v-else>
          <span>{{ navItem.label }}</span>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script setup>
import { ref } from "vue";

import { sideNavList } from "./side-nav";

const isCollapse = ref(true);

const handleOpen = (key, keyPath) => {
  console.log(key, keyPath);
};

const handleClose = (key, keyPath) => {
  console.log(key, keyPath);
};
</script>

<style>
.collapse-switch {
  text-align: center;
}

.el-aside {
  height: calc(100vh - 60px);
  overflow: hidden;
}

.el-menu-vertical-demo {
  height: calc(100% - 32px);
  overflow-y: auto;
}
</style>
