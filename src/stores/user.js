import { defineStore } from "pinia";
import { login, getInfo, logout } from "@/api/login";
import { getToken, setToken, removeToken } from "@/utils/auth";

export const useUserStore = defineStore({
  id: "user",
  state: () => {
    return {
      userInfo: {},
      token: getToken(),
      count: 1,
    };
  },
  getters: {
    doubleCount: (state) => state.count + 1,
  },
  actions: {
    // 登录
    async Login(params) {
      const res = await login(params);
      const { token = "" } = res;
      setToken(token);
      this.token = token;
      return res;
    },

    // 登出
    async Logout() {
      const res = await logout();
      removeToken();
      return res;
    },

    // 获取用户信息
    async GetInfo() {
      try {
        const res = await getInfo();
        if (res.statusCode === 401) {
          removeToken();
          this.userInfo = {};
        } else {
          this.userInfo = res;
        }
        return res;
      } catch (error) {
        this.userInfo = {};
        removeToken();
      }
    },
  },
});
