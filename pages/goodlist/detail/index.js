Page({
    data: {
        indicatorDots: true, //是否显示面板指示点
        autoplay: true, //是否自动切换
        interval: 3000, //自动切换时间间隔,3s
        duration: 1000, //  滑动动画时长1s
        good:{}
    },
    onLoad: function (options) {
        this.setData({
          good:{
                "id": 88,
                "name": "香辣鱿鱼",
                "code": "2018061200008",
                "sale_price": 23,
                "promotion_info": [
                  {
                    "value": "new-arrival",
                    "text": "New"
                  },
                  {
                    "value": "discount",
                    "text": "限时优惠8折"
                  }
                ],
                "discount": 1,
                "s_img_url": [
                  "../../../images/goods/youyu/146X146.jpg"
                ],
                "b_img_url": [
                  "../../../images/goods/youyu/375X187_01.jpg",
                  "../../../images/goods/youyu/375X187_02.jpg",
                  "../../../images/goods/youyu/375X187_03.jpg"
                ],
                "description": "香辣鱿鱼",
                "detail_info": [
                  {
                    "label": "产地",
                    "value": "上海长宁"
                  },
                  {
                    "label": "营养元素",
                    "value": "蛋白质，VC,B族维生素"
                  },
                  {
                    "label": "储藏方法",
                    "value": "0 摄氏度以上"
                  },
                  {
                    "label": "品牌",
                    "value": "我的鲜生"
                  }
                ],
                "detail_img_url": [
                  "../../../images/goods/youyu/detail_01.jpg",
                  "../../../images/goods/youyu/detail_02.jpg",
                  "../../../images/goods/youyu/detail_03.jpg",
                  "../../../images/goods/youyu/detail_04.jpg",
                  "../../../images/goods/youyu/detail_05.jpg",
                  "../../../images/goods/youyu/detail_06.jpg"
                ]
               
              }

        })
    }
});