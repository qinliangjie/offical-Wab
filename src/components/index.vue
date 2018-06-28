<template>
  <div id="index" class="index_box">
    <div class="banner_wrap">
      <div  class="swiper-container gallery-top swiper-container-horizontal">  
        <div class="swiper-wrapper">  
           <div v-for="value in lbt" class="swiper-slide swiper-slide-next" style="width: 100%; margin-right: 10px;" v-bind:style="{backgroundImage: 'url(' + value.imgs + ')'}"></div>  
        </div> 
        <div class="swiper-pagination"></div>  
    </div>   
    </div>
    <div class="content">
        <div class="fl companyImg">
          <img src="../../static/img/index2.png" alt="" class="companyImgUp" />
          <div class="markImg"></div>
          <img src="../../static/img/index1.png" alt="" class="companyImgDown" />
        </div>
        <div class="fl companyDom">
          <div class="titleDom">
            {{$t('m.home.about')}}
            <i class="count_down"></i>
            
          </div>
          <div class="detail">
            {{msg}}
          </div>
        </div>
        <div class="fl companyNew">
          <div class="titleDom">
            {{$t('m.home.pr')}}
            <i class="count_down"></i>
            
          </div>
          <ul class="newsul" >
            <li class="clear" v-for="(item,index) in notic" :key="item.id" v-on:click="gotonew(item.id)">
              <span class="fl ellipsis-one">{{item.title}}</span><span class="fr">{{item.time}}</span>
            </li>
          </ul>
        </div>
        <div class="fl newImg">
          <img src="../../static/img/index3.png" alt="" />
        </div>
        <div class="clear"></div>
        <BackTop ></BackTop><!-- 返回顶部 -->
    </div>
  </div>
</template>

<script>
import Swiper from 'swiper'
import 'swiper/dist/css/swiper.min.css'
export default {
  data () {
    return {
      msg: '苏州爱洛克信息技术有限公司成立于2012年，注册资本1051万。公司总部位于苏州市工业园区，分别在台湾新北、曼谷舍友驻地分公司，创始团队均来自Activision Blizzard等知名游戏公司，平均从业10年以上，有丰富的AAA级游戏制作经验和发行经验。团队曾在中国及全球AppStore, GooglePlay Store成功发行过多款Top 10游戏。',
      notic:[{
              title:'这是一则新闻',
              id:'1',
              time:'2015-06-12'
            },{
              title:'这是一则新闻啊',
              id:'2',
              time:'2015-06-13'
            },{
              title:'这是一则新闻啊啊',
              id:'3',
              time:'2015-06-13'
            }
            ,{
              title:'这是一则新闻啊啊啊',
              id:'4',
              time:'2015-06-13'
            }
            ,{
              title:'这是一则新闻啊啊啊啊',
              id:'5',
              time:'2015-06-13'
            }
            ,{
              title:'这是一则新闻啊啊啊啊啊',
              id:'6',
              time:'2015-06-13'
            }],
      lbt: [  
        {  
          'imgs': '../../static/img/index1.png'  
        }, {  
          'imgs': '../../static/img/index2.png'  
        }, {  
          'imgs': '../../static/img/index3.png'  
        }  
      ],
      galleryTop :'' 
    }
  },
  mounted:function(){
    this.lunbo() ;
    
  },
  updated:function(){

  },
  methods:{
    lunbo(){
       new Swiper('.swiper-container', {
            pagination: {
              el: '.swiper-pagination',
              clickable: true
            }
          })  
    },
    gotonew(e) {
      this.$router.push({path:'/company/newdetail',query:{id:e}});
    },
    markPost(){
      // this.postHttp(this,data,'login',function(obj,data){
            //data是传参，this是当前vue实例，login是接口名，obj是你传入的this也就是当前实例，data是接口返回值
      // });
    }
  }
}
</script>
<style scoped>
#index .banner_wrap{
    overflow: hidden;
    height: 897px;
    margin-bottom: 60px;
}
#index .content{
  width: 1200px;
  margin:0 auto;
  position: relative;
}
#index .companyImg{
  width: 500px;
  height: 400px;
  margin-right: 67px;
  margin-bottom:54px;
  position: relative;
}
#index .companyImg img,.markImg{
  width: 450px;
  height: 350px;
  position: absolute;
  border-radius: 4px
}
#index .markImg{
  top: 0;
  left: 0;
  z-index: 100;
  background-color: rgba(61,61,61,.8);
}
#index .companyImg .companyImgUp{
  top: 0;
  left: 0;
  z-index: 99;
}
#index .companyImg .companyImgDown{
  top: 40px;
  left: 50px;
  z-index: 999;
  -webkit-box-shadow:3px 3px 10px rgba(0,0,0,.5);  
  -moz-box-shadow:3px 3px 10px rgba(0,0,0,.5);  
  box-shadow:3px 3px 10px rgba(0,0,0,.5);  
}
#index .companyDom{
  width: 575px;
  height: 400px;
  margin-bottom:54px;
  overflow: hidden;
}
.titleDom{
  font-size: 24px;
  color: #f08200;
  line-height: 50px;
  position: relative;
  cursor: default;
}
.titleDom .count_down{
    display: block;
    height: 4px;
    width: 30px;
    background: #F08200;
    overflow: hidden;
    position: absolute;
    left: 0;
    top: 100%;
}
.detail{
  font-size: 18px;
  color: #333;
  line-height: 36px;
  text-indent: 2em;
  margin-top: 41px;
  cursor: default;
}
.companyNew{
  width: 720px;
  height: 300px;
  margin-right: 100px;
  margin-bottom: 60px;
}
.companyNew ul{
  width: 100%;
  margin-top: 24px;
  overflow: hidden;
}
.companyNew ul li{
  width: 100%;
  font-size: 18px;
  line-height: 36px;
  cursor: default;
}
.companyNew ul li span:first-child{
  max-width: 580px;
}
.companyNew ul li span:last-child{
  color: #999;
  font-size: 16px
}
.newImg{
  width: 380px;
  height: 280px;
  margin-bottom: 60px;
}
.newImg img{
  border-radius: 8px
}


.animated {
        animation-duration: 1s;
        animation-fill-mode: both;
    }

    @keyframes fadeInRight {
        from {
            opacity: 0;
            transform: translate3d(20%, 0, 0);
        }

        to {
            opacity: 1;
            transform: none;
        }
    }
    @keyframes fadeInLeft {
        from {
            opacity: 0;
            transform: translate3d(-20%, 0, 0);
            
        }
        to {
            opacity: 1;
            transform: translate3d(0, 0, 0); 
        }
    }
    .fadeInRight {
        animation-name: fadeInRight;
    }
    .fadeInLeft{
       animation-name: fadeInLeft;
    }

    .swiper-container{
      width: 100%;
      height: 100%
    }
    
</style>
