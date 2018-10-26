//app.js
var accessToken = undefined
App({
  onLaunch: function () {

  },
  globalData: {
    userInfo: null
  },
  getCurrentPageRoute: () => {
    var pages = getCurrentPages()    //获取加载的页面
    var currentPage = pages[pages.length - 1]    //获取当前页面的对象
    return currentPage.route
  }
})