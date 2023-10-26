<script setup>
import { storeToRefs } from "pinia";
import { login, resign, getInfo } from "../api/login";
import { useUserStore } from "../stores/user";
import { useUserStore1 } from "../stores/user-setup";
import { useCounterStore } from "../stores/counter";

import { onMounted } from "vue";

const userStore = useUserStore();
const userStore1 = useUserStore1();
const useCountStore = useCounterStore();

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

// const { userInfo, doubleCount } = storeToRefs(userStore);

const getUserInfo = async () => {
  try {
    const res = await userStore.GetInfo();
    // await userStore1.GetInfo();
    console.log({ res });
  } catch (err) {
    console.log({ err });
  }
};

const test = () => {
  // const { userInfo } = storeToRefs(userStore);
  // console.log(userStore.doubleCount);
  // console.log(useUserStore.userInfo);
  // console.log({ doubleCount });
  // console.log(doubleCount.value);
  // console.log(userInfo.value.username);
  // console.log(userInfo.value.userId);
  const { count, doubleCount, userInfo } = userStore1;
  console.log({ count, doubleCount, userInfo });
  console.log(userInfo.value);
  console.log(userInfo.userId);
};

const logout = async () => {
  const res = await userStore.Logout();
  console.log({ res });
};
const testv1 = () => {
  const { count, doubleCount } = useCountStore;
  console.log({ count, doubleCount });
};
const testv2 = () => {
  useCountStore.increment();
};

onMounted(() => {
  userStore.GetInfo();
});
</script>

<template>
  <el-row class="mb-4">
    <el-button>Default</el-button>
    <el-button @click="loginHandle" type="primary">login</el-button>
    <el-button @click="resignHandle" type="success">resign</el-button>
    <el-button @click="getUserInfo" type="info">Info</el-button>
    <el-button @click="logout" type="warning">logout</el-button>
    <el-button @click="test" type="warning">test</el-button>
    <el-button @click="testv1" type="danger">count test</el-button>
    <el-button @click="testv2" type="danger">count test addd</el-button>
  </el-row>
</template>
