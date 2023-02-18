// pages/event/event.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 0,
    msg: "你好"
  },

  // 定义按钮事件处理函数
  btnTapHander(e) {
    console.log(e);
  },

  countChange() {
    this.setData({
      count: this.data.count + 1
    })

  },

  countChange2(e) {
    // console.log(e);
    this.setData({
      count: this.data.count + e.target.dataset.info
    })
  },

  inputHandler(e) {
    console.log(e.detail.value);
  },

  inputHandler2(e) {
    this.setData({
      msg: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad(options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})