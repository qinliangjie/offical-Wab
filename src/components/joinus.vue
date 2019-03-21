<template>
  <div id="joinus" class="index_box">
    <div class="top_wrap">
           <div class="topImg">
             <img :src="lbt[0].images" alt="">
           </div>
           <div class="topmark"></div>
    </div>
    <div class="navTitle">
      <p>{{$t('m.joinus.ju')}} <span>Join Us</span></p>
    </div>
    <div class="content">
        <div class="item">
          <p class="top_title">{{$t('m.joinus.ps')}}
            <span></span>
          </p>
          <div class="item_tab">
              <span>{{$t('m.joinus.pos')}}： </span>
              <span :class="activeList == '0'? 'active': ''" @click="showJob('0',langs)">{{$t('m.joinus.al')}}</span>
              <span v-for="item in joblist" :class="activeList == item.id? 'active': ''" :key="item.id" @click="showJob(item.id,langs)">{{item.jobname}}</span>
              <div class="clear"></div>
          </div>
          <table class="item_table">
            <tr>
              <th>{{$t('m.joinus.ji')}}</th>
              <th width="300px">{{$t('m.joinus.ed')}}</th>
              <th width="450px">{{$t('m.joinus.ex')}}</th>
              <th>{{$t('m.joinus.de')}}</th>
            </tr>
            <tbody>
              <tr v-for="item in morkList">
                <td>{{item.name}}</td>
                <td>{{item.education}}</td>
                <td>{{item.work}}</td>
                <td>{{item.uptime}}</td>
              </tr>
            </tbody>
          </table>
          <div class="clear"></div>
        </div>
        <div class="item">
          <p class="top_title">{{$t('m.joinus.cu')}}
            <span></span>
          </p>
          <div class="map">
            <div class="map_left fl">
              <div id="map">
                
              </div>
            </div>
            <div class="map_right fl">
              <p class="map_title">{{companyName}}</p>
              <p class="map_p">{{$t('m.joinus.ph')}}： {{tellphone}}</p>
              <p class="map_p">{{$t('m.joinus.em')}}： {{email}}</p>
              <p class="map_p">{{$t('m.joinus.ad')}}： {{address}}</p>
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <BackTop ></BackTop><!-- 返回顶部 -->
    </div>

  </div>
</template>

<script>

//import {MP} from '../../static/js/map.js'
export default {
  data () {
    return {
      langs:'zh',
      activeList:'0',
      navTitle:'加入我们',
      lbt:[{images:''}],
      hiring:'招聘职位',
      connectUs:'联系我们',
      games:'Join Us',
      job:'职位',
      tabTh:['职位信息','学历','工作经验','更新时间'],
      morkList:[],
      joblist:[],
      companyName:'',
      tellphone:'',
      email:'',
      address:'',
      ak:'ueIq0ltF2bWRkHMsQi848Gjbcb7iCKby'
    }
  },
  mounted:function(){ 
    this.langs = this.$i18n.locale;
    this.markPost(this.langs,this.activeList);
    this.showJob(this.activeList,this.langs);
    var map = new BMap.Map("map");          // 创建地图实例  
    var point = new BMap.Point(120.744358,31.263728);  // 创建点坐标  
    var marker = new BMap.Marker(point);  // 创建标注
        map.addOverlay(marker);  
        map.centerAndZoom(point, 17); 
    var opts = { 
            offset:{
                  width:0,
                  height:-30
                  },
            width:100,
            height:50,    // 信息窗口高度
            title : "苏州爱洛克信息技术有限公司" 
        };              // 初始化地图，设置中心点坐标和地图级别  
    var infoWindow = new BMap.InfoWindow("地址：苏州市工业园区若水路388号苏州纳米技术国家大学科技园E幢303室", opts);
        map.openInfoWindow(infoWindow,point);
        marker.setAnimation(BMAP_ANIMATION_BOUNCE);
        map.enableScrollWheelZoom(true); //开启鼠标滚轮缩放 
  },
  updated:function(){
      
  },
  created:function(){
    
  },
  computed: {
    getUserLangs() {
      return this.$i18n.locale;
    }
  },
  watch:{
      getUserLangs(val) {
        this.langs = val;
        this.markPost(this.langs,this.activeList);
        this.showJob(this.activeList,this.langs);
      }
  },
  
  methods:{ 
    markPost(e){
      var datas = {
          lang:e
      }
      this.getHttp(this,datas,'/front/jobtype',function(obj,data){
         obj.joblist = data;
      });
      this.getHttp(this,datas,'/front/relation',function(obj,data){
         obj.email = data.email;
         obj.tellphone = data.phone;
         obj.address = data.address;
         obj.companyName = data.name
      });
      
    },
    showJob(e,a){
      var datas = {
          lang:a,
          id:e
      }
      var datasTwo = {
          lang:e,
          img:5
      }
       this.getHttp(this,datasTwo,'/front/banner',function(obj,data){
        obj.lbt= data;
         //丢上服务器之后要删掉，仅测试开发
         // for(var a in obj.lbt){
         //     obj.lbt[a].images = obj.inser_src(obj.lbt[a].images);
         // }
      });
      this.activeList = e;
      this.getHttp(this,datas,'/front/job',function(obj,data){
         obj.morkList = data;
      });
    }
  }
}
</script>
<style scoped>
#joinus .content{
  position: relative;
  width: 1200px;
  margin:0 auto;
}
#joinus .navTitle{
  width: 100%;
  height: 90px;
  border-bottom:1px solid #F08200;
}
#joinus .navTitle p{
  width: 1200px;
  line-height: 120px;
  font-size: 24px;
  color: #f08200;
  margin:0 auto;
  font-weight: bold;
  cursor: default;
}
#joinus .navTitle p span{
  font-size: 16px;
  color: #999;
  font-weight: normal;
}   

.item .top_title{
  width:100%;
  text-align: center;
  font-size: 18px;
  color: #f08200;
  margin-top: 40px;
}
.item .top_title span{
  display: block;
  width:60px;
  height: 4px;
  background-color: #f08200;
  margin: 13px auto 0 auto;
}
.item_tab{
  width:1100px;
  margin:15px auto;
}
.item_tab span{
    display: inline-block;
    min-width: 58px;
    height: 24px;
    text-align: center;
    line-height: 24px;
    color: #333;
    margin-right: 10px;
    cursor: default;
    padding: 0 5px;
    margin-bottom: 10px
}
.item_tab span.active{
  background-color: #f08200;
  color: white
}
.item_table{
  width:1100px;
  margin:0 auto;
}
.item_table th{
  border-bottom: 2px solid #f08200;
  font-size: 16px;
  color: #333;
  line-height: 50px;
  padding-left: 30px;
  text-align: left;
  font-weight: bold;
}
.item_table td{
  padding-left: 30px;
  text-align: left;
  border-bottom: 1px solid #dcdcdc;
  font-size: 16px;
  color: #333;
      padding-top: 20px;
    padding-bottom: 20px;
}
.map{
  margin:15px auto 30px auto;
  width: 1200px;
}
.map .map_left{
  width: 920px;
  height:350px;
}
.map .map_left #map{
  width:920;
  height: 350px
}

.map .map_right{
  width: 280px;
  height:350px;
  background-color: #f08200;
  color: white;
  cursor: default;
}
.map .map_right .map_title{
  margin:56px auto 40px 20px;
  font-size: 18px;
}
.map .map_right .map_p{
  margin:0px auto 20px 20px;
  font-size: 14px;
}
#map{
  font-size: 13px
}
</style>
