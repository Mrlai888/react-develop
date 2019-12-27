/** @format */

import Axios from "axios"

export const SignUp = data => {
  return Axios.post("/sign-up", data)
}

export const SignIn = data => {
  return Axios.post("/sign-in", data)
}
