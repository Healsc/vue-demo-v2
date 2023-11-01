<template>
  <div class="header-wrap">{{ userInfo.username || "" }}</div>
</template>

<script setup>
import { onMounted, computed } from "vue";
import { useRouter } from "vue-router";
import { ElMessage } from "element-plus";

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
</style>
