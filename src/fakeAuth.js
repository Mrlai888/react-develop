const fakeAuth = {
  isAuthenticated: false, // 登录状态

  /**
   * 登录方法
   * @param {Function} cb 回调函数
   */
  authenticate(cb) {
    this.isAuthenticated = true;
    setTimeout(cb, 1000); // fake async
  },

  // 退出登录方法
  signout(cb) {
    this.isAuthenticated = false;
    setTimeout(cb, 100);
  }
};

export default fakeAuth