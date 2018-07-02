<template>
  <div class="left_part">
  <ul id="navInside" >
      <li v-for="item in navlist" :class="activeList == item.id? 'active': 'hovera'" :key="item.id" @click="testtest(item.id)">{{item.name}}</li>
  </ul>
  </div>
</template>
<script>
export default {
  name: 'NavLeft',  
  props: ['navlist'],
  data () {
    return {
      activeList:0,
      isShow: false,
      target: ''
    }
  },
  methods: {
    testtest:function(e){
        var olouceng = document.getElementsByClassName("all_top");
        var oNav = document.getElementById("navInside").getElementsByTagName("li");
        window.scrollTo(0 ,olouceng[e].offsetTop+227);

      },

    scrollFn:function(){
        var olouceng = document.getElementsByClassName("all_top");
        var oNav = document.getElementById("navInside").getElementsByTagName("li");
        var oheight = document.documentElement.clientHeight || document.body.clientHeight;
        var otop = document.documentElement.scrollTop || document.body.scrollTop;
        if(otop>=250){
          for(var i=0;i<olouceng.length;i++){
            if(oheight+otop-olouceng[i].offsetTop>oheight/.9){
              for(var j=0;j<oNav.length;j++){
                oNav[j].className = 'hovera';
              }
              oNav[i].className = 'active'
            }

          }
        }
        if(otop>=210){
          document.getElementById("navInside").style.top = '100px'
        }else{
          document.getElementById("navInside").style.top = 'inherit'
        }
    }
  },
  mounted () {
    
    window.addEventListener('scroll',this.scrollFn,true);
  },
  beforeDestroy () {
    
    window.removeEventListener('scroll',this.scrollFn,true);
  }
}
</script>

<style scoped="">
.left_part{
  position: relative;
  float: left;
  width: 200px;
}
.left_part ul{
  position: fixed;
  width:151px;
  height: 280px;
  padding-top: 50px;
  background:url('../../static/img/nav.png') no-repeat;
}
.left_part ul li{
  width:145px;
  float: left;
  height: 40px;
  border-bottom: 1px solid #d6d7dc;
  color:#333;
  text-align: center;
  line-height: 40px;
  margin-left: 5px;
  cursor: default;
}
.left_part ul li:first-child{
  border-top:1px solid #d6d7dc;
}
.left_part ul li.active{
  background-color: #F08200;
  color: white
}
.hovera:hover{
  color: #F08200;

}
</style>