//index.js
//获取应用实例
const app = getApp()

Page({
    data: {
        addListShow:true,
        motto: 'Hello World',
        userInfo: {},
        flag:true,
        hasUserInfo: false,
        imgUrls: [
          "https://ss3.bdstatic.com/70cFv8Sh_Q1YnxGkpoWK1HF6hhy/it/u=2512412073,484693686&fm=27&gp=0.jpg",
          "https://ss0.bdstatic.com/70cFvHSh_Q1YnxGkpoWK1HF6hhy/it/u=231620273,2622968107&fm=27&gp=0.jpg",
          "https://ss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=281531042,273318123&fm=27&gp=0.jpg",
          "http://img4.imgtn.bdimg.com/it/u=2731345960,2613387946&fm=26&gp=0.jpg"
        ],
        begininfo:'',
        endinfo:'',
        currentIndex:0,
        beginaddr:'请输入发货地',
        endaddr:'请输入收货地',
        indexinfo:'',
        canIUse: wx.canIUse('button.open-type.getUserInfo'),
        navData:[
            {
                text: '小型平板'
            },
            {
                text: '中型厢货'
            },
            {
                text: '中型平板'
            },
            {
                text: '5米2'
            },
            {
                text: '6米8'
            },
            {
                text: '7米6'
            },
            {
                text: '9米6'
            }
        ],
        currentTab: 0,
        navScrollLeft: 0
    },
    //事件处理函数
    onLoad: function () {
        if (app.globalData.userInfo) {
            this.setData({
                userInfo: app.globalData.userInfo,
                hasUserInfo: true
            })
        } else if (this.data.canIUse) {
            // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
            // 所以此处加入 callback 以防止这种情况
            app.userInfoReadyCallback = res => {
                this.setData({
                    userInfo: res.userInfo,
                    hasUserInfo: true
                })
            }
        } else {
            // 在没有 open-type=getUserInfo 版本的兼容处理
            wx.getUserInfo({
                success: res => {
                    app.globalData.userInfo = res.userInfo
                    this.setData({
                        userInfo: res.userInfo,
                        hasUserInfo: true
                    })
                }
            })
        }


        wx.getSystemInfo({
            success: (res) => {
                this.setData({
                    pixelRatio: res.pixelRatio,
                    windowHeight: res.windowHeight,
                    windowWidth: res.windowWidth
                })
            },
        })       
    },
    setBegin(e){
        this.setData({
            flag:true
        })
      
        wx.navigateTo({
            url: '../shopMap/shopMap',
        
          })
         

    },
    setEnd(e){
        this.setData({
            flag:false
        })
        wx.navigateTo({
            url: '../shopMap/shopMap',
          })

      
    },

    switchNav(event){
        var cur = event.currentTarget.dataset.current; 
        //每个tab选项宽度占1/5
        var singleNavWidth = this.data.windowWidth / 5;
        //tab选项居中                            
        this.setData({
            navScrollLeft: (cur - 2) * singleNavWidth
        })      
        if (this.data.currentTab == cur) {
            return false;
        } else {
            this.setData({
                currentTab: cur,
                currentIndex:cur,
            })
        }
    },
    switchTab(event){
        var cur = event.detail.current;
        var singleNavWidth = this.data.windowWidth / 5;
        this.setData({
            currentTab: cur,
            navScrollLeft: (cur - 2) * singleNavWidth,
            currentIndex:cur,
        });
    },
    

  swiperChange(e){
    console.log(e)
    var singleNavWidth = this.data.windowWidth / 5;
    this.setData({
      currentIndex:e.detail.current,
      currentTab: e.detail.current,
      navScrollLeft: (e.detail.current - 2) * singleNavWidth
    })
  },
 
})