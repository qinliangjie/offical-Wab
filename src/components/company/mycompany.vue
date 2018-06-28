<template>
  <div id="company" class="index_box">
    <div class="top_wrap">
           <div class="topImg">
             <img src="../../../static/img/topimg.png" alt="">
           </div>
           <div class="topmark"></div>
    </div>
    <div class="content">
        <NavLeft v-bind:navlist="navlist"></NavLeft>
        <div class="right_part">
        <p class="total_title">
           {{$t('m.company.aboutus')}}
           <span>{{aboutEn}}</span>
        </p>
        <!-- 头部公共样式 -->
        <div class="all_top">
            {{$t('m.company.about')}}
        </div>
        <div class="all_row">
          {{profileData.content}}
        </div>
        <!-- 头部公共样式 -->
        <div class="all_top">
            {{$t('m.company.pr')}}
            <span v-on:click="gotoList()">{{$t('m.company.va')}}</span>
        </div>
        <div class="article_left">
          <ul>
            <li class="clear" v-for="(item,index) in newData" :key="item.id" v-on:click="gotonew(item.id)">
              <span class="fl ellipsis-one">{{item.title}}</span><span class="fr">{{item.time}}</span>
            </li>
          </ul>
        </div>
        <div class="article_right">
          <img src="../../../static/img/index3.png" alt="" />
        </div>
        <!-- 头部公共样式 -->
        <div class="all_top">
            {{$t('m.company.rd')}}
        </div>
        <div class="development_">
            <div class="deve_item" v-for="item in deveData">
              <span class="deve_year">{{item.year}}</span>
              <div class="deve_incident">{{item.incident}}</div>
            </div>
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
      }],
      about:'关于我们',
      aboutEn:'About us',
      dynamic:'公司动态',
      gotoListdata:'查看全部',
      profile:'公司简介',
      development:'发展历程',
      profileData:{
        content:'苏州爱洛克信息技术有限公司成立于2012年，注册资本1051万。公司总部位于苏州市工业园区，分别在台湾新北、曼谷舍友驻地分公司，创始团队均来自Activision Blizzard等知名游戏公司，平均从业10年以上，有丰富的AAA级游戏制作经验和发行经验。团队曾在中国及全球AppStore, GooglePlay Store成功发行过多款Top 10游戏。'
      },
      newData:[{
        id:'1',
        title:'这是一则新闻',
        time:'2018-5-5'
      },{
        id:'2',
        title:'这是一则新闻',
        time:'2018-5-56'
      },{
        id:'3',
        title:'这是一则新闻',
        time:'2018-5-56'
      },{
        id:'4',
        title:'这是一则新闻',
        time:'2018-5-56'
      },{
        id:'5',
        title:'这是一则新闻',
        time:'2018-5-567'
      },{
        id:'6',
        title:'这是一则新闻',
        time:'2018-5-56'
      },{
        id:'7',
        title:'这是一则新闻',
        time:'2018-5-56'
      }],
      deveData:[{
        id:"1",
        year:'2011',
        incident:'推出Worm VS Bird与全球知名发行商Chillingo合作发行全球iOS市场，一起打造Angry Bird后继产品 推出Worm VS Bird与全球知名发行商Chillingo合作发行全球iOS市场，一起打造Angry Bird后继产品'
      },{
        id:"2",
        year:'2012',
        incident:'推出Worm VS Bird与全球知名发行商Chillingo合作发行全球iOS市场，一起打造Angry Bird后继产品 推出Worm VS Bird与全球知名发行商Chillingo合作发行全球iOS市场，一起打造Angry Bird后继产品'
      },{
        id:"3",
        year:'2013',
        incident:'推出Worm VS Bird与全球知名发行商Chillingo合作发行全球iOS市场，一起打造Angry Bird后继产品 推出Worm VS Bird与全球知名发行商Chillingo合作发行全球iOS市场，一起打造Angry Bird后继产品'
      },{
        id:"4",
        year:'2014',
        incident:'推出Worm VS Bird与全球知名发行商Chillingo合作发行全球iOS市场，一起打造Angry Bird后继产品 推出Worm VS Bird与全球知名发行商Chillingo合作发行全球iOS市场，一起打造Angry Bird后继产品'
      },{
        id:"5",
        year:'2015',
        incident:'推出Worm VS Bird与全球知名发行商Chillingo合作发行全球iOS市场，一起打造Angry Bird后继产品 推出Worm VS Bird与全球知名发行商Chillingo合作发行全球iOS市场，一起打造Angry Bird后继产品推出Worm VS Bird与全球知名发行商Chillingo合作发行全球iOS市场，一起打造Angry Bird后继产品 推出Worm VS Bird与全球知名发行商Chillingo合作发行全球iOS市场，一起打造Angry Bird后继产品'
      },{
        id:"6",
        year:'2016',
        incident:'推出Worm VS Bird与全球知名发行商Chillingo合作发行全球iOS市场，一起打造Angry Bird后继产品 推出Worm VS Bird与全球知名发行商Chillingo合作发行全球iOS市场，一起打造Angry Bird后继产品'
      },{
        id:"7",
        year:'2017',
        incident:'推出Worm VS Bird与全球知名发行商Chillingo合作发行全球iOS市场，一起打造Angry Bird后继产品 推出Worm VS Bird与全球知名发行商Chillingo合作发行全球iOS市场，一起打造Angry Bird后继产品'
      },{
        id:"8",
        year:'2018',
        incident:'推出Worm VS Bird与全球知名发行商Chillingo合作发行全球iOS市场，一起打造Angry Bird后继产品 推出Worm VS Bird与全球知名发行商Chillingo合作发行全球iOS市场，一起打造Angry Bird后继产品'
      }
      ]
    }
  },
  mounted:function(){ 
    this.navlist[0].name = this.$t('m.company.about');
    this.navlist[1].name = this.$t('m.company.pr');
    this.navlist[2].name = this.$t('m.company.rd');
  },
  updated:function(){

  },
  methods:{ 
    gotonew(e) {
      this.$router.push({path:'/company/newdetail',query:{id:e}});
    },
    gotoList() {
      this.$router.push({path:'/company/newlist'});
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
        this.navlist[0].name = this.$t('m.company.about');
        this.navlist[1].name = this.$t('m.company.pr');
        this.navlist[2].name = this.$t('m.company.rd');
      }
  }
}
</script>
<style scoped>
#company .content{
  width: 1200px;
  margin:0 auto;
  position: relative;
}

.right_part{
  position: relative;
  float: right;
  width: 1000px;
}
.article_left{
  float: left;
  width: 575px;
  margin-bottom: 31px
}
.article_left ul{
  margin-top: 15px
}
.article_left ul li{
    width: 100%;
    font-size: 18px;
    line-height: 36px;
    cursor: default;
}
.article_left ul li span:first-child {
    max-width: 480px;
}
.article_left ul li span:last-child {
    color: #999;
    font-size: 16px;
}
.article_right{
  float: left;
  width: 380px;
  height: 270px;
  margin-left: 41px;
  margin-bottom: 31px
}
.article_right img{
  height: 100%;
  width: 100%;
  border-radius: 8px
}
.development_{
  float: left;
  width: 900px;
  margin-left: 32px;
  padding-left: 83px;
  padding-bottom:33px;
  margin-top: 20px;
  border-left: 4px solid #f08200
}
.development_ .deve_item{
  margin-bottom: 80px;
  position: relative;
}
.development_ .deve_year{
  position: absolute;
  width: 78px;
  height: 77px;
  top: -10px;
  left: -118px;
  font-size: 16px;
  color: #f08200;
  padding-left: 16px;
  line-height: 70px;
  display: block;
  background: url('../../../static/img/year.png') no-repeat;
}
.all_top span{
  display: block;
  float: right;
  cursor: pointer;
  color: white;
  margin-right: 20px;
  font-size: 18px
}
</style>
