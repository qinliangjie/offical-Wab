<template>
  <div id="products" class="index_box">
    <div class="top_wrap">
           <div class="topImg">
             <img :src="lbt[0].images" alt="">
           </div>
           <div class="topmark"></div>
    </div>
    <div class="navTitle">
      <p>{{$t('m.products.gm')}} <span>{{games}}</span></p>
    </div>
    <div class="content">
        <div class="item" v-for="(item,index) in gameDate">
          <img class="itemImg" :src="item.logo" alt="" :class="{' fl':index%2 != 1}" />
          <div class="itemDom " :class="{' fr':index%2 != 1}">
            <p class="itemTitle">{{item.title}}</p>
            <p class="itemContent">{{item.details}}</p>
            <a class="itemA" :href="item.link">{{$t('m.products.oc')}}</a>
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
      navTitle:'产品业务',
      gotoLineL:'进入官网',
      games:'Games',
      lbt:[{images:''}],
      gameDate:[
      ]
    }
  },
  mounted:function(){ 
    this.markPost(this.$i18n.locale)
  },
  updated:function(){

  },
  methods:{ 
    markPost(e){
      var datas = {
          lang:e
      }
      var datasTwo = {
          lang:e,
          img:4
      }
       this.getHttp(this,datasTwo,'/front/banner',function(obj,data){
        obj.lbt= data;
         //丢上服务器之后要删掉，仅测试开发
         // for(var a in obj.lbt){
         //     obj.lbt[a].images = obj.inser_src(obj.lbt[a].images);
         // }
      });
      this.getHttp(this,datas,'/front/product',function(obj,data){
         obj.gameDate = data;
         //丢上服务器之后要删掉，仅测试开发
         // for(var a in obj.gameDate){
         //     obj.gameDate[a].logo = obj.inser_src(obj.gameDate[a].logo);
         // }
      });
    }
  },
  computed: {
    getUserLangs() {
      //vue生命周期计算属性时返回对应的字体以便监听
      return this.$i18n.locale;
    }
  },
  watch:{
      getUserLangs(val) {
         this.markPost(val)
      }
  }
}
</script>
<style scoped>
#products .content{
  position: relative;
  width: 1200px;
  margin:0 auto;
}
#products .navTitle{
  width: 100%;
  height: 90px;
  border-bottom:1px solid #F08200;
}
#products .navTitle p{
  width: 1200px;
  line-height: 120px;
  font-size: 24px;
  color: #f08200;
  margin:0 auto;
  font-weight: bold;
  cursor: default;
}
#products .navTitle p span{
  font-size: 16px;
  color: #999;
  font-weight: normal;
}   
.content .item{
  width: 100%;
  margin-top: 39px;
  margin-bottom: 55px;
}
.content .item .itemImg{
  width: 460px;
  height: 271px;
  float: right;
}
.content .item .fl{
  margin-right: 82px;
  float: left !important
}
.content .item .fr{
  float: right !important
}
.content .item .itemDom{
  width: 657px;
  height: 271px;
  float: left
}
.content .item .itemDom .itemTitle{
  font-size: 22px;
  color: #333;
  margin:20px 0;
}
.content .item .itemDom .itemContent{
  overflow: hidden;
  max-height: 120px;
  min-height: 100px;
  font-size: 16px;
  color: #333;
  text-indent: 2em
}
.content .item .itemDom .itemA{
  display: block;
  width: 111px;
  height: 33px;
  font-size: 16px;
  color: white;
  line-height: 33px;
  text-align: center;
  background-color: #F08200;
  margin-top: 37px;
  cursor: pointer;
  text-decoration: none;
}
.fl .itemA{
  float: left;
}
.fr .itemA{
  float: right;
}
</style>
