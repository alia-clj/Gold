//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      {
       url: '../image/index/dstz.png',
       title:'大神挑战',
       desc:'答题赢试用'

      },
      {
        url:'../image/index/mflq.png',
        title: '免费领取',
        desc: '快来领试用'

      },
      {
        url:'../image/index/mjcs.png',
        title: '魔镜测试',
        desc: '颜值打几分'

      },
      {
        url: '../image/index/kllw.png',
        title: '快来撩我',
        desc: '爱我要走心'

      },


    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    imgUrl1: [
      '../image/3.png',
      '../image/3.png',
    ],
    imgUrl2: [
      '../image/13.png',
      '../image/4.png',
      '../image/5.png',
      '../image/8.png',

    ],
    time: {
      shi: 12,
      fen: 21,
      miao: 10,
    },
    swiperIndex: 0,
    bigImgUrl1: [{
        title: '补水保湿清洁提亮肤色',
        desc: '水光精华胶囊面膜',
        img: '../image/22.png',
      },
      {
        title: '补水保湿清洁提亮肤色',
        desc: '水光精华胶囊面膜',
        img: '../image/23.png',
      },
      {
        title: '补水保湿清洁提亮肤色',
        desc: '水光精华胶囊面膜',
        img: '../image/22.png',
      },
    ],

  },

  swiperChange(e) {
    console.log(e)
    this.setData({
      swiperIndex: e.detail.current
    })
  },
  swiperClick: function(e) {
    console.log(this.data.swiperIndex)
    if (this.data.swiperIndex === 0) {
      wx.navigateTo({
        url: '/pages/dati/dati',
      })
    } else if (this.data.swiperIndex === 1) {
      wx.navigateTo({
        url: '/pages/shiyong/shiyong',
      })
    } else if (this.data.swiperIndex === 2) {
      wx.navigateTo({
        url: '/pages/testreport/testreport',
      })
    } else if (this.data.swiperIndex === 3) {
      wx.navigateTo({
        url: '/pages/shiyong/shiyong',
      })
    } 
  },
  //事件处理函数
  bindViewTap: function() {

  },
  onLoad: function() {

  },
  changeIndicatorDots(e) {
    this.setData({
      indicatorDots: !this.data.indicatorDots
    })
  },
  changeAutoplay(e) {
    this.setData({
      autoplay: !this.data.autoplay
    })
  },
  intervalChange(e) {
    this.setData({
      interval: e.detail.value
    })
  },
  durationChange(e) {
    this.setData({
      duration: e.detail.value
    })
  },


})