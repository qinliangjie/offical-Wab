<template>
  <div id="joinus" class="index_box">
    <div class="top_wrap">
           <div class="topImg">
             <img src="../../static/img/topimg.png" alt="">
           </div>
           <div class="topmark"></div>
    </div>
    <div class="navTitle">
      <p>{{navTitle}} <span></span></p>
    </div>
    <div class="content">
        <div class="item">
          <p class="top_title">{{hiring}}
            <span></span>
          </p>
          <div class="item_tab">
              <span>{{job}}： </span>
              <span v-for="item in joblist" :class="activeList == item.id? 'active': ''" :key="item.id" @click="showJob(item.id)">{{item.name}}</span>
              <div class="clear"></div>
          </div>
          <table class="item_table">
            <tr>
              <th v-for="item in tabTh">{{item}}</th>
            </tr>
            <tbody>
              <tr v-for="item in morkList">
                <td>{{item.name}}</td>
                <td>{{item.education}}</td>
                <td>{{item.experience}}</td>
                <td>{{item.update}}</td>
              </tr>
            </tbody>
          </table>
          <div class="clear"></div>
        </div>
        <div class="item">
          <p class="top_title">{{connectUs}}
            <span></span>
          </p>
          <div class="map">
            <div class="map_left fl">
              <div id="map">
                
              </div>
            </div>
            <div class="map_right fl">
              <p class="map_title">{{companyName}}</p>
              <p class="map_p">{{tellphone}}</p>
              <p class="map_p">{{email}}</p>
              <p class="map_p">{{address}}</p>
            </div>
            <div class="clear"></div>
          </div>
        </div>
        <BackTop ></BackTop><!-- 返回顶部 -->
    </div>

  </div>
</template>

<script>
import {MP} from '../../static/js/map.js'
export default {
  data () {
    return {
      langs:'zh',
      activeList:1,
      navTitle:'加入我们',
      hiring:'招聘职位',
      connectUs:'联系我们',
      games:'Join Us',
      job:'职位',
      tabTh:['职位信息','学历','工作经验','更新时间'],
      morkList:[],
      joblist:[{
        id:1,
        name:'全部'
      },{
        id:2,
        name:'技术'
      },{
        id:3,
        name:'设计'
      },{
        id:4,
        name:'运营'
      }],
      workList1:[{
        id:1,
        name:'前端工程师1',
        education:'不限',
        experience:'不限',
        update:'2018-06-22'
      },{
        id:2,
        name:'前端工程师2',
        education:'不限',
        experience:'不限',
        update:'2018-06-22'
      },{
        id:3,
        name:'前端工程师3',
        education:'不限',
        experience:'不限',
        update:'2018-06-22'
      }
      ],
      workList2:[{
        id:1,
        name:'前端工程师4',
        education:'不限',
        experience:'不限',
        update:'2018-06-22'
      },{
        id:2,
        name:'前端工程师5',
        education:'不限',
        experience:'不限',
        update:'2018-06-22'
      },{
        id:3,
        name:'前端工程师6',
        education:'不限',
        experience:'不限',
        update:'2018-06-22'
      }],
      workList3:[{
        id:1,
        name:'前端工程师6',
        education:'不限',
        experience:'不限',
        update:'2018-06-22'
      },{
        id:2,
        name:'前端工程师7',
        education:'不限',
        experience:'不限',
        update:'2018-06-22'
      },{
        id:3,
        name:'前端工程师9',
        education:'不限',
        experience:'不限',
        update:'2018-06-22'
      }],
      workList4:[{
        id:1,
        name:'前端工程师8',
        education:'不限',
        experience:'不限',
        update:'2018-06-22'
      },{
        id:2,
        name:'前端工程师9',
        education:'不限',
        experience:'不限',
        update:'2018-06-22'
      },{
        id:3,
        name:'前端工程师0',
        education:'不限',
        experience:'不限',
        update:'2018-06-22'
      }],
      companyName:'苏州爱洛克信息技术有限公司',
      tellphone:'电话： 0512-66654876',
      email:'邮箱： hr@iclockwork.com',
      address:'地址： 苏州市工业园区若水路388号苏州纳米技术国家大学科技园E幢303室',
      ak:'ueIq0ltF2bWRkHMsQi848Gjbcb7iCKby'
    }
  },
  mounted:function(){ 
    
    this.langs = this.$i18n.locale;
    this.morkList = this.workList1;
    this.$nextTick(function(){  
              var _this = this;  
              MP(_this.ak).then(BMap => {  
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
                    })
    });
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
        console.log(val)
      }
  },
  
  methods:{ 
    showJob:function(e){
      this.activeList = e;
      switch(e){
        case 1:this.morkList = this.workList1;
        break;
        case 2:this.morkList = this.workList2;
        break;
        case 3:this.morkList = this.workList3;
        break;
        case 4:this.morkList = this.workList4;
        break;
      }
      
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
  width:48px;
  height: 24px;
  text-align: center;
  line-height: 24px;
  color: #333;
  margin-right: 10px;
  cursor: default;
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
  line-height: 60px
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
