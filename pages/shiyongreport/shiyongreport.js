// pages/shiyongreport/shiyongreport.js
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    stars: [0, 1, 2, 3, 4],
    normalSrc: '../../pages/image/shiyong/smile.png',
    selectedSrc: '../../pages/image/shiyong/smileed.png',

    question1: '1.潘达妆可贴眼膜(产品名)试用感',
    children1: [{
        anwser: '非常好用',

      },
      {
        anwser: '使用感一般',

      },
      {
        anwser: '不好用',

      },

    ],
    question2: '2.使用产品后，我的肌肤问题',
    children2: [{
        id: 1,
        anwser: '明显改善',

      },
      {
        id: 2,
        anwser: '效果一般',

      },
      {
        id: 3,
        anwser: '变化不明显',
      },

    ],
    data: {
      num: 1,
      num2: 1,


    },
    collected:true,
  },
  changeOil: function(e) {
    console.log(e);
    this.setData({
      num: e.target.dataset.num
    })
  },
  changeOil2: function (e) {
    console.log(e);
    this.setData({
      num2: e.target.dataset.num
    })
  },


  changeColor: function(res) {

  },
  changeUrl: function(res) {
    this.setData({
      collected1: !this.data.collected1
    })
  },
  bindFormSubmit(e) {
    console.log(e.detail.value.textarea)
  },

  selectRight: function (e) {
    console.log(e)
    var key = e.currentTarget.dataset.key
    console.log("得" + key + "分")
    this.setData({
      key: key
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