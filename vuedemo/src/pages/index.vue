<template>
  <div>
    <div class="container container-margin pre-8">
      <nav class="container-left">

        <div class="narbar-content">
          <div class="narbar-title">
            <h2 class=" narbar-padding">全部产品</h2>
          </div>
          <!--narvar-title-->
          <div class="narbar-body" v-for="product in productList">
            <h3 class="narbar-padding" v-text="product.title">h3</h3>
            <ul class="item" v-for="item in product.lists">
              <li class="item-list"><a :href="item.url">{{item.name}}</a></li>
            </ul>
            <hr class="item-hr" v-if="!product.last  ">
          </div><!--narbar-body--->
        </div><!--narbar-content-->

        <div class="narbar-content">
          <div class="narbar-title">
            <h2 class=" narbar-padding">最新消息</h2>
          </div>
          <!--narvar-title-->
          <div class="narbar-body">
            <ul class="item" v-for="item in newList">
              <li class="item-list"><a class="text-overflow" :href="item.url">{{item.title}}</a></li>
            </ul>
          </div><!--narbar-body--->
        </div><!--narbar-content-->

      </nav><!--container-left nar -->
      <div class="container-right">
        <slideShow :slides="slides" :inv="speed" @onchange="onSlideDoSomething()"></slideShow>
        <div class="content-panel" v-for="(item,index) in boardLists">
          <div class="content-image" :class="'board-item-'+item.id"></div>
          <div class="content-body">
            <h3><strong v-text="item.title">strong</strong></h3>
            <p v-text="item.description">p</p>
            <a href="" class="btn btn-style">立即购买</a></div>
        </div><!--content-panel-->
      </div><!--container-right-->
    </div>
  </div>
</template>
<script type="text/ecmascript-6">
  import slideShow from '../components/slideShow.vue';

  export default {
    components: {
      slideShow
    },
    created: function () {
      this.$http.get('api/getNewsList').then((res) => {
        this.newList = res.data;
      }, (err) => {
        console.log(err);
      })
    },
    data() {
      return {
        speed: 3500,
        slides: [
          {
            src: require('../assets/images/slideShow/pic1.jpg'),
            title: "科技论坛大杂烩",
            href: 'detail/analysis'
          },
          {
            src: require('../assets/images/slideShow/pic2.jpg'),
            title: "家永之家",
            href: 'detail/count'
          },
          {
            src: require('../assets/images/slideShow/pic3.jpg'),
            title: "顶上之战",
            href: 'detail/publish'
          },
          {
            src: require('../assets/images/slideShow/pic4.jpg'),
            title: "精英之家",
            href: 'detail/forecast'
          },
        ],
        productList: {
          pc: {
            title: 'PC产品',
            lists: [
              {
                name: '数据统计',
                url: 'http://www.twicetech.top'
              },
              {
                name: '数据预测',
                url: 'http://www.twicetech.top'
              },
              {
                name: '流量分析',
                url: 'http://www.twicetech.top'
              },
              {
                name: '广告发布',
                url: 'http://www.twicetech.top'
              }
            ]
          },
          app: {
            title: '手机应用类',
            last: true,
            lists: [
              {
                name: '91助手',
                url: 'http://www.twicetech.top'
              },
              {
                name: '产品助手',
                url: 'http://www.twicetech.top'
              },
              {
                name: '智能地图',
                url: 'http://www.twicetech.top'
              },
              {
                name: '团队语音',
                url: 'http://www.twicetech.top'
              }
            ]
          },
        },
        newList: {},
//        newList: {
//          blog: {
//            title: false,
//            last: false,
//            lists: [
//              {
//                name: '数据统计',
//                url: 'http://www.twicetech.top'
//              },
//              {
//                name: '数据预测',
//                url: 'http://www.twicetech.top'
//              },
//              {
//                name: '流量分析',
//                url: 'http://www.twicetech.top'
//              },
//              {
//                name: '广告发布',
//                url: 'http://www.twicetech.top'
//              },
//
//            ]
//          }
//        },
        boardLists: [
          {
            title: '开发产品',
            description: '开发产品是一款开放产品',
            id: 'car',
            toKey: 'analysis',
            saleout: false
          },
          {
            title: '品牌营销',
            description: '品牌营销帮助你的产品更好地找到定位',
            id: 'earth',
            toKey: 'count',
            saleout: false
          },
          {
            title: '使命必达',
            description: '使命必达快速迭代永远保持最前端的速度',
            id: 'loud',
            toKey: 'forecast',
            saleout: true
          },
          {
            title: '勇攀高峰',
            description: '帮你勇闯高峰，到达事业的顶峰',
            id: 'hill',
            toKey: 'publish',
            saleout: false
          },
        ],
      };
    },
    methods: {
      onSlideDoSomething() {
        console.log("slide runing ");
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  .pre-8
    width: 80%;

  .container-margin
    margin: 20px auto;

  .container
    height: auto;
    display: flex;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    align-items: left;
    .container-left
      margin: 0 10px;
      flex-basis: 25%;
      box-sizing border-box;
      .narbar-content
        width 100%;
        height auto;
        background-color: #f9f9f9;
        -webkit-box-shadow: 0 0 5px #ccc;
        -moz-box-shadow: 0 0 5px #ccc;
        box-shadow: 0 0 5px #ccc;
        box-sizing border-box;
        margin-bottom: 20px;
        .narbar-title
          width: 100%;
          height: 50px;
          line-height: 50px;
          background-color: #5cb85c;
          color: #fff;
        .narbar-body
          width: 100%;
          height auto;
          padding-top: 24px;
          h3
            margin-bottom 18px;
          ul.item
            width: 100%;
            padding: 5px 0px 10px 24px;
            box-sizing: border-box;
            .item-list
              width: 100%;
              list-style-type: none;
              a
                text-decoration: none;
                color: #111;

    .container-right
      flex-basis: 70%;
      margin: 0 10px;
      box-sizing: border-box;
      display: flex;
      justify-content: space-around;
      align-items: center;
      flex-wrap wrap;
      box-sizing border-box;

      .content-panel:nth-child(even)
        border-right: 10px solid #fff;
      .content-panel
        flex-basis 50%;
        height: 150px;
        margin: 10px 0;
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
        background-color: #f9f9f9;
        display flex;
        .content-image
          background-color: #fff;
          flex-basis: 40%;
          flex-grow: 2;
          flex-shrink: 2;
          text-align: center;
          background-position: center;
          background-repeat: no-repeat;
          border: 1px solid #f9f9f9;
        .content-body
          flex-grow: 3;
          flex-strink: 2;
          flex-basis: 60%;
          padding: 15px;
          box-sizing border-box;
          p
            margin: 8px 0;
            height: 24px;
            text-overflow ellipsis;
            overflow: hidden;
            display: -webkit-box;
            -webkit-box-orient: vertical;
            -webkit-line-clamp: 1;
          .btn
            display inline-block;
            background: linear-gradient(#27cc0b, #2ecc29, #36cc23, #57cc23);
            padding: 5px 10px;
            border: 1px solid #fff;
            border-radius: 5px;
            text-decoration: none;
            color: #fff;
          .btn:hover
            background: linear-gradient(#1fcc60, #4ccc73, #18cc44, #30cc80);

  .narbar-padding
    padding: 0 18px;

  .board-item-earth
    background: url("../assets/images/images/earth.png");

  .board-item-car
    background: url("../assets/images/images/car.png");

  .board-item-hill
    background: url("../assets/images/images/hill.png");

  .board-item-loud
    background: url("../assets/images/images/loud.png");

  .text-overflow
    display: inline-block;
    width: 14rem;
    text-overflow ellipsis;
    overflow: hidden;
    white-space: nowrap;

  .text-center
    text-align: center;

  .text-left
    text-align: left;

  .text-right
    text-align: right;

  .text-white
    color: #fff;

  .text-black
    color: #000;

  .text-decoration-underline
    text-decoration: underline;

  .text-decoration-none
    text-decoration: none;

  .box-shadow-narmal
    box-shadow: 0 0 5px #ccc;

</style>
