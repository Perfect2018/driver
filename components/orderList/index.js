// components/orderList/index.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    orderList:{
      type:Array
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 组件的方法列表
   */
  methods: {
    toView(e){
      wx.navigateTo({
        url: '/pages/home/goodsDetail/goodsDetail?id=0',
      })
    },
    load(e){
      let id = e.currentTarget.dataset.id;
      this.triggerEvent('load',{id:id})
    },
    complain(e){
      let id = e.currentTarget.dataset.id;
      this.triggerEvent('complain',{id})
    },
    cancel(e){
      let id = e.currentTarget.dataset.id;
      this.triggerEvent('cancel',{id})
    },
    look(e){
      let id = e.currentTarget.dataset.id;
      this.triggerEvent('look',{id})
    },
    prompt(e){
      let id = e.currentTarget.dataset.id;
      this.triggerEvent('prompt',{id})
    }
  }
})
