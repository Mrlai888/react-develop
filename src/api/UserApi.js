/** @format */

import Axios from "axios"

/**
 * 登录接口
 * @param {object} data
 */
export const SignUp = data => {
  return Axios.post("/sign-up", data)
}
/**
 * 注册接口
 * @param {object} data
 */
export const SignIn = data => {
  return Axios.post("/sign-in", data)
}

/**
 * 查询用户信息
 */
export const findUser = (params) => {
  return Axios.get("/users",{
    params
  })
}
