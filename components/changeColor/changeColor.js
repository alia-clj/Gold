

Page({
  data: {
    data: {
      num: 1,
  
    },
    oilName: [
      {
        name: '92#汽油111',

      },
      {
        name: '95#汽油11111',

      }, {

        name: '98#汽油1111',

      },
    ]
  },
  changeOil: function (e) {
    console.log(e);
    this.setData({
      num: e.target.dataset.num
    })
  }
})