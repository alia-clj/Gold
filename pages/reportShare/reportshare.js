// pages/secondTestReport/secondtestreport.js
const app = getApp();
Page({
  data: {
    httpUrl: app.globalData.rhost,
    grade: 90,
    imgUrl: '../image/magicmirror/girls.png',
    nikeName: undefined,
    titleImg: '',
    showModal: false,
    tempPath: undefined,      //颜值图
    titleImgPath: undefined,  //微信头像图
    bgImg: undefined,         //背景图
    barcode: undefined,       //二维码
    shareTempFilePath: undefined,
  },
  toShowModal(e) {
    this.setData({
      showModal: true
    });
  },
  hideModal() {
    this.setData({
      showModal: false
    });
  },
  save() {
    var that = this;
    console.log('--------save-------')

    wx.authorize({
      scope: 'scope.writePhotosAlbum',
      success() {
        that.saveImageToPhotosAlbum();
      }
    })
    
    
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      grade: options.grade,
      imgUrl: options.imgUrl
    })
    console.log(JSON.stringify(wx.getStorageSync("userInfo_s")))
    that.setData({
      nikeName: wx.getStorageSync("userInfo_s").nickName,
      titleImg: wx.getStorageSync("userInfo_s").avatarUrl,
    })

    wx.downloadFile({
      url: app.globalData.rhost + that.data.imgUrl,
      success: function (sres) {
        that.setData({
          tempPath: sres.tempFilePath
        });
        wx.downloadFile({
          url: that.data.titleImg,
          success: function (sres2) {
            that.setData({
              titleImgPath: sres2.tempFilePath
            })
            wx.downloadFile({
              url: app.globalData.rhost + '/file/mojing/haibao3.png',
              success: function (sres3) {
                that.setData({
                  bgImg: sres3.tempFilePath
                })
                wx.downloadFile({
                  url: app.globalData.rhost + '/file/mojing/barcode.jpg',
                  success: function (sres4) {
                    that.setData({
                      barcode: sres4.tempFilePath
                    })
                    that.drawPosterImg();
                  },
                  fail: function (fres) {
                    console.log('参数错误');
                  }
                });
              },
              fail: function (fres) {
                console.log('参数错误');
              }
            });
          },
          fail: function (fres) {
            console.log('参数错误');
          }
        });
      },
      fail: function (fres) {
        console.log('参数错误');
      }
    });
  },
  drawPosterImg: function (e) {
    var that = this;
    console.log('7' + that.data.bgImg)
    var _screen_width = wx.getSystemInfoSync().windowWidth; // 手机屏幕宽度
    var canvasCtx = wx.createCanvasContext("myCanvas");
    // 颜值图
    canvasCtx.drawImage(that.data.tempPath, _screen_width * 0.21, _screen_width * 0.27, _screen_width * 0.6, _screen_width * 0.6);
    // 背景图
    canvasCtx.drawImage(that.data.bgImg, 0, 0, _screen_width, _screen_width * 1.75);
    // 颜值分
    canvasCtx.setFontSize(26);
    canvasCtx.setFillStyle('#FFF');
    canvasCtx.setTextAlign('left');
    canvasCtx.fillText('颜值' + that.data.grade + '分', _screen_width * 0.34, _screen_width*0.09);
    // 微信头像
    canvasCtx.drawImage(that.data.titleImgPath, _screen_width * 0.02, _screen_width * 1.49, _screen_width * 0.2, _screen_width * 0.2);
    // 微信名
    canvasCtx.setFontSize(17);
    canvasCtx.setFillStyle('#000000');
    canvasCtx.setTextAlign('left');
    canvasCtx.fillText(that.data.nikeName, _screen_width * 0.25, _screen_width * 1.56);
    // 小程序二维码
    canvasCtx.drawImage(that.data.barcode, _screen_width * 0.78, _screen_width * 1.49, _screen_width * 0.2, _screen_width * 0.2);
    canvasCtx.draw(false, that.getTempFilePath())
  },
  //获取临时路径
  getTempFilePath: function () {
    var that = this;
    console.log(111111111111)
    wx.canvasToTempFilePath({
      canvasId: 'myCanvas',
      success: (res) => {
        console.log(2222222222222)
        that.setData({
          shareTempFilePath: res.tempFilePath
        })
      }
    })
  },
  //保存至相册
  saveImageToPhotosAlbum: function () {
    var that = this;

    wx.authorize({
      scope: 'scope.writePhotosAlbum',
      success() {
        console.log('.........' + that.data.shareTempFilePath)
        if (!that.data.shareTempFilePath) {
          wx.showModal({
            title: '提示',
            content: '图片绘制中，请稍后重试',
            showCancel: false
          })
        }
        wx.saveImageToPhotosAlbum({
          filePath: that.data.shareTempFilePath,
          success: (res) => {
            wx.showModal({
              title: '图片已保存到系统相册',
              content: '快去分享给小伙伴吧',
              success(res) {
              }
            })
          },
          fail: (err) => {
            wx.showToast({
              title: "保存失败.",
              icon: 'none'
            });
            console.log(err);
          }
        })
      }
    })

    
  }
})