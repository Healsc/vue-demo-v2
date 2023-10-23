import HttpRequest from "@/utils/request";

// 登录
export function login(params = {}) {
  return HttpRequest("/login", "POST", params);
}

// 注册
export function resign(params = {}) {
  return HttpRequest("/resign", "POST", params);
}

// 登出
export function logout(params = {}) {
  return HttpRequest("/logout", "POST", params);
}

// 获取用户信息
export function getInfo(params = {}) {
  return HttpRequest("/user", "GET", params);
}

// 验证码
export function getCodeImg(params = {}) {
  return HttpRequest("/captcha", "GET", params, false);
}
