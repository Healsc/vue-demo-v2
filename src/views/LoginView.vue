<script setup>
import { login, resign } from "../api/login";
import { useUserStore } from "../stores/user";
const userStore = useUserStore();

const loginHandle = async () => {
  // const res = await login({ username: "lisi", password: "lisi123" }, true);
  const payload = { username: "sc", password: "sc123" };
  const res = await userStore.Login(payload);
  console.log("res", res);
};
const resignHandle = async () => {
  const res = await resign({ username: "lisi", password: "lisi123" }, true);
  console.log("res", res);
};
</script>

<template>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button @click="loginHandle" type="primary">login</el-button>
    <el-button @click="resignHandle" type="success">resign</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
</template>
