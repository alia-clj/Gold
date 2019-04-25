// pages/testreport/testreport.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    leftArrow: '../image/magicmirror/left-icon.png',
    rightArrow: '../image/magicmirror/right-icon.png',
    userName: '我名字你怜过来到',
    userLevel: 'LV.1.0',
    centerItem: [{
        imgUrl: '../image/center/1.png',
        text: '积分查询'
      },
      {
        imgUrl: '../image/center/2.png',
        text: '优惠券'
      },
      {
        imgUrl: '../image/center/3.png',
        text: '申请进度'
      },
    ],
    centerCurrent: 0,
  },

  gradeShop() {
    wx.navigateTo({
      url: '/pages/myGrade/myGrade',
    })
  },
  changeAddress() {
    wx.navigateTo({
      url: '/pages/changeAddress/changeAddress',
    })
  },
  goAddress() {
    wx.navigateTo({
      url: '/pages/address/address',
    })
  },
  goYouhuiquan() {
    wx.navigateTo({
      url: '/pages/youhuiquan/youhuiquan',
    })
  },
  goJindu() {
    wx.navigateTo({
      url: '/pages/shiyongjindu/shiyongjindu',
    })
  },
  magicmirrorReport() {
    wx.navigateTo({
      url: '/pages/noTest/notest',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})