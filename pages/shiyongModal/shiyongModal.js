// pages/modal/modal.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    num: 8,
    grade: '80',
    showModal: false,
    shenqingshiyongzhuang: false,
    lessTirty: false,
    firstDati: false,
    moreEighty:false,
    afterShenqing:false,
    success: false,
    shareSuccess: false,
    shareSave: false,
    allFail: false,
    shareFail: false,
    complete: false,



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
  closeModal() {
    console.log('modal')
    this.hideModal();

  },
  shenqingshiyongzhuang() {
    this.toShowModal();
    this.setData({
      shenqingshiyongzhuang: true
    });
  },
  lessTirty() {
    this.toShowModal();
    this.setData({
      lessTirty: true
    });
  },
  firstDati() {
    this.toShowModal();
    this.setData({
      firstDati: true
    });
  },
  moreEighty() {
    this.toShowModal();
    this.setData({
      moreEighty: true
    });
  },
  afterShenqing() {
    this.toShowModal();
    this.setData({
      afterShenqing: true
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
  complete() {
    this.toShowModal();
    this.setData({
      complete: true
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