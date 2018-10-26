var constant = require('../../base/constant.js')
var app = getApp()
// modules/party-gift-randomizer/pages/index/index.js

function getUserInfo(userInfoRes, callback) {
  wx.login({
    success: loginInfoRes => {
      // 发送 res.code 到后台换取 openId, sessionKey
      wx.request({
        url: constant.gateway.sessionInfo + '?code=' + loginInfoRes.code,
        method: "GET",
        success: sessionInfoRes => {
          // 返回 openid
          let userInfo = JSON.parse(userInfoRes.detail.rawData);
          userInfo.openid = sessionInfoRes.data.openid;
          callback(userInfo)
        }
      })
    }
  })
}

Page({

  /**
   * 页面的初始数据
   */
  data: {

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    const scene = decodeURIComponent(options.scene)
    wx.login({
      success: res => {
        // 发送 res.code 到后台换取 openId, sessionKey, unionId
        // console.log(res.code)
      }
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },


  onCreateWithUserInfo: userInfoRes => {
    getUserInfo(userInfoRes, (userInfo) => {
      wx.request({
        url: constant.gateway.create,
        method: 'POST',
        data: userInfo,
        success(res) {
          console.log(res.data)
          app.globalData.party = res.data
          wx.redirectTo({
            url: '../share/share',
          })
        }
      })
    })

    
  },

  onJoinWithUserInfo: userInfoRes => {
    // 返回用户信息
    getUserInfo(userInfoRes, (userInfo) => {
      wx.request({
        url: constant.gateway.join,
        method: "POST",
        data: { id: 2, ...userInfo }, //id should reflect real id by scan qrcode
        success: res => {
          app.globalData.party = res.data
          console.log(res)
        }
      })
    })
  }
})