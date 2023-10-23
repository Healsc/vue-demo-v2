import { defineStore } from "pinia";
import { login, getInfo, logout } from "@/api/login";
import { getToken, setToken, removeToken } from "@/utils/auth";

export const useUserStore = defineStore({
  id: "user",
  state: () => {
    return {
      userInfo: {},
      token: getToken(),
    };
  },
  getters: {},
  actions: {
    // 登录
    async Login(params) {
      const res = await login(params);
      const { data } = res;
      const { token = "" } = data;
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
        this.userInfo = res.data;
        return res;
      } catch (error) {
        if (error.response.status === 401) {
          removeToken();
        }
      }
    },
  },
});
