//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    imgUrls: [
      '../image/dstz.png',
      '../image/dstz.png',
      '../image/dstz.png',
      '../image/dstz.png',
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
    ]
  },

  swiperChange(e) {
    console.log(e)
    this.setData({
      swiperIndex: e.detail.current
    })
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
  }

})