// pages/secondTestReport/secondtestreport.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grade: '哇哦!美出新高度',
    text2: '经过你每日坚持护肤',
    text3: '你的肌肤问题已经有所改善~',
    showModal: false,

  },
  toShowModal(e) {
    console.log(2)
    this.setData({
      showModal: true
    });
  },

  hideModal() {
    this.setData({
      showModal: false
    });
  },
  save() {
    console.log(1)
    this.toShowModal();
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