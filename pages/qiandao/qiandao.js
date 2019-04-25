// pages/dati/dati.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    day:2,
    showModal:false,
    shoucijinru:false,
    mianmojing: false,
    jinghuayao: false,
    shuiruguai: false,
    yanjingmo: false,
    yanjingshuang:false,
    jiemianjing:false,
    hecheng:false,
    choujiangjifen: false,
    choujiangyouhuiquan:false,
  },

  toShowModal(e) {
    this.setData({
      showModal: true
    });
  },

  hideModal() {
    this.setData({
      showModal: false,
      shoucijinru: false,  
      mianmojing: false,
      jinghuayao: false,
      shuiruguai: false,
      yanjingmo: false,
      yanjingshuang:false,
      jiemianjing: false,
      hecheng: false,
      choujiangjifen:false,
      choujiangyouhuiquan: false,
    });
  },
  closeModal() {
    this.hideModal();
  },
  shoucijinru() {
    this.toShowModal();
    this.setData({
      shoucijinru: true
    });
  },
  mianmojing() {
    this.toShowModal();
    this.setData({
      mianmojing: true
    });
  },
  jinghuayao() {
    this.toShowModal();
    this.setData({
      jinghuayao: true
    });
  },
  shuiruguai() {
    this.toShowModal();
    this.setData({
      shuiruguai: true
    });
  },
  yanjingmo() {
    this.toShowModal();
    this.setData({
      yanjingmo: true
    });
  },
  yanjingshuang() {
    this.toShowModal();
    this.setData({
      yanjingshuang: true
    });
  },
  jiemianjing() {
    this.toShowModal();
    this.setData({
      jiemianjing: true
    });
  },
  hecheng() {
    this.toShowModal();
    this.setData({
      hecheng: true
    });
  },
  choujiangjifen() {
    this.toShowModal();
    this.setData({
      choujiangjifen: true
    });
  },
  choujiangyouhuiquan() {
    this.toShowModal();
    this.setData({
      choujiangyouhuiquan: true
    });
  },
  goBag() {
    wx.navigateTo({
      url: '/pages/mybag/mybag',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.shoucijinru()
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