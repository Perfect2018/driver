// pages/home/goodsDetail/goodsDetail.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id:'',
    state01:true,
    state02:true
  },

  toView(e){
    let navigate = e.currentTarget.dataset.navigate
    wx.navigateTo({
      url: `../${navigate}/${navigate}`,
    })
  },

  select(e){
    let state = e.currentTarget.dataset.state
    if(state=='01'){
      this.setData({
        state01:!this.data.state01
      })
    }
    if(state=='02'){
      this.setData({
        state02:!this.data.state02
      })
    }
  },

  getOrder(){
    wx.showToast({
      title: '抢单',
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setData({
      id:options.id
    })
    console.log(this.data.id)
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