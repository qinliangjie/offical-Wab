<template>
  <div id="newdetail" class="index_box">
    <div class="top_wrap">
           <div class="topImg">
             <img :src="lbt[0].images" alt="">
           </div>
           <div class="topmark"></div>
    </div>
    <div class="navTitle">
      <p>{{$t('m.company.news')}} <span>{{games}}</span></p>
      
    </div>
    <div class="content">
      <div class="crumbs">
         <img src="../../../static/img/gap.png" alt="" />
         <span v-on:click="gotoIndex()">{{$t('m.header.home')}}</span>
         >
         <span v-on:click="gotoConpany()">{{$t('m.company.prr')}}</span>
         
      </div>
      <div class="airtcle">
        <p class="air_title">
          {{airtcleData.message_title}}
        </p>
        <p class="air_time">
         {{airtcleData.uptime}}
        </p>
        <div class="share" v-if="share">
          <span class='st_sharethis_large' displayText='ShareThis'></span>
          <span class='st_facebook_large' displayText='Facebook'></span>
          <span class='st_twitter_large' displayText='Tweet'></span>
          <span class='st_linkedin_large' displayText='LinkedIn'></span>
          <span class='st_email_large' displayText='Email'></span> 
        </div>
        <div class="air_detail" v-html="airtcleData.message_details">
        </div>
      </div>
      <BackTop ></BackTop><!-- 返回顶部 -->
    </div>

  </div>
</template>

<script>

export default {
  data () {
    return {
      share:true,
      navTitle:'新闻详情',
      games:'News details',
      lbt:[{images:''}],
      airtcleData:{
        id:'',
        message_details:'',
        message_title:'',
        uptime:''
      }
    }
  },
  mounted:function(){ 
    stLight.options({publisher: "5899e9df-0026-43e6-8a6c-cb461a799f5e", doNotHash: false, doNotCopy: false, hashAddressBar: false});
    stButtons.locateElements();
    this.markPost(this.$i18n.locale,this.$route.query.id);
  },
  updated:function(){

  },
  created: function(){
  },
  computed: {
    getUserLangs() {
      return this.$i18n.locale;
    }
  },
  watch:{
      getUserLangs(val) {
        this.markPost(val,this.$route.query.id)
      }
  },
  methods:{ 
    gotoConpany(){
      this.$router.push({path:'/company/newlist'})
    },
    gotoIndex(){
      this.$router.push({path:'/'})
    },
    markPost(e,c){
      var datas = {
          lang:e,
          id:c
      }
      var datasTwo = {
          lang:e,
          img:2
      }
      this.getHttp(this,datas,'/front/newsdetails',function(obj,data){
          obj.airtcleData = data
      });
      this.getHttp(this,datasTwo,'/front/banner',function(obj,data){
        obj.lbt= data;
         
      });
    }
  }
}
</script>
<style scoped>
#newdetail .content{
  position: relative;
  width: 1200px;
  margin:0 auto;
}
#newdetail .navTitle{
  width: 100%;
  height: 90px;
  border-bottom:1px solid #F08200;
}
#newdetail .navTitle p{
  width: 1200px;
  line-height: 120px;
  font-size: 24px;
  color: #f08200;
  margin:0 auto;
  font-weight: bold;
  cursor: default;
}
#newdetail .navTitle p span{
  font-size: 16px;
  color: #999;
  font-weight: normal;
}   
#newdetail .content{
  position: relative;
}
#newdetail .content .crumbs{
  position: absolute;
  right: 0;
  top:-35px;
  cursor: default;
}
#newdetail .content .crumbs span{
  cursor:pointer;
  font-size: 16px;
  display: inline-block;
  margin:0 8px;
  color: #999;
  font-weight: normal;
}
#newdetail .content .airtcle{
  width: 1000px;
  margin:0 auto;
  position: relative;
}
#newdetail .content .airtcle .air_title{
  text-align: center;
  font-size: 24px;
  color: #333;
  padding-top: 40px;
  width: 600px;
  margin: 0 auto;
  word-wrap: break-word;
}
#newdetail .content .airtcle .air_time{
  text-align: center;
  color: #999;
  font-size: 18px;
  width: 600px;
  margin:16px auto 29px auto;
}
#newdetail .content .airtcle .share{
  position: absolute;
  right: 0;
  top:70px;
  right: -20px
}
#newdetail .content .airtcle .air_detail{
  font-size: 16px;
  color: #333;
  margin-bottom: 100px;
  line-height: 32px
}
#newdetail .content .airtcle .air_detail p{
  text-indent: 2em
}
</style>
