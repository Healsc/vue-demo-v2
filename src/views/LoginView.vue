<script setup>
import { storeToRefs } from "pinia";
import { login, resign, getInfo } from "../api/login";
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

const { userInfo, doubleCount } = storeToRefs(userStore);

const getUserInfo = async () => {
  const res = await userStore.GetInfo();
  console.log({ res });
};

const test = () => {
  console.log(userStore.doubleCount);
  console.log(useUserStore.userInfo);
  console.log({ doubleCount });
  console.log(doubleCount.value);
  console.log(userInfo.value.username);
  console.log(userInfo.value.userId);
};

const logout = async () => {
  const res = await userStore.Logout();
  console.log({ res });
};
</script>

<template>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button @click="loginHandle" type="primary">login</el-button>
    <el-button @click="resignHandle" type="success">resign</el-button>
    <el-button @click="getUserInfo" type="info">Info</el-button>
    <el-button @click="logout" type="warning">logout</el-button>
    <el-button @click="test" type="test">test</el-button>
    <el-button type="danger">Danger</el-button>
  </el-row>
</template>
