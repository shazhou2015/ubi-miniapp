// pages/create/create.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    cure: ['不可自救', '可以自救', '仅第一夜可以自救'],
    cureMode: 0,
    poison: ['不可与解药同一夜使用', '可与解药同一夜使用'],
    poisonMode: 0,
    guard: ['同时被守被救算死亡', '同时被守被救不算死亡'],
    guardMode: 0,
    thief: ['底牌有狼必须选狼', '可以随便挑选底牌身份'],
    thiefMode: 0,
    angel: ['可以不连情侣', '必须连接情侣'],
    angelMode: 0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

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

  bindCurePickerChange(e) {
    this.setData({
      cureMode: e.detail.value
    })
  },
  bindPosionPickerChange(e) {
    this.setData({
      poisonMode: e.detail.value
    })
  },
  bindGuardPickerChange(e) {
    this.setData({
      guardMode: e.detail.value
    })
  },
  bindThiefPickerChange(e) {
    this.setData({
      thiefMode: e.detail.value
    })
  },
  bindAngelPickerChange(e) {
    this.setData({
      angelMode: e.detail.value
    })
  },

  formSubmit(e) {
    console.log('form发生了submit事件，携带数据为：', e.detail.value)

    wx.showModal({
      title: '弹窗标题',
      content: '弹窗内容，告知当前状态、信息和解决方法，描述文字尽量控制在三行内',
      confirmText: '确定',
      cancelText: '取消',
      success: (res) => {
        if (res.confirm == true) {
          wx.request({
            url: 'http://localhost:9000/create', //仅为示例，并非真实的接口地址
            method: 'POST',
            data: {
              numPlayers: 10,
              numWolves: 2,
              hasHunter: true,
              hasDumbAss: true,
              hasWitch: true,
              hasProphet: true
            },
            success(res) {
              console.log(res.data)
            }
          })
        }
      }
    })

  }

})