// pages/mojing/mojing.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    showModal: false,
    showModalSecond:false,
    loading:false,
  },

  btnclick(){
    this.toShowModal();
  },
  toShowModal(e) {
    this.setData({
      showModal: true
    });
  },
  showLoading(e){
    this.setData({
      loading: true
    });
  },

  hideModal() {
    this.setData({
      showModal: false,
      showModalSecond: false,
      loading: false
    });
  },
  hideLoading(e) {
    this.setData({
      showModal: false
    });
  },
  toShowModalSecond(e) {
    this.setData({
      showModalSecond: true
    });
  },

  hideModalSecond() {
    this.setData({
      showModalSecond: false
    });
  },
  iKnow(){
    this.hideModal();
    this.toShowModalSecond();
 
  },
  iKnowSecond(){
    this.hideModal();
    this.hideModalSecond();   
    // this.showLoading();
    wx.navigateTo({
      url: '/pages/testreport/testreport',
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