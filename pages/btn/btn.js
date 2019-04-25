// pages/btn/btn.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

  },
  changeColor() {
    wx.navigateTo({
      url: '/components/changeColor/changeColor',
    })
  },
  pingfen() {
    wx.navigateTo({
      url: '/components/pingfen/pingfen',
    })
  },
  secondTest() {
    wx.navigateTo({
      url: '/pages/secondTestReport/secondtestreport',
    })
  },
  secondReportShare(){
    wx.navigateTo({
      url: '/pages/secondReportShare/secondReportShare',
    })
  },
  nochange() {
    wx.navigateTo({
      url: '/pages/nochange/nochange',
    })
  },
  reportShare() {
    wx.navigateTo({
      url: '/pages/reportShare/reportshare',
    })
  },
  dati() {
    wx.navigateTo({
      url: '/pages/dati/dati',
    })
  },
  loading() {
    wx.navigateTo({
      url: '/components/laoding/loading',
    })
  },
  gundong() {
    wx.navigateTo({
      url: '/components/gundong/gundong',
    })
  },
  gundongchoujiang() {
    wx.navigateTo({
      url: '/components/gundongchoujiang/gundongchoujiang',
    })
  },
  login() {
    wx.navigateTo({
      url: '/pages/login/login',
    })
  },
  shouquan() {
    wx.navigateTo({
      url: '/pages/shouquan/shouquan',
    })
  },
  shiyongreport() {
    wx.navigateTo({
      url: '/pages/shiyongreport/shiyongreport',
    })
  },
  choujiangji() {
    wx.navigateTo({
      url: '/pages/choujiangji/choujiangji',
    })
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

  }
})