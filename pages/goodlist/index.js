Page({
    data: {
       
    },
    onLoad: function () {

    },
    gotoGoodDetail:function(e){
       var datasetId=e.currentTarget.dataset.id;
       wx.navigateTo({
          url: '/pages/goodlist/detail/index?id='+datasetId
       })
    }
});