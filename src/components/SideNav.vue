<template>
  <el-aside width="auto">
    <div class="collapse-switch">
      <el-icon @click="handleColleapse" v-if="isCollapse"><Fold /></el-icon>
      <el-icon @click="handleColleapse" v-else><Expand /></el-icon>
    </div>
    <el-menu
      :default-active="active"
      class="el-menu-vertical-demo"
      :collapse="!isCollapse"
      background-color="#f2f2f2"
      router
    >
      <template v-for="navItem in sideNavList" :key="navItem.key">
        <template v-if="navItem.children && navItem.children.length">
          <el-sub-menu :index="navItem.path">
            <template #title>
              <el-icon><kvIcon :name="navItem.icon" /></el-icon>
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
          <el-icon><kvIcon :name="navItem.icon || 'Grid'" /></el-icon>
          <template #title>{{ navItem.label }}</template>
        </el-menu-item>
      </template>
    </el-menu>
  </el-aside>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { Fold, Expand } from "@element-plus/icons-vue";

import { sideNavList } from "./side-nav-config";

const isCollapse = ref(true);
const active = ref("/");

const handleColleapse = () => {
  isCollapse.value = !isCollapse.value;
};

onMounted(() => {
  const { pathname } = window.location;
  active.value = pathname;
});
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
