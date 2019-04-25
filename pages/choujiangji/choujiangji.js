// pages/choujiangji/choujiangji.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    quan: [
      {
        imgUrl: '../../pages/image/qiandao/111 (1).png',
        price: '￥20',
        text1: '优惠券',
        text2: '满200使用',
        text3: '限潘达微信商城使用',
        startTime: '2019.4.20 ',
        endTime: '2019.5.5',
      }, {
        imgUrl: '../../pages/image/qiandao/111 (2).png',
        price: '￥20',
        text1: '优惠券',
        text2: '满200使用',
        text3: '限潘达微信商城使用',
        startTime: '2019.4.20 ',
        endTime: '2019.5.5',
      }, {
        imgUrl: '../../pages/image/qiandao/111 (3).png',
        price: '￥20',
        text1: '优惠券',
        text2: '满200使用',
        text3: '限潘达微信商城使用',
        startTime: '2019.4.20 ',
        endTime: '2019.5.5',
      },
      {
        imgUrl: '../../pages/image/qiandao/111 (4).png',
        price: '￥20',
        text1: '优惠券',
        text2: '满200使用',
        text3: '限潘达微信商城使用',
        startTime: '2019.4.20 ',
        endTime: '2019.5.5',
      },
    ],
    autoplay:false,
    aa: [
      {
        avatarUrl:'../../pages/image/qiandao/111 (1).png',
        nickName: "wang",
        reward: "2"
      },
      {
        avatarUrl: '../../pages/image/qiandao/111 (2).png',
        nickName: "wang",
        reward: "2"
      },
      {
        avatarUrl: '/pages/image/qiandao/111 (3).png',
        nickName: "wang",
        reward: "2"
      },
      {
        avatarUrl: '/pages/image/qiandao/111 (4).png',
        nickName: "wang",
        reward: "2"
      }
    ],
  },
  changeAutoPlay(){
    this.setData({
      autoplay:true
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