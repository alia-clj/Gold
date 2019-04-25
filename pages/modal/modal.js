// pages/modal/modal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num:8,
    jifen:'120',
    showModal:false,
    zhongduandati:false,
    yidaguoti:false,
    datifail:false,
    success: false,
    shareSuccess:false,
    shareSave: false,
    allFail: false,
    shareFail: false,
    share: false,



  },
  toShowModal(e) {
    this.setData({
      showModal: true
    });
  },

  hideModal() {
    this.setData({
      showModal: false,
      zhongduandati: false,
      yidaguoti: false,
      datifail: false,
      success: false,
      shareSuccess: false,
      shareSave: false,
      allFail: false,
      shareFail: false,
      share: false,
    });
  },
  closeModal(){
    console.log('modal')
    this.hideModal();
    wx.navigateTo({

      url: '/pages/datiDetail/datiDetail',

    })
  },
  opemZhongDuan(){
    this.toShowModal();
    this.setData({
      zhongduandati: true
    });
  },
  yiDaTi(){
    this.toShowModal();
    this.setData({
      yidaguoti: true
    });
  },
  yiDaTiFail() {
    this.toShowModal();
    this.setData({
      datifail: true
    });
  },
  success() {
    this.toShowModal();
    this.setData({
      success: true
    });
  },
  shareSuccess() {
    this.toShowModal();
    this.setData({
      shareSuccess: true
    });
  },
  shareSave() {
    this.toShowModal();
    this.setData({
      shareSave: true
    });
  },
  allFail() {
    this.toShowModal();
    this.setData({
      allFail: true
    });
  },
  shareFail() {
    this.toShowModal();
    this.setData({
      shareFail: true
    });
  },
  share() {
    this.toShowModal();
    this.setData({
      share: true
    });
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