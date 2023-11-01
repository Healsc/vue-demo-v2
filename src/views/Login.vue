<script setup>
import { useRouter } from "vue-router";
import { useUserStore } from "../stores/user";

const userStore = useUserStore();
const router = useRouter();

const loginHandle = async () => {
  const payload = { username: "sc", password: "sc123" };
  const res = await userStore.Login(payload);
  if (res.success) {
    router.replace("/");
  }
};
</script>

<template>
  <el-row class="mb-4">
    <el-button @click="loginHandle" type="primary">login</el-button>
  </el-row>
</template>
