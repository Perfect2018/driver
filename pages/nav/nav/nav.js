// pages/nav/nav/nav.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    orderList:[
      {start:'榆林市横山区',end:'吕梁市孝义市',goodName:'煤炭',weight:'59',require:'7-30',company:'秦经老年经济服务公司',time:'8-20 15:25',total:'0',price:'100',state:'01',id:'01'},
      {start:'榆林市横山区',end:'吕梁市孝义市',goodName:'煤炭',weight:'59',require:'7-30',company:'秦经老年经济服务公司',time:'8-20 15:25',total:'0',price:'100',state:'01',id:'02'},
      {start:'榆林市横山区',end:'吕梁市孝义市',goodName:'煤炭',weight:'59',require:'7-30',company:'秦经老年经济服务公司',time:'8-20 15:25',total:'0',price:'100',state:'01',id:'03'},
    ],
    orderList1:[
      {start:'榆林市横山区',end:'吕梁市孝义市',goodName:'煤炭',weight:'59',require:'7-30',company:'秦经老年经济服务公司',time:'8-20 15:25',total:'0',price:'100',state:'02',id:'01'},
      {start:'榆林市横山区',end:'吕梁市孝义市',goodName:'煤炭',weight:'59',require:'7-30',company:'秦经老年经济服务公司',time:'8-20 15:25',total:'0',price:'100',state:'02',id:'02'},
      {start:'榆林市横山区',end:'吕梁市孝义市',goodName:'煤炭',weight:'59',require:'7-30',company:'秦经老年经济服务公司',time:'8-20 15:25',total:'0',price:'100',state:'02',id:'03'},
    ],
    orderList2:[
      {start:'榆林市横山区',end:'吕梁市孝义市',goodName:'煤炭',weight:'59',require:'7-30',company:'秦经老年经济服务公司',time:'8-20 15:25',total:'0',price:'100',state:'03',id:'01'},
      {start:'榆林市横山区',end:'吕梁市孝义市',goodName:'煤炭',weight:'59',require:'7-30',company:'秦经老年经济服务公司',time:'8-20 15:25',total:'0',price:'100',state:'03',id:'02'},
      {start:'榆林市横山区',end:'吕梁市孝义市',goodName:'煤炭',weight:'59',require:'7-30',company:'秦经老年经济服务公司',time:'8-20 15:25',total:'0',price:'100',state:'03',id:'03'},
    ],
    orderList3:[
      {start:'榆林市横山区',end:'吕梁市孝义市',goodName:'煤炭',weight:'59',require:'7-30',company:'秦经老年经济服务公司',time:'8-20 15:25',total:'0',price:'100',state:'04',id:'01'},
      {start:'榆林市横山区',end:'吕梁市孝义市',goodName:'煤炭',weight:'59',require:'7-30',company:'秦经老年经济服务公司',time:'8-20 15:25',total:'0',price:'100',state:'04',id:'02'},
      {start:'榆林市横山区',end:'吕梁市孝义市',goodName:'煤炭',weight:'59',require:'7-30',company:'秦经老年经济服务公司',time:'8-20 15:25',total:'0',price:'100',state:'04',id:'03'},
    ],
    orderList4:[
      {start:'榆林市横山区',end:'吕梁市孝义市',goodName:'煤炭',weight:'59',require:'7-30',company:'秦经老年经济服务公司',time:'8-20 15:25',total:'0',price:'100',state:'04',id:'01'},
      {start:'榆林市横山区',end:'吕梁市孝义市',goodName:'煤炭',weight:'59',require:'7-30',company:'秦经老年经济服务公司',time:'8-20 15:25',total:'0',price:'100',state:'04',id:'02'},
      {start:'榆林市横山区',end:'吕梁市孝义市',goodName:'煤炭',weight:'59',require:'7-30',company:'秦经老年经济服务公司',time:'8-20 15:25',total:'0',price:'100',state:'04',id:'03'},
    ]
  },

  selected(e){
    console.log(e)
  },

  _load(e){
    wx.navigateTo({
      url: '/pages/nav/load/load',
    })
  },

  _complain(e){
    console.log(e)
  },

  _cancel(e){
    console.log(e)
  },

  _look(e){
    wx.navigateTo({
      url: '/pages/nav/handing/hangding',
    })
  },

  _prompt(e){
    wx.showToast({
      title: '催款',
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