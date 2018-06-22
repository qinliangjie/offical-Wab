<template>
  <div id="corporate" class="index_box">
    <div class="top_wrap">
           <div class="topImg">
             <img src="../../static/img/topimg.png" alt="">
           </div>
           <div class="topmark"></div>
    </div>
    <div class="content">
        <p class="total_title">
           {{cortitle}}
           <span>{{titleEn}}</span>
        </p>
        <!-- 核心理念头部公共样式 -->
        <div class="all_top">
            {{core}}
        </div>
        <!-- 公共模块样式 -->
        <div class="all_left">
            <img class="core_img" :src="visionData.img" alt="" />
            <p class="detail_title">{{vision}}</p>
            <p class="detail_">{{visionData.content}}</p>
        </div>
        <div class="all_left">
            <img class="core_img" :src="missionData.img" alt="" />
            <p class="detail_title">{{mission}}</p>
            <p class="detail_">{{missionData.content}}</p>
        </div>
        <!-- 人才发展头部公共样式 -->
        <div class="all_top">
            {{talent}}
        </div>
        <div class="all_row">
          {{talentData.content}}
        </div>
        <!-- 办公环境头部公共样式 -->
        <div class="all_top">
            {{office}}
        </div>
        <!-- 公共左边样式 -->
        <div class="office_left">
            <img class="office_img" :src="officeData.img" alt="" />
        </div>
        <!-- 公共右边样式 -->
        <div class="all_right">
            <p class="detail_title">{{officeData.content}}</p>
        </div>

         <!-- 员工活动头部公共样式 -->
        <div class="all_top">
            {{staff}}
        </div>
        <!-- 公共模块样式 -->
        <div class="all_left" v-for="item in staffData">
            <img class="core_img" :src="item.img" alt="" />
            <p class="detail_">{{item.content}}</p>
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
      cortitle:'企业文化',
      titleEn:'Culture',
      core:'核心理念',
      vision:'愿景',
      mission:'使命',
      talent:'人才发展',
      office:'办公环境',
      staff:'员工活动',
      visionData:{
        img:'../../static/img/index4.png',
        content:'苏州爱洛克信息技术有限公司成立于2012年，注册资本1051万。公司总部位于苏州市工业园区，分别在台湾新北、曼谷舍友驻地分公司，创始团队均来自Activision Blizzard等知名游戏公司，平均从业10年以上，有丰富的AAA级游戏制作经验和发行经验。团队曾在中国及全球AppStore, GooglePlay Store成功发行过多款Top 10游戏。'
      },
      missionData:{
        img:'../../static/img/index4.png',
        content:'苏州爱洛克信息技术有限公司成立于2012年，注册资本1051万。公司总部位于苏州市工业园区，分别在台湾新北、曼谷舍友驻地分公司，创始团队均来自Activision Blizzard等知名游戏公司，平均从业10年以上，有丰富的AAA级游戏制作经验和发行经验。团队曾在中国及全球AppStore, GooglePlay Store成功发行过多款Top 10游戏。'
      },
      talentData:{
        content:'苏州爱洛克信息技术有限公司成立于2012年，注册资本1051万。公司总部位于苏州市工业园区，分别在台湾新北、曼谷舍友驻地分公司，创始团队均来自Activision Blizzard等知名游戏公司，平均从业10年以上，有丰富的AAA级游戏制作经验和发行经验。团队曾在中国及全球AppStore, GooglePlay Store成功发行过多款Top 10游戏。'
      },
      officeData:{
        img:'../../static/img/office.png',
        content:'苏州爱洛克信息技术有限公司成立于2012年，注册资本1051万。公司总部位于苏州市工业园区，分别在台湾新北、曼谷舍友驻地分公司，创始团队均来自Activision Blizzard等知名游戏公司，平均从业10年以上，有丰富的AAA级游戏制作经验和发行经验。团队曾在中国及全球AppStore, GooglePlay Store成功发行过多款Top 10游戏。'
      },
      staffData:[{
        img:'../../static/img/staff.png',
        content:'苏州爱洛克信息技术有限公司成立于2012年，注册资本1051万。公司总部位于苏州市工业园区，分别在台湾新北、曼谷舍友驻地分公司，创始团队均来自Activision Blizzard等知名游戏公司，平均从业10年以上，有丰富的AAA级游戏制作经验和发行经验。团队曾在中国及全球AppStore, GooglePlay Store成功发行过多款Top 10游戏。'
      },{
        img:'../../static/img/staff.png',
        content:'苏州爱洛克信息技术有限公司成立于2012年，注册资本1051万。公司总部位于苏州市工业园区，分别在台湾新北、曼谷舍友驻地分公司，创始团队均来自Activision Blizzard等知名游戏公司，平均从业10年以上，有丰富的AAA级游戏制作经验和发行经验。团队曾在中国及全球AppStore, GooglePlay Store成功发行过多款Top 10游戏。'
      }]
    }
  },
  mounted:function(){ 
  },
  updated:function(){

  },
  methods:{ 
  }
}
</script>
<style scoped>
#corporate .content{
  padding-left: 200px;
  width: 1200px;
  margin:0 auto;
  position: relative;
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
  text-indent: 2em
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
    max-height: 166px
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
  float: left
}
.all_left .office_img{
  width: 470px;
  height: 311px
}
</style>
