var constant = require('../../base/constant.js')
var app = getApp()
// modules/party-gift-randomizer/pages/index/index.js
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


  onCreateButtonClicked: function () {
    console.log(constant.tt)
    wx.request({
      url: constant.gateway.create,
      method: 'POST',
      data: {
        openId: "a", 
        name: "123", 
        avatarUrl: "http://img5.duitang.com/uploads/item/201406/29/20140629180728_ktRJ2.jpeg"
      },
      success(res) {
        app.globalData.party = res.data
        wx.redirectTo({
          url: '../share/share',
        })
      }
    })
  }
})