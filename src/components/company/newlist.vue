<template>
  <div id="newlist" class="index_box">
    <div class="top_wrap">
           <div class="topImg">
             <img src="../../../static/img/topimg.png" alt="">
           </div>
           <div class="topmark"></div>
    </div>
    <div class="navTitle">
      <p>{{navTitle}}</p>
    </div>
    <div class="content">
        <div class="crumbs">
            <img src="../../../static/img/gap.png" alt="" />
            <span v-on:click="gotoIndex()">{{index}}</span>
            >
            <span v-on:click="gotoConpany()">{{crumbs}}</span>
             >
            <span>{{navTitle}}</span>
        </div>
        <div class="borderbox">
          <div class="item" v-for="item in newList" :key="item.id">
              <span class="year">{{item.time}}</span>
              <ul>
                <li v-for="news in item.detail" :key="news.id" v-on:click="gotonew(item.id)">
                  <span class="news_name ellipsis-one">{{news.name}}</span>
                  <span class="news_time">{{news.time}}</span>
                  <div class="clear"></div>
                </li>
              </ul>
          </div>
        </div>
        <div class="load_more">
          <div class="loadEffect" v-show="loadings">
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                
          </div>
          <div class="inloadEffect" v-show="loadings">{{load}}</div>
          <div class="loadWork" v-show="!loadings" v-on:click="getMore()">
            {{loadWork}}
          </div>
          <div class="clear"></div>
        </div>
        
        <BackTop ></BackTop><!-- 返回顶部 -->
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      navTitle:'公司动态',
      crumbs:'公司信息',
      index:'首页',
      loadings:false,
      load:'加载中...',
      loadWork:'点击查看更多',
      newList:[{
        id:1,
        time:'2018',
        detail:[{
          id:11,
          name:'这是一条新闻',
          time:'2015-03-22'
        },{
          id:12,
          name:'这是一条新闻',
          time:'2015-03-22'
        },{
          id:13,
          name:'这是一条新闻',
          time:'2015-03-22'
        },{
          id:14,
          name:'这是一条新闻',
          time:'2015-03-22'
        },{
          id:15,
          name:'这是一条新闻',
          time:'2015-03-22'
        }]
      },{
        id:2,
        time:'2017',
        detail:[{
          id:21,
          name:'这是一条新闻',
          time:'2015-03-22'
        },{
          id:22,
          name:'这是一条新闻',
          time:'2015-03-22'
        },{
          id:23,
          name:'这是一条新闻',
          time:'2015-03-22'
        },{
          id:24,
          name:'这是一条新闻',
          time:'2015-03-22'
        },{
          id:25,
          name:'这是一条新闻',
          time:'2015-03-22'
        }]
      }],
      morkList:[{
        id:3,
        time:'2016',
        detail:[{
          id:31,
          name:'这是一条新闻',
          time:'2015-03-22'
        },{
          id:32,
          name:'这是一条新闻',
          time:'2015-03-22'
        },{
          id:33,
          name:'这是一条新闻',
          time:'2015-03-22'
        },{
          id:34,
          name:'这是一条新闻',
          time:'2015-03-22'
        },{
          id:35,
          name:'这是一条新闻',
          time:'2015-03-22'
        }]
      },{
        id:4,
        time:'2015',
        detail:[{
          id:41,
          name:'这是一条新闻',
          time:'2015-03-22'
        },{
          id:42,
          name:'这是一条新闻',
          time:'2015-03-22'
        },{
          id:43,
          name:'这是一条新闻',
          time:'2015-03-22'
        },{
          id:44,
          name:'这是一条新闻',
          time:'2015-03-22'
        },{
          id:45,
          name:'这是一条新闻',
          time:'2015-03-22'
        }]
      }
      ]
    }
  },
  mounted:function(){ 
  },
  updated:function(){

  },
  methods:{ 
    gotoConpany(){
      this.$router.push({path:'/company'})
    },
    gotoIndex(){
      this.$router.push({path:'/'})
    },
    gotonew(e) {
      this.$router.push({path:'/company/newdetail',query:{id:e}});
      this.$router.go(0)
    },
    getMore(){
      this.loadings = true;
      let this_ = this;
      setTimeout(function(){
        this_.newList = this_.newList.concat(this_.morkList);
        this_.loadings = false;
      },3000)
    }
  }
}
</script>
<style scoped>
#newlist .content{
  position: relative;
  width: 1200px;
  margin:40px auto;
}
#newlist .navTitle{
  width: 100%;
  height: 90px;
  border-bottom:1px solid #F08200;
}
#newlist .navTitle p {
  width:1200px;
  padding-left: 100px;
  font-size: 22px;
  color: #333;
  line-height: 120px;
  height: 90px;
  margin:0 auto;
}
#newlist .content .crumbs{
  position: absolute;
  right: 0;
  top:-75px;
  cursor: default;
}
#newlist .content .crumbs span{
  cursor:pointer;
  font-size: 16px;
  display: inline-block;
  margin:0 8px;
  color: #999;
  font-weight: normal;
}
#newlist .content .item{
  width:1200px;
  position: relative;
  padding: 70px 0 20px 100px;
  border-left: 1px solid #dcdcdc;
  border-top: 1px solid #dcdcdc;

}
#newlist .content .borderbox .item:first-child{
  border-top: 0 
}
#newlist .content .borderbox .item:first-child .year{
  top:0;
}
#newlist .content .item .year{
  position: absolute;
  display: block;
  top:20px;
  left: -20px;
  font-size: 20px;
  color: #333;
  cursor: default;
  background-color: #fcfcfc
}
#newlist .content .item ul li{
    font-size: 18px;
    color: #333;
    line-height: 40px
}
#newlist .content .item ul li span{
  display: inline-block;
  cursor: pointer;
}
#newlist .content .item ul li .news_name{
  float: left;
  max-width: 550px

}
#newlist .content .item ul li .news_time{
  float: right;
  color: #999;
  font-size: 16px
}

.load_more{
    width: 1200px;
    padding: 15px 40%;
    border: 1px solid #dcdcdc;
    cursor: pointer;
}
.inloadEffect{
  float: left;
  font-size: 18px;
  color: #333;
  margin-left: 20px;
  height: 30px;
  line-height: 30px
}
.loadWork{
  height: 30px;
  font-size: 18px;
  color: #333;
  text-align: center;
  line-height: 30px
}
.loadEffect{
            width: 30px;
            height: 30px;
            position: relative;
            float: left;
        }
        .loadEffect span{
            display: inline-block;
            width: 8px;
            height: 8px;
            border-radius: 50%;
            background: #dcdcdc;
            position: absolute;
            -webkit-animation: load 1.04s ease infinite;
        }
        @-webkit-keyframes load{
            0%{
                opacity: 1;
            }
            100%{
                opacity: 0.2;
            }
        }
        .loadEffect span:nth-child(1){
            left: 0;
            top: 50%;
            margin-top:-4px;
            -webkit-animation-delay:0.13s;
        }
        .loadEffect span:nth-child(2){
            left: 3px;
            top: 3px;
            -webkit-animation-delay:0.26s;
        }
        .loadEffect span:nth-child(3){
            left: 50%;
            top: 0;
            margin-left: -4px;
            -webkit-animation-delay:0.39s;
        }
        .loadEffect span:nth-child(4){
            top: 3px;
            right:3px;
            -webkit-animation-delay:0.52s;
        }
        .loadEffect span:nth-child(5){
            right: 0;
            top: 50%;
            margin-top:-4px;
            -webkit-animation-delay:0.65s;
        }
        .loadEffect span:nth-child(6){
            right: 3px;
            bottom:3px;
            -webkit-animation-delay:0.78s;
        }
        .loadEffect span:nth-child(7){
            bottom: 0;
            left: 50%;
            margin-left: -4px;
            -webkit-animation-delay:0.91s;
        }
        .loadEffect span:nth-child(8){
            bottom: 3px;
            left: 3px;
            -webkit-animation-delay:1.04s;
        }
</style>
