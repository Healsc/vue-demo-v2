<script setup>
import { login } from "../api/login";
const loginHandle = async () => {
  const res = await login({ username: "lisi", password: "lisi123" }, true);
  console.log("res", res);
};
</script>

<template>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button @click="loginHandle" type="primary">Primary</el-button>
    <el-button type="success">Success</el-button>
    <el-button type="info">Info</el-button>
    <el-button type="warning">Warning</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
</template>
