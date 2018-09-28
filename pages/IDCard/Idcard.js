
var app = require('../../resource/js/util.js');
Page({
  /**
   * 页面的初始数据
   */
  data: {
    name: '',//姓名
    Id: '',//身份证
  },
  //获取input输入框的值
  getNameValue: function (e) {
    this.setData({
      name: e.detail.value
    })
  },
  getIdValue: function (e) {
    this.setData({
      phone: e.detail.value
    })
  },

  //提交表单信息
  save: function () {
    if (this.data.name == "") {
      wx.showToast({
        title: '姓名不能为空',
        icon: 'none',
        duration: 1000
      })
      return false;
    }
    if (this.data.Id == "") {
      wx.showToast({
        title: '身份证不能为空',
        icon: 'none',
        duration: 1000
      })
      return false;
    } else {
      wx.setStorageSync('name', this.data.name);
      wx.setStorageSync('phone', this.data.phone);
      wx.redirectTo({
        url: '',
      })
    }
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
