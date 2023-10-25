import { defineStore } from "pinia";
import { ref, computed } from "vue";
import { login, getInfo, logout } from "@/api/login";
import { setToken, removeToken } from "@/utils/auth";
export const useUserStore1 = defineStore("user-setup", () => {
  const userInfo = ref({});
  const token = ref("");
  const count = ref(1);

  const doubleCount = computed(() => count.value * 2);
  // 登录
  async function Login(params) {
    const res = await login(params);
    const { token = "" } = res;
    setToken(token);
    this.token = token;
    return res;
  }

  // 登出
  async function Logout() {
    const res = await logout();
    removeToken();
    return res;
  }

  // 获取用户信息
  async function GetInfo() {
    count.value = 123;

    try {
      const res = await getInfo();
      userInfo.value = res;
      return res;
    } catch (error) {
      this.userInfo = {};
      if (error.response.status === 401) {
        removeToken();
      }
    }
  }
  return {
    userInfo,
    token,
    doubleCount,
    Login,
    Logout,
    GetInfo,
    count,
  };
});
