<template>
  <div id="index" class="index_box">
    <div class="banner_wrap">
      <swiper :options="swiperOption">
        <swiper-slide v-for="value in lbt">
          <img :src="value.images" />
        </swiper-slide>
        <div class="swiper-pagination"  slot="pagination"></div>
      </swiper>  
    </div>
    <div class="content">
        <div class="fl companyImg" v-if="indimg.length==1">
          <img v-bind:src="indimg[0].images" alt="" class="companyImgUp" />
          <div class="markImg"></div>
          <img v-bind:src="indimg[0].images" alt="" class="companyImgDown" />
        </div>
        <div class="fl companyImg" v-else-if="indimg.length==2">
          <img v-bind:src="indimg[0].images" alt="" class="companyImgUp" />
          <div class="markImg"></div>
          <img v-bind:src="indimg[1].images" alt="" class="companyImgDown" />
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
            <li  v-for="(item,index) in notic" :key="item.id" v-on:click="gotonew(item.id)">
              <span class="fl ellipsis-one">{{item.message_title}}</span><span class="fr">{{item.uptime}}</span>
              <div class="clear"></div>
            </li>
          </ul>
        </div>
        <div class="fl newImg" v-if="newimg.length==1">
          <img v-bind:src="newimg[0].images" alt="" />
        </div>
        <div class="clear"></div>
        <BackTop ></BackTop><!-- 返回顶部 -->
    </div>
  </div>
</template>

<script>
import 'swiper/dist/css/swiper.css' 
import { swiper, swiperSlide } from 'vue-awesome-swiper'
export default {
  components: {
    swiper,
    swiperSlide
  },
  data () {
    return {
      swiperOption: {
        pagination:{
          el:'.swiper-pagination',
          clickable: true
        },
        slidesPerView: 1,
        autoplay:{
          delay:5000,
          disableOnInteraction:false
        },
        observer:true,//修改swiper自己或子元素时，自动初始化swiper
        observeParents:true//修改swiper的父元素时，自动初始化swiper
      },
      msg: '',
      notic:[],
      lbt: [  
      ],
      indimg:[],
      newimg:[],
      galleryTop :'' 
    }
  },
  mounted:function(){
    
    this.markPost(this.$i18n.locale);
  },
  updated:function(){

  },
  computed: {
    getUserLangs() {
      return this.$i18n.locale;
    }
  },
  watch:{
      getUserLangs(val) {
        this.markPost(this.$i18n.locale)
      }
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
    markPost(e){
      var datas = {
          lang:e
      }
      var datasTwo = {
        lang:e,
        img:1
      }
      this.getHttp(this,datas,'/front/intro',function(obj,data){
         obj.msg = data.details
      });
      this.getHttp(this,datas,'/front/news',function(obj,data){
         obj.notic = data
      });
      this.getHttp(this,datasTwo,'/front/banner',function(obj,data){
        obj.lbt = data;
      });
      this.getHttp(this,'','/front/indimg',function(obj,data){
        obj.indimg=[];obj.newimg=[];
        for(var a in data){
          //data[a].images = obj.inser_src(data[a].images);
          if(data[a].mark=='7'){
            obj.indimg.push(data[a]);
          }else if(data[a].mark=='8'){
            obj.newimg.push(data[a]);
          }
        }
      });
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
.banner_wrap,.swiper-container{
  width:100%;
  height: 897px;
}
.banner_wrap,.swiper-container img{
  width:100%;
 height: 897px;
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
  height: 290px;
  overflow: hidden;
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
  height: 220px
}
.companyNew ul li{
  width: 100%;
  font-size: 18px;
  line-height: 36px;
  cursor: default;
}
.companyNew ul li:hover{
  opacity: .6
}
.companyNew ul li span:first-child{
  max-width: 580px;
}
.companyNew ul li span.fr{
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
