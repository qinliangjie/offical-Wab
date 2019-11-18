<template>
  <div id="corporate" class="index_box">
    <div class="top_wrap" >
           <div class="topImg">
             <img :src="lbt[0].images" alt="">
           </div>
           <div class="topmark"></div>
    </div>
    <div class="content">
        <NavLeft v-bind:navlist="navlist"></NavLeft>
        <div class="right_part">
        <p class="total_title">
           {{$t('m.culture.cu')}}
           <span>{{titleEn}}</span>
        </p>
        <!-- 核心理念头部公共样式 -->
        <div class="all_top">
            {{$t('m.culture.cv')}}
        </div>
        <!-- 公共模块样式 -->
        <div class="all_left">
            <img class="core_img" :src="visionData.logo" alt="" />
            <p class="detail_title">{{$t('m.culture.vs')}}</p>
            <p class="detail_">{{visionData.details}}</p>
        </div>
        <div class="all_left">
            <img class="core_img" :src="missionData.logo" alt="" />
            <p class="detail_title">{{$t('m.culture.ms')}}</p>
            <p class="detail_">{{missionData.details}}</p>
        </div>
        <!-- 人才发展头部公共样式 -->
        <div class="all_top">
            {{$t('m.culture.td')}}
        </div>
        <div class="all_row">
          {{talentData.details}}
        </div>
        <!-- 办公环境头部公共样式 -->
        <div class="all_top">
            {{$t('m.culture.we')}}
        </div>
        <!-- 公共左边样式 -->
        <div class="office_left">
            <img class="office_img" :src="officeData.logo" alt="" />
        </div>
        <!-- 公共右边样式 -->
        <div class="all_right">
            <p class="detail_title">{{officeData.details}}</p>
        </div>

         <!-- 员工活动头部公共样式 -->
        <div class="all_top">
            {{$t('m.culture.ea')}}
        </div>
        <!-- 公共模块样式 -->
        <div class="all_left" v-for="item in staffData">
            <img class="core_img" :src="item.logo" alt="" />
            <p class="detail_title">{{item.title}}</p>
            <p class="detail_">{{item.details}}</p>
        </div>
        </div>
        <div class="clear"></div>
        <BackTop ></BackTop>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      navlist:[{
        name:'',
        id:0
      },{
        name:'',
        id:1
      },{
        name:'',
        id:2
      },{
        name:'',
        id:3
      }],
      lbt:[{images:''}],
      vision:'愿景',
      mission:'使命',
      titleEn:'Culture',
      langs:'zh',
      visionData:'',
      missionData:'',
      talentData:'',
      officeData:'',
      staffData:[]
    }
  },
  mounted:function(){ 
    this.showList();
    this.markPost(this.$i18n.locale)
  },
  updated:function(){

  },
  methods:{ 
    
    showList:function(){
      this.navlist[0].name = this.$t('m.culture.cv');
      this.navlist[1].name = this.$t('m.culture.td');
      this.navlist[2].name = this.$t('m.culture.we');
      this.navlist[3].name = this.$t('m.culture.ea');
    },
    markPost(e){
      var datas = {
          lang:e
      }
      var datasTwo = {
          lang:e,
          img:3
      }
       this.getHttp(this,datasTwo,'/front/banner',function(obj,data){
        obj.lbt= data;
         //丢上服务器之后要删掉，仅测试开发
         // for(var a in obj.lbt){
         //     obj.lbt[a].images = obj.inser_src(obj.lbt[a].images);
         // }
      });
      this.getHttp(this,datas,'/front/vision',function(obj,data){
         obj.visionData = data;
         //丢上服务器之后要删掉，仅测试开发
         //obj.visionData.logo = obj.inser_src(obj.visionData.logo);
      });
      this.getHttp(this,datas,'/front/mission',function(obj,data){
         obj.missionData = data;
         //丢上服务器之后要删掉，仅测试开发
         //obj.missionData.logo = obj.inser_src(obj.missionData.logo);
      });
      this.getHttp(this,datas,'/front/talents',function(obj,data){
         obj.talentData = data;
      });
      this.getHttp(this,datas,'/front/office',function(obj,data){
         obj.officeData = data;
         //丢上服务器之后要删掉，仅测试开发
         //obj.officeData.logo = obj.inser_src(obj.officeData.logo);
      });
      this.getHttp(this,datas,'/front/staff',function(obj,data){
         obj.staffData = data;
         //丢上服务器之后要删掉，仅测试开发
         // for(var a in obj.staffData){
         //     obj.staffData[a].logo = obj.inser_src(obj.staffData[a].logo);
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
         this.showList();
         this.markPost(val)
      }
  }
}
</script>
<style scoped>
#corporate .content{
  width: 1200px;
  margin:0 auto;
  position: relative;
}
.right_part{
  position: relative;
  float: right;
  width: 1000px;
}

.total_title{
    font-size: 24px;
    color: #f08200;
    font-weight: bold;
    cursor: default;
    margin:46px 0 16px 0;
}
.total_title span {
    font-size: 16px;
    color: #999;
    font-weight: normal;
}
.all_top{
  width: 1000px;
  height: 57px;
  color:white;
  float: left;
  background-color: #FFA842;
  line-height: 57px;
  padding-left: 32px;
  font-size: 22px;
  margin-bottom: 24px
}
.all_left{
  margin-right: 58px;
  margin-bottom:60px;
  float: left;
  width: 471px;  
}
.all_right{
  float: left;
  margin-bottom:31px;
  width: 471px; 
}
.all_right p{
  text-indent: 2em;
  line-height: 32px
}
.all_left:nth-child(even){
  margin-right: 0px
}
.all_left .core_img{
  width: 471px;
  height: 201px;
}
.all_left .detail_title{
  font-size: 20px;
  color: #333;
  margin:15px 0 0 0;
}
.all_left .detail_{
    text-indent: 2em;
    font-size: 16px;
    color: #333;
    margin-top: 15px;
    max-height: 166px;
    overflow: hidden;
    line-height: 32px
}
.office_left{
  margin-right: 40px;
  margin-bottom:31px;
  float: left;
  width: 471px;
}
.all_row{
  margin:0px 0 31px 0;
  font-size: 16px;
  color: #333;
  text-indent: 2em;
  float: left;
  max-width: 1000px;
  word-break: break-all;
}
.all_left .office_img{
  width: 470px;
  height: 311px
}
</style>
