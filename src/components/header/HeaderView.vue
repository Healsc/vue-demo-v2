<template>
  <el-dropdown trigger="click" class="header-wrap">
    <span class="el-dropdown-link">
      {{ userInfo.username || "" }}
      <el-icon class="el-icon--right">
        <arrow-down />
      </el-icon>
    </span>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item @click="handleLogout">logout</el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
  <!-- <div class="header-wrap">{{ userInfo.username || "" }}</div> -->
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";
import { ArrowDown } from "@element-plus/icons-vue";

import { useUserStore } from "../../stores/user";
const router = useRouter();
const userStore = useUserStore();

const userInfo = computed(() => {
  return userStore.userInfo;
});

const checkUserInfo = async () => {
  try {
    const res = await userStore.GetInfo();
    if (res.statusCode === 401) {
      ElMessage.info(res.error || "失效");
      router.replace("/login");
    }
  } catch (err) {
    ElMessage.info(err.message || "获取用户信息失败");
    router.replace("/login");
  }
};

const handleLogout = async () => {
  try {
    const res = await userStore.Logout();
    if (res.success) {
      router.replace("/login");
      ElMessage.success({ message: "退出成功", duration: 1000 });
    }
  } catch (err) {
    ElMessage.error(err.message || "退出失败");
  }
};

onMounted(() => {
  checkUserInfo();
});
</script>

<style scoped>
.header-wrap {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}

.example-showcase .el-dropdown-link {
  cursor: pointer;
  color: var(--el-color-primary);
  display: flex;
  align-items: center;
}
</style>
