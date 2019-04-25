var numCount = 8;
var numSlot = 5;
var fontSize = 13;
var mW;
var mH;
wx.getSystemInfo({
  success: function (res) {
    console.log(res.windowWidth)
    console.log(res.windowHeight)
    mW = res.windowWidth;
    mH = res.windowWidth;
    console.log(mW);
    console.log(mH);
  }
})

var mCenter = mW / 2; //中心点
console.log(mCenter);
var mAngle = Math.PI * 2 / numCount; //角度
var mRadius = mCenter - 80; //半径(减去的值用于给绘制的文本留空间)
//获取Canvas
var radCtx = wx.createCanvasContext("radarCanvas")



// pages/testreport/testreport.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    swiper: {

      swiperItem: [{
        result: '重度痘痘肌',
        explain: '毛孔较为粗大，快来拯救我 你的草莓鼻加厚的覅贺卡减肥的那边比回复 ',
        productsImg: '../image/magicmirror/recommend-product1.png',
        stepImg: '../image/magicmirror/step1.png',
        realImg: '',
        stepNumber: '1',
        stepDesc: '哇  都没有痘痘耶i',
        product: '潘达紧致精华液',
        productDesc: '淡化痘印痘疤 收缩毛孔补水保湿 告别油痘肌'
      }, {
        result: '中度法令纹',
        explain: '中度法令纹中度法令纹中度法令纹中度法令纹 ',
        productsImg: '../image/magicmirror/recommend-product1.png',
        stepImg: '../image/magicmirror/step1.png',
        realImg: '',
        stepNumber: '2',
        stepDesc: '哇  都没有痘痘耶2',
        product: '潘达紧致精华液1',
        productDesc: '淡化痘印痘疤 收缩毛孔补水保湿 告别油痘肌11'
      }, {
        result: '重度大油田',
        explain: '重度大油田重度大油田重度大油田重度大油田',
        productsImg: '../image/magicmirror/recommend-product1.png',
        stepImg: '../image/magicmirror/step1.png',
        realImg: '',
        stepNumber: '3',
        stepDesc: '哇  都没有痘痘耶3',
        product: '潘达紧致精华液2',
        productDesc: '淡化痘印痘疤 收缩毛孔补水保湿 告别油痘肌22'
      }, {
        result: '重度大油田',
        explain: '重度大油田重度大油田重度大油田重度大油田',
        productsImg: '../image/magicmirror/recommend-product1.png',
          stepImg: '../image/magicmirror/step7 .png',
        realImg: '../image/magicmirror/girls.png',
        stepNumber: '7',
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
    swiper.current = current > 0 ? current - 1 : swiper.swiperItem.length;
    this.setData({
      swiper: swiper,
    })

  },

  nextBtn: function() {

    var swiper = this.data.swiper;
    var current = swiper.current;
    console.log(swiper.current)
    console.log(swiper.swiperItem.length)
    swiper.current = current < (swiper.swiperItem.length) ? current + 1 : 0;
    this.setData({
      swiper: swiper,
    })

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    console.log(options)
    // if (this.data.swiper.current === 0) {
    //   document.getElementsByClassName("changeStep").style = 'none'
    // }

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {
    //雷达图
    this.drawRadar()

  },
  // 雷达图
  drawRadar: function() {
    var sourceData1 = this.data.chanelArray1

    //调用
    this.drawEdge() //画六边形
    //this.drawArcEdge() //画圆
    this.drawLinePoint()
    //设置数据
    this.drawRegion(sourceData1, 'rgba(210, 240, 250, 0.5)') //第一个人的
    //设置文本数据
    this.drawTextCans(sourceData1)
    //设置节点
    this.drawCircle(sourceData1, '#cdf2ea')
    //开始绘制
    radCtx.draw()
  },
  // 绘制边
  drawEdge: function() {
    radCtx.setStrokeStyle("white")
    radCtx.setLineWidth(.5) //设置线宽
    for (var i = 0; i < numSlot; i++) {
      // i += 2;
      //计算半径
      radCtx.beginPath()
      var rdius = mRadius / numSlot * (i + 1)
      //画6条线段
      for (var j = 0; j < numCount; j++) {
        //坐标
        var x = mCenter + rdius * Math.cos(mAngle * j);
        var y = mCenter + rdius * Math.sin(mAngle * j);
        radCtx.lineTo(x, y);
      }
      radCtx.closePath()
      radCtx.stroke()
    }

    for (var p = 0; p < numSlot; p++) {
      p += 2;
      radCtx.beginPath();
      var rdius = mRadius / numSlot * i; //当前半径
      radCtx.arc(mW / 2, mH / 2, rdius, 0, Math.PI * 2);
      radCtx.closePath()
      radCtx.stroke();
    }
  },
  // 绘制连接点
  drawLinePoint: function() {
    radCtx.beginPath();
    for (var k = 0; k < numCount; k++) {
      var x = mCenter + mRadius * Math.cos(mAngle * k);
      var y = mCenter + mRadius * Math.sin(mAngle * k);
      radCtx.setLineDash([8, 8]); // [实线长度, 间隙长度]
      radCtx.lineDashOffset = -0;
      radCtx.moveTo(mCenter, mCenter);
      radCtx.lineTo(x, y);
    }
    radCtx.stroke();
  },
  //绘制数据区域(数据和填充颜色)
  drawRegion: function(mData, color) {

    radCtx.beginPath();
    for (var m = 0; m < numCount; m++) {
      var x = mCenter + mRadius * Math.cos(mAngle * m) * mData[m][1] / 100;
      var y = mCenter + mRadius * Math.sin(mAngle * m) * mData[m][1] / 100;

      radCtx.lineTo(x, y);
    }
    radCtx.closePath();
    radCtx.setFillStyle(color)
    radCtx.fill();
  },

  //绘制文字
  drawTextCans: function(mData) {

    radCtx.setFillStyle("white")
    radCtx.font = fontSize + 'rpx Microsoft Yahei';

    for (var n = 0; n < numCount; n++) {
      var x = mCenter + mRadius * Math.cos(mAngle * n); // cos(2PI)=1 sin(2*pi)=0  mAngle===2*pi
      var y = mCenter + mRadius * Math.sin(mAngle * n); //mAngle= Math.PI *1/4
      // radCtx.fillText(mData[n][0], x, y);
      //通过不同的位置，调整文本的显示位置
      if (mAngle * n == 0) {

        radCtx.fillText(mData[n][0], x + 10, y + fontSize / 2);

      } else if (mAngle * n == Math.PI / 4) {

        radCtx.fillText(mData[n][0], x + 5, y + fontSize);

      } else if (mAngle * n > Math.PI / 4 && mAngle * n <= Math.PI / 2) {

        radCtx.fillText(mData[n][0], x - 15, y + fontSize + 5);

      } else if (mAngle * n > Math.PI / 2 && mAngle * n < Math.PI) {

        radCtx.fillText(mData[n][0], x - 30, y + fontSize + 10);

      } else if (mAngle * n == Math.PI) {

        radCtx.fillText(mData[n][0], x - 20, y + fontSize / 2);

      } else if (mAngle * n == Math.PI * 3 / 2) {

        radCtx.fillText(mData[n][0], x - 15, y - 10);

      } else if (mAngle * n <= Math.PI * 5 / 4) {

        radCtx.fillText(mData[n][0], x - radCtx.measureText(mData[n][0]).width - 10, y - 10);

      } else if (mAngle * n == Math.PI * 1 / 2) {

        radCtx.fillText(mData[n][0], x - 10, y + 10);

      } else if (mAngle * n == Math.PI * 7 / 4) {

        radCtx.fillText(mData[n][0], x + 10, y);

      }

    }
  },
  //画点
  drawCircle: function(mData, color) {
    var r = 3; //设置节点小圆点的半径
    for (var i = 0; i < numCount; i++) {
      var x = mCenter + mRadius * Math.cos(mAngle * i) * mData[i][1] / 100;
      var y = mCenter + mRadius * Math.sin(mAngle * i) * mData[i][1] / 100;

      radCtx.beginPath();
      radCtx.arc(x, y, r, 0, Math.PI * 2);
      radCtx.fillStyle = color;
      radCtx.fill();
    }
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