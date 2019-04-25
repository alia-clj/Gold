

// pages/testreport/testreport.js
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
    moreEighty: false,
    afterShenqing: false,
    success: false,
    shareSuccess: false,
    shareSave: false,
    allFail: false,
    shareFail: false,
    complete: false,

    name:'也卷一',
    tel: '18526265533',

    address: '上海市浦东新区南京路南京北路88888号上海市浦东新区南京路南',

    swiper: {

      swiperItem: [{
        result: '重度痘痘肌',
        explain: '毛孔较为粗大，快来拯救我 你的草莓鼻加厚的覅贺卡减肥的那边比回复 ',
        productsImg: '../image/magicmirror/recommend-product1.png',
        stepImg: '../image/magicmirror/step1.png',
        stepNumber: '1',
        stepDesc: '哇  都没有痘痘耶i',
        product: '潘达紧致精华液',
        productDesc: '淡化痘印痘疤 收缩毛孔补水保湿 告别油痘肌'
      }, {
        result: '中度法令纹',
        explain: '中度法令纹中度法令纹中度法令纹中度法令纹 ',
        productsImg: '../image/magicmirror/recommend-product1.png',
        stepImg: '../image/magicmirror/step1.png',
        stepNumber: '2',
        stepDesc: '哇  都没有痘痘耶2',
        product: '潘达紧致精华液1',
        productDesc: '淡化痘印痘疤 收缩毛孔补水保湿 告别油痘肌11'
      }, {
        result: '重度大油田',
        explain: '重度大油田重度大油田重度大油田重度大油田',
        productsImg: '../image/magicmirror/recommend-product1.png',
        stepImg: '../image/magicmirror/step1.png',
        stepNumber: '3',
        stepDesc: '哇  都没有痘痘耶3',
        product: '潘达紧致精华液2',
        productDesc: '淡化痘印痘疤 收缩毛孔补水保湿 告别油痘肌22'
      }],
      current: 0,

    },
    stepText: 5,
    chanelArray1: [
      ['皱纹', 66],
      ['毛孔粗大', 72],
      ['缺水', 50],
      ['大油田', 80],
      ['斑', 60],
      ['黑眼圈', 40],
      ['痘痘肌', 46],
      ['黑头', 67]
    ],
    recomendProducts: [{

      productsImg: '../image/magicmirror/recommend-product1.png',
      product: '祛痘胶囊精华面膜',
      productDesc: '收缩毛孔补水保湿 ',
      price: '88'
    },
    {
      productsImg: '../image/magicmirror/recommend-product1.png',
      product: '祛痘胶囊精华面膜',
      productDesc: '收缩毛孔补水保湿',
      price: '88'
    }, {
      productsImg: '../image/magicmirror/recommend-product1.png',
      product: '祛痘胶囊精华面膜',
      productDesc: '收缩毛孔补水保湿 ',
      price: '88'
    },
    {
      productsImg: '../image/magicmirror/recommend-product1.png',
      product: '祛痘胶囊精华面膜',
      productDesc: '收缩毛孔补水保湿',
      price: '88'
    },
    {
      productsImg: '../image/magicmirror/recommend-product1.png',
      product: '祛痘胶囊精华面膜',
      productDesc: '收缩毛孔补水保湿',
      price: '88'
    },
    {
      productsImg: '../image/magicmirror/recommend-product1.png',
      product: '祛痘胶囊精华面膜',
      productDesc: '收缩毛孔补水保湿',
      price: '88'
    },
    {
      productsImg: '../image/magicmirror/recommend-product1.png',
      product: '祛痘胶囊精华面膜',
      productDesc: '收缩毛孔补水保湿',
      price: '88'
    },
    {
      productsImg: '../image/magicmirror/recommend-product1.png',
      product: '祛痘胶囊精华面膜',
      productDesc: '收缩毛孔补水保湿',
      price: '88'
    },
    ],

    leftArrow: '../image/magicmirror/left-icon.png',
    rightArrow: '../image/magicmirror/right-icon.png',

  },
  swiperChange(e) {
    console.log(e)
    this.setData({
      current: e.detail.current
    })
  },

  preBtn() {
    var swiper = this.data.swiper;
    var current = swiper.current;
    swiper.current = current > 0 ? current - 1 : swiper.swiperItem.length-1;
    this.setData({
      swiper: swiper,
    })

  },

  nextBtn: function () {
    var swiper = this.data.swiper;
    var current = swiper.current;
    swiper.current = current < (swiper.swiperItem.length-1) ? current + 1 : 0;
    this.setData({
      swiper: swiper,
    })

  },

  goModal(){
    console.log('aaa')
    wx.navigateTo({
      url: '/pages/shiyongModal/shiyongModal',

    })
  }, toShowModal(e) {
    this.setData({
      showModal: true
    });
  },

  hideModal() {
    this.setData({
      showModal:false,
      shenqingshiyongzhuang: false,
      lessTirty: false,
      firstDati: false,
      moreEighty: false,
      afterShenqing: false,
      unEndReport: false,
      yiShenQing: false,
      zailai: false,
      weidao: false,
      yiShenQingJiDong: false,
      tiaokuan: false,
      shenqingchenggong:false,
      yilingwan:false
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
  unEndReport() {
    this.toShowModal();
    this.setData({
      unEndReport: true
    });
  },
  yiShenQing() {
    this.toShowModal();
    this.setData({
      yiShenQing: true
    });
  },
  zailai() {
    this.toShowModal();
    this.setData({
      zailai: true
    });
  },
  weidao() {
    this.toShowModal();
    this.setData({
      weidao: true
    });
  },
  yiShenQingJiDong() {
    this.toShowModal();
    this.setData({
      yiShenQingJiDong: true
    });
  },
  tiaokuan() {
    this.toShowModal();
    this.setData({
      tiaokuan: true
    });
  },
  shenqingchenggong() {
    this.toShowModal();
    this.setData({
      shenqingchenggong: true
    });
  },
  yilingwan() {
    this.toShowModal();
    this.setData({
      yilingwan: true
    });
  },
  shenqingchenggong() {
    this.toShowModal();
    this.setData({
      shenqingchenggong: true
    });
  },
  shenqingchenggong() {
    this.toShowModal();
    this.setData({
      shenqingchenggong: true
    });
  },
  openHaojidong(){
    this.toShowModal();
    this.setData({
      yiShenQingJiDong: true,
      tiaokuan:false
    });    
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },
  onLoad: function (options) {
    console.log(options)
  
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